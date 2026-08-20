/**
 * DecorativeObjects.tsx
 *
 * Four 2D artifact images (Compass, Globe, Hephaestus, Horse) placed in the
 * four screen corners as decorative scene elements.
 *
 * Animation architecture:
 *  - ZERO React state updates per frame — all animation uses refs + rAF.
 *  - Cursor tracking: module-level shared object updated by one mousemove listener.
 *  - Idle motion: sine-wave float + slow rotation, different phase per object.
 *  - Cursor parallax: smooth lerp with per-object damping (inertia).
 *  - Hover: scale lerp, amplified cursor response while hovered.
 *  - Shadows: CSS `filter: drop-shadow` on <img> + animated contact-shadow div.
 *
 * Book-phase animation:
 *  - `phase` prop drives entrance/exit via CSS transition on the outer wrapper.
 *  - "closed"  → completely off-screen + visibility:hidden (no flicker on load).
 *  - "opening" → slides in diagonally from respective corner with stagger.
 *  - "open"    → settled at final corner position.
 *  - "closing" → slides back out to respective corner.
 *  - The inner rAF wrapper is unaffected by the phase transition.
 *
 * Layering:
 *  Objects render at z-index 20, above the book layer (z-index 10) in App.tsx.
 */

import { CSSProperties, useEffect, useRef } from "react";

import compassSrc    from "../../../3dAssets/COMPASS.png";
import globeSrc      from "../../../3dAssets/GLOBE.png";
import hephaestusSrc from "../../../3dAssets/HEPHAESTUS.png";
import horseSrc      from "../../../3dAssets/Horse.png";

// ─── Shared cursor state ───────────────────────────────────────────────────────
const cursor = { nx: 0, ny: 0 };

if (typeof window !== "undefined") {
  window.addEventListener(
    "mousemove",
    (e) => {
      cursor.nx = (e.clientX / window.innerWidth) * 2 - 1;
      cursor.ny = (e.clientY / window.innerHeight) * 2 - 1;
    },
    { passive: true }
  );
}

// ─── Phase type ────────────────────────────────────────────────────────────────
export type BookPhase = "closed" | "opening" | "open" | "closing";

// ─── Configuration ─────────────────────────────────────────────────────────────
type Corner = "tl" | "tr" | "bl" | "br";

interface ObjCfg {
  id: string;
  src: string;
  corner: Corner;
  width: string;
  floatAmp: number;
  floatMs: number;
  floatPhase: number;
  rotAmp: number;
  rotMs: number;
  rotPhase: number;
  spinMs: number;
  cursorRot: number;
  cursorPx: number;
  cursorDamp: number;
  hoverScale: number;
  scaleDamp: number;
  /** Entrance stagger delay in ms from when phase becomes "opening". */
  entranceDelayMs: number;
  /** Starting rotation offset for entrance (degrees). Positive = CW. */
  entranceRotDeg: number;
  /** Off-screen translate offset as [x, y] pixel strings. */
  hiddenTranslate: [string, string];
}

const CONFIGS: ObjCfg[] = [
  {
    id: "compass", src: compassSrc, corner: "tl",
    width: "clamp(110px, 12.5vw, 210px)",
    floatAmp: 7, floatMs: 5800, floatPhase: 0.00,
    rotAmp: 2.5, rotMs: 8000, rotPhase: 0.40,
    spinMs: 0,
    cursorRot: 7, cursorPx: 12, cursorDamp: 0.045,
    hoverScale: 1.06, scaleDamp: 0.07,
    entranceDelayMs: 0,
    entranceRotDeg: -4,
    hiddenTranslate: ["-160px", "-140px"],
  },
  {
    id: "globe", src: globeSrc, corner: "tr",
    width: "clamp(110px, 12vw, 200px)",
    floatAmp: 5, floatMs: 7200, floatPhase: 1.10,
    rotAmp: 0, rotMs: 11000, rotPhase: 2.00,
    spinMs: 0,
    cursorRot: 4, cursorPx: 8, cursorDamp: 0.038,
    hoverScale: 1.06, scaleDamp: 0.06,
    entranceDelayMs: 120,
    entranceRotDeg: 4,
    hiddenTranslate: ["160px", "-140px"],
  },
  {
    id: "hephaestus", src: hephaestusSrc, corner: "bl",
    width: "clamp(110px, 11.5vw, 195px)",
    floatAmp: 4, floatMs: 9000, floatPhase: 2.30,
    rotAmp: 1.0, rotMs: 14000, rotPhase: 1.50,
    spinMs: 0,
    cursorRot: 3, cursorPx: 6, cursorDamp: 0.028,
    hoverScale: 1.06, scaleDamp: 0.05,
    entranceDelayMs: 200,
    entranceRotDeg: 3,
    hiddenTranslate: ["-160px", "140px"],
  },
  {
    id: "horse", src: horseSrc, corner: "br",
    width: "clamp(110px, 12.5vw, 210px)",
    floatAmp: 6, floatMs: 6500, floatPhase: 3.70,
    rotAmp: 1.8, rotMs: 10000, rotPhase: 0.90,
    spinMs: 0,
    cursorRot: 5, cursorPx: 9, cursorDamp: 0.040,
    hoverScale: 1.06, scaleDamp: 0.065,
    entranceDelayMs: 310,
    entranceRotDeg: -3,
    hiddenTranslate: ["160px", "140px"],
  },
];

