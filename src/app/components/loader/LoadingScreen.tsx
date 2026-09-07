/**
 * LoadingScreen.tsx
 *
 * Visual restyling: matches the exact color system, typography, and decorative
 * language of the existing portfolio. Functionality is completely unchanged.
 *
 * Design tokens pulled from PageBase.tsx / ClosedBook.tsx / Spread0.tsx:
 *   ink       #2c1810
 *   inkLight  #4a3728
 *   inkFaint  rgba(44,24,16,0.45)
 *   gold      #c9863a  / rgba(201,134,58,…)
 *   cream     #faf6f0
 *   page bg   linear-gradient(135deg, #f9f5ed, #f5efe3, #eee7d8)
 *
 * Fonts (same as portfolio — loaded in fonts.css):
 *   Playfair Display — serif titles
 *   Lato — eyebrow label
 *   Caveat — handwritten annotation
 *   JetBrains Mono — page number / mono detail
 *   Special Elite — typewriter caption
 *
 * Exit logic: unchanged — isComplete + 800 ms grace → setVisible(false)
 * Vara.js: unchanged — purely decorative, loops until unmount
 */

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { VaraText } from "./VaraText";
import { useAssetPreloader } from "./useAssetPreloader";

// ── Portfolio design tokens (mirrored from PageBase.tsx) ─────────────────────
const ink      = "#2c1810";
const inkFaint = "rgba(44,24,16,0.45)";
const inkGhost = "rgba(44,24,16,0.18)";
const gold     = "#c9863a";
const goldFaint= "rgba(201,134,58,0.55)";
const goldGhost= "rgba(201,134,58,0.22)";
const cream    = "#faf6f0";

const serif  = "'Playfair Display', Georgia, serif";
const sans   = "'Lato', 'Helvetica Neue', sans-serif";
const hand   = "'Caveat', cursive";
const mono   = "'JetBrains Mono', monospace";
const typewr = "'Special Elite', monospace";

/** Grace period after assets complete — lets Vara finish its current stroke cycle. */
const EXIT_GRACE_MS = 800;

/** Total "pages" shown in the page counter (matches the book's layout). */
const TOTAL_PAGES = 20;

interface Props {
  /** Called once the fade-out transition is complete — remove loader from DOM */
  onComplete: () => void;
}

// ── Progress line — thin horizontal antique-gold ink stroke ──────────────────
function ProgressLine({ progress }: { progress: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: "min(280px, 55vw)",
        height: 1,
      }}
    >
      {/* Track — faint ruled line like notebook paper */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: inkGhost,
        }}
      />
      {/* Fill — antique gold ink progressing left to right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: `${Math.round(progress * 100)}%`,
          background: `linear-gradient(90deg, ${goldFaint}, ${gold})`,
          transition: "width 0.5s ease",
        }}
      />
      {/* Leading dot — like a fountain pen nib */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${Math.round(progress * 100)}%`,
          transform: "translate(-50%, -50%)",
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: gold,
          opacity: progress > 0 && progress < 1 ? 1 : 0,
          transition: "left 0.5s ease, opacity 0.3s ease",
          boxShadow: `0 0 4px ${gold}66`,
        }}
      />
    </div>
  );
}

// ── Page number — matches portfolio's PageNumber component exactly ────────────
function PageCounter({ progress }: { progress: number }) {
  const currentPage = Math.max(1, Math.round(progress * TOTAL_PAGES));

  return (
    <div
      aria-hidden="true"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontFamily: mono,
        fontSize: 9,
        letterSpacing: "0.2em",
        color: inkFaint,
        textTransform: "uppercase" as const,
      }}
    >
      <span style={{ color: goldFaint }}>pg</span>
      <span>{String(currentPage).padStart(2, "0")}</span>
      <span style={{ color: inkGhost }}>–</span>
      <span>{String(TOTAL_PAGES).padStart(2, "0")}</span>
    </div>
  );
}

// ── Manuscript line decorations — very faint, like paper grid ────────────────
function ManuscriptLines() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        // Horizontal ruled lines — same interval as real notebook paper
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 27px,
          rgba(44,24,16,0.048) 28px
        )`,
        backgroundPosition: "0 20px",
        pointerEvents: "none",
      }}
    />
  );
}

