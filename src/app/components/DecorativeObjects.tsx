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
  },
  {
    id: "globe", src: globeSrc, corner: "tr",
    width: "clamp(110px, 12vw, 200px)",
    floatAmp: 5, floatMs: 7200, floatPhase: 1.10,
    rotAmp: 0, rotMs: 11000, rotPhase: 2.00,
    spinMs: 0,
    cursorRot: 4, cursorPx: 8, cursorDamp: 0.038,
    hoverScale: 1.06, scaleDamp: 0.06,
  },
  {
    id: "hephaestus", src: hephaestusSrc, corner: "bl",
    width: "clamp(110px, 11.5vw, 195px)",
    floatAmp: 4, floatMs: 9000, floatPhase: 2.30,
    rotAmp: 1.0, rotMs: 14000, rotPhase: 1.50,
    spinMs: 0,
    cursorRot: 3, cursorPx: 6, cursorDamp: 0.028,
    hoverScale: 1.06, scaleDamp: 0.05,
  },
  {
    id: "horse", src: horseSrc, corner: "br",
    width: "clamp(110px, 12.5vw, 210px)",
    floatAmp: 6, floatMs: 6500, floatPhase: 3.70,
    rotAmp: 1.8, rotMs: 10000, rotPhase: 0.90,
    spinMs: 0,
    cursorRot: 5, cursorPx: 9, cursorDamp: 0.040,
    hoverScale: 1.06, scaleDamp: 0.065,
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

// ─── Single decorative artifact ────────────────────────────────────────────────
function Artifact({ cfg }: { cfg: ObjCfg }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

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
    <div style={cornerCSS(cfg.corner)}>
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
export function DecorativeObjects() {
  return (
    <>
      {CONFIGS.map((cfg) => (
        <Artifact key={cfg.id} cfg={cfg} />
      ))}
    </>
  );
}