const EDGE_TOP = "clamp(0px, 0.8vw, 12px)";
const EDGE_RIGHT = "clamp(20px, 2.8vw, 52px)";
const EDGE_LEFT = "clamp(16px, 2.4vw, 42px)";
const EDGE_BOTTOM = "clamp(-10px, 0.4vw, 18px)";
const HORSE_RIGHT = "-10px";
const GLOBE_RIGHT = "-6px";
const COMPASS_LEFT = "-6px";
const HEPHAESTUS_LEFT = "-8px";

function cornerCSS(c: Corner): CSSProperties {
  const base: CSSProperties = {
    position: "absolute",
    zIndex: 20,
    pointerEvents: "none",
  };
  if (c === "tl") return { ...base, top: EDGE_TOP, left: COMPASS_LEFT };
  if (c === "tr") return { ...base, top: EDGE_TOP, right: GLOBE_RIGHT };
  if (c === "bl") return { ...base, bottom: EDGE_BOTTOM, left: HEPHAESTUS_LEFT };
  /* br */        return { ...base, bottom: EDGE_BOTTOM, right: HORSE_RIGHT };
}

// ─── Entrance/exit transform helpers ──────────────────────────────────────────

function phaseTransform(isVisible: boolean, cfg: ObjCfg): string {
  if (isVisible) {
    return "translate(0px, 0px) scale(1) rotate(0deg)";
  }
  const [tx, ty] = cfg.hiddenTranslate;
  // Scale starts slightly smaller (0.90) for a subtle grow-in on entrance
  return `translate(${tx}, ${ty}) scale(0.90) rotate(${cfg.entranceRotDeg}deg)`;
}