// ── Faint decorative SVG details — barely visible manuscript marks ────────────
function ArchivalDetails() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.045,
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Compass rose — top-right quadrant */}
      <g transform="translate(88%, 16%) scale(0.9)" style={{ transformBox: "fill-box" }}>
        <circle cx="0" cy="0" r="28" fill="none" stroke={ink} strokeWidth="0.6" />
        <circle cx="0" cy="0" r="18" fill="none" stroke={ink} strokeWidth="0.4" />
        <circle cx="0" cy="0" r="3" fill={ink} />
        {/* Cardinal points */}
        {[0, 90, 180, 270].map((deg, i) => (
          <g key={i} transform={`rotate(${deg})`}>
            <line x1="0" y1="-30" x2="0" y2="-20" stroke={ink} strokeWidth="0.7" />
            <polygon points="0,-34 -2.5,-26 2.5,-26" fill={ink} />
          </g>
        ))}
        {/* Intercardinal tick marks */}
        {[45, 135, 225, 315].map((deg, i) => (
          <line
            key={i}
            transform={`rotate(${deg})`}
            x1="0" y1="-28" x2="0" y2="-22"
            stroke={ink} strokeWidth="0.5"
          />
        ))}
        {/* Degree ring — small tick every 30° */}
        {Array.from({ length: 12 }, (_, i) => i * 30).map((deg, i) => (
          <line
            key={i}
            transform={`rotate(${deg})`}
            x1="0" y1="-18" x2="0" y2="-16"
            stroke={ink} strokeWidth="0.4"
          />
        ))}
      </g>

      {/* Old map contour lines — bottom-left, extremely faint */}
      <g transform="translate(6%, 78%)" opacity="0.7">
        {[0, 6, 12, 18, 24].map((offset, i) => (
          <path
            key={i}
            d={`M 0 ${offset} Q 30 ${offset - 4} 60 ${offset + 2} Q 90 ${offset + 5} 120 ${offset - 1}`}
            fill="none"
            stroke={ink}
            strokeWidth="0.5"
          />
        ))}
      </g>

      {/* Botanical sketch — top-left, stem + leaves */}
      <g transform="translate(4%, 6%)" opacity="0.6">
        <line x1="10" y1="80" x2="10" y2="20" stroke={ink} strokeWidth="0.7" />
        <ellipse cx="10" cy="55" rx="14" ry="7" fill="none" stroke={ink} strokeWidth="0.5" transform="rotate(-20, 10, 55)" />
        <ellipse cx="10" cy="38" rx="11" ry="6" fill="none" stroke={ink} strokeWidth="0.5" transform="rotate(15, 10, 38)" />
        <ellipse cx="10" cy="24" rx="8" ry="5" fill="none" stroke={ink} strokeWidth="0.5" />
      </g>

      {/* Archival reference stamp — bottom-right corner, very small */}
      <g transform="translate(86%, 87%)" opacity="0.55">
        <rect x="-22" y="-10" width="44" height="18" fill="none" stroke={ink} strokeWidth="0.5" />
        <text
          x="0" y="3"
          textAnchor="middle"
          fill={ink}
          fontSize="5"
          fontFamily="monospace"
          letterSpacing="1"
        >
          VOL. I
        </text>
      </g>

      {/* Faint ruled margin line — left side, like a journal's red line */}
      <line
        x1="7%"
        y1="8%"
        x2="7%"
        y2="92%"
        stroke={ink}
        strokeWidth="0.4"
        opacity="0.35"
        strokeDasharray="2,6"
      />
    </svg>
  );
}

// ── Aged paper vignette — darker at edges, lighter at center ─────────────────
function PaperVignette() {
  return (
    <>
      {/* Main radial vignette */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 72% at 50% 48%, transparent 0%, rgba(166,130,85,0.12) 55%, rgba(110,76,40,0.28) 85%, rgba(80,52,22,0.38) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Corner darkening — simulates physical paper aging */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 120% 110% at 0% 0%, rgba(120,80,38,0.18) 0%, transparent 40%), " +
            "radial-gradient(ellipse 120% 110% at 100% 0%, rgba(100,65,28,0.14) 0%, transparent 40%), " +
            "radial-gradient(ellipse 120% 110% at 0% 100%, rgba(110,70,30,0.16) 0%, transparent 40%), " +
            "radial-gradient(ellipse 120% 110% at 100% 100%, rgba(120,80,38,0.20) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />
    </>
  );
}

// ── SVG paper grain — subtle fiber/noise overlay ─────────────────────────────
function PaperGrain() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        // Fine fractal noise that mimics paper fiber
        backgroundImage:
          `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E` +
          `%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='5' stitchTiles='stitch'/%3E` +
          `%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E` +
          `%3Crect width='400' height='400' filter='url(%23g)' opacity='0.055'/%3E%3C/svg%3E")`,
        backgroundSize: "400px 400px",
        mixBlendMode: "multiply",
        pointerEvents: "none",
        opacity: 0.9,
      }}
    />
  );
}