// ─── Single decorative artifact ────────────────────────────────────────────────
function Artifact({ cfg, phase }: { cfg: ObjCfg; phase: BookPhase }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const visibilityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isVisible = phase === "opening" || phase === "open";

  // Initialize to hidden state without any transition on mount.
  // Two rAF frames guarantee the browser has painted the hidden state
  // before we re-enable transitions, preventing any first-frame flash.
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.transform = phaseTransform(false, cfg);
    el.style.opacity = "0";
    el.style.visibility = "hidden";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Two frames in: safe to re-enable transitions.
        if (el) el.style.transition = "";
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount only.

  // Drive entrance/exit whenever phase changes.
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    // Cancel any pending hide-visibility timer.
    if (visibilityTimerRef.current !== null) {
      clearTimeout(visibilityTimerRef.current);
      visibilityTimerRef.current = null;
    }

    if (isVisible) {
      // Immediately visible so the slide-in is seen from the first frame.
      el.style.visibility = "visible";

      const d = cfg.entranceDelayMs;
      // Transform: spring-like ease with micro-overshoot — arrives first.
      // Opacity: eases in slightly behind the position for a natural feel.
      el.style.transition = [
        `transform 1000ms cubic-bezier(0.34, 1.12, 0.64, 1) ${d}ms`,
        `opacity   800ms cubic-bezier(0.22, 1, 0.36, 1)    ${d + 60}ms`,
      ].join(", ");

      el.style.opacity = "1";
      el.style.transform = phaseTransform(true, cfg);
    } else {
      // Exit: ease-in acceleration — images leave with growing momentum.
      el.style.transition = [
        "transform 650ms cubic-bezier(0.55, 0, 0.85, 0.10) 0ms",
        "opacity   500ms cubic-bezier(0.55, 0, 1, 0.45)    0ms",
      ].join(", ");

      el.style.opacity = "0";
      el.style.transform = phaseTransform(false, cfg);

      // After the longest exit transition + small buffer, kill visibility.
      visibilityTimerRef.current = setTimeout(() => {
        if (outerRef.current) outerRef.current.style.visibility = "hidden";
        visibilityTimerRef.current = null;
      }, 680);
    }
  }, [isVisible, cfg]);

  const live = useRef({
    rotX: 0,
    rotY: 0,
    tx: 0,
    ty: 0,
    scale: 1,
    hovered: false,
    clickedAt: -1,
  });

  useEffect(() => {
    function tick(t: number) {
      const st = live.current;

      const floatY =
        Math.sin((t / cfg.floatMs) * Math.PI * 2 + cfg.floatPhase) * cfg.floatAmp;

      const idleRot =
        Math.sin((t / cfg.rotMs) * Math.PI * 2 + cfg.rotPhase) * cfg.rotAmp;

      const spinRot = cfg.spinMs > 0 ? ((t / cfg.spinMs) * 360) % 360 : 0;

      const boost = st.hovered ? 1.6 : 1.0;
      const tRotX = cursor.ny * cfg.cursorRot * boost;
      const tRotY = -cursor.nx * cfg.cursorRot * boost;
      const tTx = cursor.nx * cfg.cursorPx * boost;
      const tTy = cursor.ny * cfg.cursorPx * 0.4 * boost;

      st.rotX += (tRotX - st.rotX) * cfg.cursorDamp;
      st.rotY += (tRotY - st.rotY) * cfg.cursorDamp;
      st.tx += (tTx - st.tx) * cfg.cursorDamp;
      st.ty += (tTy - st.ty) * cfg.cursorDamp;

      // Soft sine-wave click breath
      const CLICK_DUR = 480;
      const elapsed = st.clickedAt >= 0 ? t - st.clickedAt : CLICK_DUR;
      if (elapsed >= CLICK_DUR) st.clickedAt = -1;
      const clickBreath = elapsed < CLICK_DUR
        ? -0.055 * Math.sin((Math.PI * elapsed) / CLICK_DUR)
        : 0;
      const targetScale = (st.hovered ? cfg.hoverScale : 1.0) + clickBreath;
      st.scale += (targetScale - st.scale) * cfg.scaleDamp;

      if (innerRef.current) {
        innerRef.current.style.transform = [
          `translate(${st.tx.toFixed(2)}px, ${(floatY + st.ty).toFixed(2)}px)`,
          `perspective(900px)`,
          `rotateX(${st.rotX.toFixed(3)}deg)`,
          `rotateY(${st.rotY.toFixed(3)}deg)`,
          `rotateZ(${(idleRot + spinRot).toFixed(3)}deg)`,
          `scale(${st.scale.toFixed(4)})`,
        ].join(" ");
      }

      if (shadowRef.current) {
        const normFloat = floatY / (cfg.floatAmp || 1);
        const sScaleX = 0.80 + normFloat * 0.10;
        const sOpacity = 0.20 + normFloat * 0.06;
        shadowRef.current.style.transform =
          `translateX(-50%) scaleX(${sScaleX.toFixed(3)})`;
        shadowRef.current.style.opacity =
          Math.max(0.08, Math.min(0.30, sOpacity)).toFixed(3);
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [cfg]);

  return (
    // Outer wrapper: phase-driven entrance/exit via CSS transition on transform.
    // Initial state is set imperatively in useEffect to avoid flash on load.
    <div
      ref={outerRef}
      style={{
        ...cornerCSS(cfg.corner),
        willChange: "transform, opacity",
      }}
    >
      <div
        style={{
          position: "relative",
          width: cfg.width,
          pointerEvents: "auto",
        }}
        onMouseEnter={() => { live.current.hovered = true; }}
        onMouseLeave={() => { live.current.hovered = false; }}
        onClick={() => { live.current.clickedAt = performance.now(); }}
      >
        {/* Inner wrapper: rAF float + parallax + hover scale (unchanged) */}
        <div ref={innerRef} style={{ position: "relative", willChange: "transform" }}>
          <img
            src={cfg.src}
            alt=""
            aria-hidden
            draggable={false}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              userSelect: "none",
              pointerEvents: "none",
              filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.55)) drop-shadow(0 4px 8px rgba(0,0,0,0.35))",
            }}
          />
        </div>

        {/* Ambient contact shadow on the desk plane below */}
        <div
          ref={shadowRef}
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "50%",
            width: "72%",
            height: "16px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 70%)",
            pointerEvents: "none",
            transformOrigin: "center center",
            willChange: "transform, opacity",
          }}
        />
      </div>
    </div>
  );
}

// ─── Public export ─────────────────────────────────────────────────────────────
export function DecorativeObjects({ phase }: { phase: BookPhase }) {
  return (
    <>
      {CONFIGS.map((cfg) => (
        <Artifact key={cfg.id} cfg={cfg} phase={phase} />
      ))}
    </>
  );
}