// ── Decorative border (book-cover style from ClosedBook.tsx) ─────────────────
function PageBorder() {
  return (
    <>
      {/* Outer border — matches book cover's `border: "1.5px solid rgba(201,134,58,0.55)"` */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "clamp(18px, 3.2vw, 44px)",
          border: `1.5px solid ${goldFaint}`,
          borderRadius: 1,
          pointerEvents: "none",
        }}
      />
      {/* Inner border — matches book cover's `border: "1px solid rgba(201,134,58,0.25)"` */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "clamp(26px, 4.5vw, 60px)",
          border: `1px solid ${goldGhost}`,
          borderRadius: 1,
          pointerEvents: "none",
        }}
      />
      {/* Corner marks — exactly as in ClosedBook: 12×12, 2px gold lines */}
      {[
        { top: "clamp(20px,3.6vw,48px)", left:  "clamp(20px,3.6vw,48px)", t: true,  l: true  },
        { top: "clamp(20px,3.6vw,48px)", right: "clamp(20px,3.6vw,48px)", t: true,  r: true  },
        { bottom: "clamp(20px,3.6vw,48px)", left:  "clamp(20px,3.6vw,48px)", b: true, l: true  },
        { bottom: "clamp(20px,3.6vw,48px)", right: "clamp(20px,3.6vw,48px)", b: true, r: true  },
      ].map(({ t, b, l, r, ...pos }, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: "absolute",
            ...pos,
            width: 14,
            height: 14,
            borderTop:    t ? `2px solid ${goldFaint}` : "none",
            borderBottom: b ? `2px solid ${goldFaint}` : "none",
            borderLeft:   l ? `2px solid ${goldFaint}` : "none",
            borderRight:  r ? `2px solid ${goldFaint}` : "none",
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}

// ── Decorative divider rule — thin horizontal gold line ──────────────────────
function Rule({ opacity = 1, width = "clamp(36px, 8vw, 72px)" }: { opacity?: number; width?: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width,
        height: 1,
        background: `linear-gradient(90deg, transparent, ${goldFaint}, transparent)`,
        opacity,
      }}
    />
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function LoadingScreen({ onComplete }: Props) {
  const { progress, isComplete } = useAssetPreloader();
  const [visible, setVisible] = useState(true);

  const exitScheduledRef = useRef(false);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Asset readiness is the sole authority — Vara is decorative, never gates exit
  useEffect(() => {
    if (!isComplete || exitScheduledRef.current) return;
    exitScheduledRef.current = true;

    const delay = reducedMotion ? 200 : EXIT_GRACE_MS;

    exitTimerRef.current = setTimeout(() => {
      exitTimerRef.current = null;
      setVisible(false);
    }, delay);

    return () => {
      if (exitTimerRef.current !== null) {
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
    };
  }, [isComplete, reducedMotion]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loader"
          role="status"
          aria-label="Loading portfolio"
          aria-live="polite"
          aria-busy={!isComplete}
          initial={{ opacity: 1 }}
          exit={
            reducedMotion
              ? { opacity: 0, transition: { duration: 0.25 } }
              : {
                  opacity: 0,
                  scale: 1.015,
                  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
                }
          }
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            // Aged parchment — matches Spread0's page background exactly
            background:
              "linear-gradient(158deg, #f9f5ed 0%, #f4ede0 35%, #ede4d2 65%, #e8ddc8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "all",
            userSelect: "none",
            WebkitUserSelect: "none",
            overflow: "hidden",
          }}
        >
          {/* ── Layer 0: SVG archival details (barely visible) ── */}
          <ArchivalDetails />

          {/* ── Layer 1: Paper grain noise ── */}
          <PaperGrain />

          {/* ── Layer 2: Ruled manuscript lines ── */}
          <ManuscriptLines />

          {/* ── Layer 3: Aged vignette ── */}
          <PaperVignette />

          {/* ── Layer 4: Book-cover style border + corner marks ── */}
          <PageBorder />

          {/* ── Layer 5: Central composition ── */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(10px, 2vw, 20px)",
              padding: "clamp(24px, 5vw, 64px) clamp(20px, 4vw, 48px)",
              width: "100%",
              maxWidth: "min(600px, 88vw)",
              // Slightly brighter center — makes name pop against vignette edges
              // (mimics old paper aging: center is less exposed to light/dust)
            }}
          >
            {/* ── Eyebrow section label — mirrors "table of contents" label style ── */}
            <div
              style={{
                fontFamily: mono,
                fontSize: "clamp(7px, 0.85vw, 9px)",
                letterSpacing: "0.32em",
                color: `rgba(201,134,58,0.55)`,
                textTransform: "uppercase",
              }}
              aria-hidden="true"
            >
              Portfolio
            </div>

            {/* ── Top rule ── */}
            <Rule width="clamp(32px, 8vw, 68px)" />

            {/* ── Vara.js handwriting — dark brown fountain-pen ink ── */}
            {/*
              VaraText loops "Vaibhav Kawde" stroke by stroke.
              Color is set to #2c1810 (the portfolio's `ink` constant) via
              VaraText's text color prop — matches ink on parchment.
            */}
            <div
              style={{
                // Subtle sepia filter over the SVG gives ink-on-parchment warmth
                filter: "sepia(0.18) contrast(1.06)",
                width: "100%",
              }}
            >
              <VaraText text="Vaibhav Kawde" />
            </div>

            {/* ── Bottom rule ── */}
            <Rule width="clamp(28px, 6vw, 54px)" opacity={0.7} />

            {/* ── Handwritten annotation — Caveat, like the book's Annotation component ── */}
            <div
              style={{
                fontFamily: hand,
                fontSize: "clamp(13px, 1.8vw, 17px)",
                color: inkFaint,
                letterSpacing: "0.01em",
                fontStyle: "italic",
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              Opening the notebook…
            </div>

            {/* ── Loading indicator area ── */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                marginTop: "clamp(2px, 0.8vw, 10px)",
              }}
            >
              {/* Thin antique-gold progress line with leading dot */}
              <ProgressLine progress={progress} />

              {/* Page counter — mirrors PageNumber component exactly */}
              <PageCounter progress={progress} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
