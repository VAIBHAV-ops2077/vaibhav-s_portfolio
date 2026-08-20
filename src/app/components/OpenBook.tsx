import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, BookOpen } from "lucide-react";
import { SpreadContent } from "./SpreadContent";
import { playRandomPageTurnSound } from "../utils/pageTurnSound";
import spiralSrc from "../../../3dAssets/Spiral2.png";

const TOTAL_SPREADS = 10;

const SPREAD_TITLES = [
  "Introduction",
  "About Me",
  "Skills",
  "StockSync",
  "Converge",
  "CoWriter",
  "Interactive & Game Dev",
  "Experience & Education",
  "Hackathons & Portfolio",
  "Contact",
];

interface Props {
  onClose: () => void;
}

interface FlipState {
  direction: "fwd" | "bwd";
  frontSpread: number;
  frontSide: "left" | "right";
  backSpread: number;
  backSide: "left" | "right";
  flipperSide: "left" | "right";
}

export function OpenBook({ onClose }: Props) {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [leftSpread, setLeftSpread] = useState(0);
  const [rightSpread, setRightSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipState, setFlipState] = useState<FlipState | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobilePage, setMobilePage] = useState(0); // 0 = left of spread 0, etc.

  // Touch tracking
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const flipForward = useCallback(() => {
    if (isFlipping || spreadIndex >= TOTAL_SPREADS - 1) return;
    playRandomPageTurnSound();
    const next = spreadIndex + 1;
    setRightSpread(next);
    setFlipState({
      direction: "fwd",
      frontSpread: spreadIndex,
      frontSide: "right",
      backSpread: next,
      backSide: "left",
      flipperSide: "right",
    });
    setIsFlipping(true);
  }, [isFlipping, spreadIndex]);

  const flipBackward = useCallback(() => {
    if (isFlipping || spreadIndex <= 0) return;
    playRandomPageTurnSound();
    const prev = spreadIndex - 1;
    setLeftSpread(prev);
    setFlipState({
      direction: "bwd",
      frontSpread: spreadIndex,
      frontSide: "left",
      backSpread: prev,
      backSide: "right",
      flipperSide: "left",
    });
    setIsFlipping(true);
  }, [isFlipping, spreadIndex]);

  const handleFlipComplete = useCallback(() => {
    if (!flipState) return;
    const newIndex = flipState.direction === "fwd" ? spreadIndex + 1 : spreadIndex - 1;
    setSpreadIndex(newIndex);
    setLeftSpread(newIndex);
    setRightSpread(newIndex);
    setIsFlipping(false);
    setFlipState(null);
  }, [flipState, spreadIndex]);

  // Mobile page navigation
  const mobilePageCount = TOTAL_SPREADS * 2;

  const mobileNext = useCallback(() => {
    if (mobilePage < mobilePageCount - 1) {
      playRandomPageTurnSound();
      setMobilePage((p) => p + 1);
    }
  }, [mobilePage, mobilePageCount]);

  const mobilePrev = useCallback(() => {
    if (mobilePage > 0) {
      playRandomPageTurnSound();
      setMobilePage((p) => p - 1);
    }
  }, [mobilePage]);

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        if (isMobile) mobileNext();
        else flipForward();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (isMobile) mobilePrev();
        else flipBackward();
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [flipForward, flipBackward, mobileNext, mobilePrev, onClose, isMobile]);

  // Touch
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) {
        if (isMobile) mobileNext();
        else flipForward();
      } else {
        if (isMobile) mobilePrev();
        else flipBackward();
      }
    }
  };

  // Mobile spread/side from mobilePage
  const mobileSpread = Math.floor(mobilePage / 2);
  const mobileSide: "left" | "right" = mobilePage % 2 === 0 ? "left" : "right";

  const pageNumLeft = spreadIndex * 2 + 1;
  const pageNumRight = spreadIndex * 2 + 2;

  if (isMobile) {
    return (
      <div
        className="flex flex-col items-center justify-center w-full h-full px-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Mobile book page */}
        <div className="relative flex flex-col" style={{ width: "min(95vw, 400px)", height: "min(78vh, 560px)" }}>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
            style={{
              fontFamily: "Lato, sans-serif",
              fontSize: 12,
              color: "#2c1810",
              border: "1px solid rgba(44,24,16,0.22)",
              borderRadius: 3,
              padding: "4px 8px",
            }}
          >
            <X size={14} /> Close
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={mobilePage}
              className="w-full h-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              style={{
                background: "#faf6f0",
                borderRadius: 4,
                boxShadow: "0 8px 40px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.12)",
                overflow: "hidden",
                border: "1px solid rgba(201,134,58,0.3)",
              }}
            >
              <div style={{ width: "100%", height: "100%", padding: "20px 18px", overflowY: "auto" }}>
                <SpreadContent spreadIndex={mobileSpread} side={mobileSide} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile nav bar */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={mobilePrev}
              disabled={mobilePage <= 0}
              className="flex items-center gap-1 text-sm disabled:opacity-30 hover:opacity-70 transition-opacity"
              style={{ fontFamily: "Lato, sans-serif", color: "#2c1810" }}
            >
              <ChevronLeft size={16} /> Prev
            </button>

            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "#7a6550" }}>
              {String(mobilePage + 1).padStart(2, "0")} / {String(mobilePageCount).padStart(2, "0")}
            </span>

            <button
              onClick={mobileNext}
              disabled={mobilePage >= mobilePageCount - 1}
              className="flex items-center gap-1 text-sm disabled:opacity-30 hover:opacity-70 transition-opacity"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#2c1810",
                border: "1px solid rgba(44,24,16,0.22)",
                borderRadius: 3,
                padding: "4px 8px",
              }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 select-none"
      style={{ width: "100%", height: "100%" }}
    >
      {/* ── Top bar: close button ── */}
      <div
        className="flex items-center justify-between"
        style={{ width: "min(92vw, 1080px)" }}
      >
        <div className="flex items-center gap-2">
          <BookOpen size={14} color="#c9863a" />
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.18em",
              color: "rgba(44,24,16,0.5)",
              textTransform: "uppercase",
            }}
          >
            Portfolio · Vaibhav Kawde
          </span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
          style={{
            fontFamily: "Lato, sans-serif",
            fontSize: 12,
            color: "#2c1810",
            letterSpacing: "0.06em",
            border: "1px solid rgba(44,24,16,0.22)",
            borderRadius: 3,
            padding: "4px 8px",
          }}
        >
          <X size={14} />
          Close book
        </button>
      </div>

      {/* ── Main book container (spread view) ── */}
      <div
        className="relative"
        style={{
          width: "min(96vw, 1220px)",
          height: "min(78vh, 700px)",
          perspective: 2000,
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* ── Book drop shadow onto desk ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "-12px -16px",
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.12) 60%, transparent 80%)",
            filter: "blur(16px)",
            transform: "translateY(16px) scale(0.96)",
            zIndex: 0,
          }}
        />

        {/* ── Base LEFT page ── */}
        <div
          className="absolute top-0 bottom-0 left-0 overflow-hidden"
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest("a")) return;
            flipBackward();
          }}
          style={{
            width: "50%",
            background: "#faf6f0",
            borderRadius: "4px 0 0 4px",
            borderLeft: "2px solid rgba(201,134,58,0.4)",
            borderTop: "1px solid rgba(201,134,58,0.25)",
            borderBottom: "1px solid rgba(201,134,58,0.25)",
            boxShadow:
              "-6px 0 24px rgba(0,0,0,0.18), -1px 0 4px rgba(0,0,0,0.1), inset -20px 0 30px rgba(44,24,16,0.06)",
            zIndex: 2,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(100,80,60,0.05) 28px)",
            backgroundPosition: "0 8px",
          }}
        >
          {/* Subtle page texture & spine gradient overlay */}
          <div
            className="absolute top-0 bottom-0 right-0 pointer-events-none"
            style={{
              width: 60,
              background: "linear-gradient(to right, transparent, rgba(0,0,0,0.07))",
              zIndex: 10,
            }}
          />
          {/* Page margin guide line (blueprint feel) */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: 48,
              width: 1,
              background: "rgba(201,134,58,0.18)",
              zIndex: 10,
            }}
          />

          {/* Page content */}
          <div style={{ width: "100%", height: "100%", padding: "20px 24px", overflowY: "auto" }}>
            <SpreadContent spreadIndex={leftSpread} side="left" />
          </div>
        </div>

        {/* ── Base RIGHT page ── */}
        <div
          className="absolute top-0 bottom-0 right-0 overflow-hidden"
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest("a")) return;
            flipForward();
          }}
          style={{
            width: "50%",
            background: "#f5f1e8",
            borderRadius: "0 4px 4px 0",
            borderRight: "2px solid rgba(201,134,58,0.4)",
            borderTop: "1px solid rgba(201,134,58,0.25)",
            borderBottom: "1px solid rgba(201,134,58,0.25)",
            boxShadow:
              "6px 0 24px rgba(0,0,0,0.18), 1px 0 4px rgba(0,0,0,0.1), inset 20px 0 30px rgba(44,24,16,0.06)",
            zIndex: 2,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(100,80,60,0.05) 28px)",
            backgroundPosition: "0 8px",
          }}
        >
          {/* Spine shadow overlay */}
          <div
            className="absolute top-0 bottom-0 left-0 pointer-events-none"
            style={{
              width: 60,
              background: "linear-gradient(to left, transparent, rgba(0,0,0,0.07))",
              zIndex: 10,
            }}
          />
          {/* Right margin guide line */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              right: 48,
              width: 1,
              background: "rgba(201,134,58,0.18)",
              zIndex: 10,
            }}
          />

          {/* Page content */}
          <div style={{ width: "100%", height: "100%", padding: "20px 24px", overflowY: "auto" }}>
            <SpreadContent spreadIndex={rightSpread} side="right" />
          </div>
        </div>

        {/* ── Flipping leaf (3D animated element) ── */}
        {isFlipping && flipState && (
          <motion.div
            key={`flipper-${flipState.direction}-${flipState.frontSpread}`}
            className="absolute top-0 bottom-0 overflow-hidden"
            style={{
              width: "50%",
              [flipState.flipperSide === "right" ? "right" : "left"]: 0,
              transformOrigin: flipState.flipperSide === "right" ? "left center" : "right center",
              transformStyle: "preserve-3d",
              zIndex: 20,
              boxShadow:
                flipState.direction === "fwd"
                  ? "-8px 0 32px rgba(0,0,0,0.25)"
                  : "8px 0 32px rgba(0,0,0,0.25)",
            }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: flipState.direction === "fwd" ? -180 : 180 }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
            onAnimationComplete={handleFlipComplete}
          >
            {/* Front face */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                background: flipState.flipperSide === "right" ? "#f5f1e8" : "#faf6f0",
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(100,80,60,0.05) 28px)",
                backgroundPosition: "0 8px",
              }}
            >
              {/* Spine shadow on the edge that faces the center */}
              <div
                className="absolute top-0 bottom-0 pointer-events-none"
                style={{
                  [flipState.flipperSide === "right" ? "left" : "right"]: 0,
                  width: 50,
                  background:
                    flipState.flipperSide === "right"
                      ? "linear-gradient(to right, rgba(0,0,0,0.08), transparent)"
                      : "linear-gradient(to left, rgba(0,0,0,0.1), transparent)",
                  zIndex: 10,
                }}
              />
              <div style={{ width: "100%", height: "100%", padding: "20px 24px", overflowY: "auto" }}>
                <SpreadContent spreadIndex={flipState.frontSpread} side={flipState.frontSide} />
              </div>
            </div>

            {/* Back face */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background: flipState.flipperSide === "right" ? "#faf6f0" : "#f5f1e8",
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(100,80,60,0.05) 28px)",
                backgroundPosition: "0 8px",
              }}
            >
              <div
                className="absolute top-0 bottom-0 pointer-events-none"
                style={{
                  [flipState.flipperSide === "right" ? "right" : "left"]: 0,
                  width: 50,
                  background:
                    flipState.flipperSide === "right"
                      ? "linear-gradient(to left, rgba(0,0,0,0.1), transparent)"
                      : "linear-gradient(to right, rgba(0,0,0,0.08), transparent)",
                  zIndex: 10,
                }}
              />
              <div style={{ width: "100%", height: "100%", padding: "20px 24px", overflowY: "auto" }}>
                <SpreadContent spreadIndex={flipState.backSpread} side={flipState.backSide} />
              </div>
            </div>

            {/* Page edge highlight (simulates page thickness) */}
            <div
              className="absolute top-0 bottom-0"
              style={{
                [flipState.flipperSide === "right" ? "right" : "left"]: 0,
                width: 2,
                background: "rgba(255,255,255,0.4)",
                zIndex: 30,
              }}
            />
          </motion.div>
        )}

        {/* ── Click zones for flipping ── */}
        {!isFlipping && (
          <>
            {spreadIndex > 0 && (
              <div
                className="absolute left-0 top-0 bottom-0 cursor-w-resize"
                style={{ width: "5%", zIndex: 5 }}
                onClick={flipBackward}
              />
            )}
            {spreadIndex < TOTAL_SPREADS - 1 && (
              <div
                className="absolute right-0 top-0 bottom-0 cursor-e-resize"
                style={{ width: "5%", zIndex: 5 }}
                onClick={flipForward}
              />
            )}
          </>
        )}
        {/* ── Spiral PNG binding — absolute, z-index 15, centered on the book spine ──
             Positioned directly in the book container (position:relative, explicit height)
             so height:100% resolves correctly. z-index 15 > pages (2) = always visible.
             width:auto keeps the 200×1204 aspect ratio intact (no distortion/cropping).
             CSS mask fades ring tails so they appear to tuck behind each page edge.      */}
        <img
          src={spiralSrc}
          alt=""
          draggable={false}
          style={{
            position:      "absolute",
            top:           0,
            left:          "50%",
            transform:     "translateX(-50%)",
            height:        "100%",
            width:         "auto",
            zIndex:        15,
            pointerEvents: "none",
            userSelect:    "none",
            display:       "block",
            /* Fade ring tails so they merge into the page edges */
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
            maskImage:       "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        />
      </div>


      {/* ── Navigation bar ── */}
      <div
        className="flex items-center gap-6"
        style={{ width: "min(92vw, 1080px)" }}
      >
        {/* Prev button */}
        <button
          onClick={flipBackward}
          disabled={spreadIndex <= 0 || isFlipping}
          className="flex items-center gap-2 disabled:opacity-25 hover:opacity-70 transition-opacity"
          style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#2c1810", letterSpacing: "0.06em" }}
        >
          <ChevronLeft size={16} />
          Prev
        </button>

        {/* Page indicator – centered */}
        <div className="flex-1 flex items-center justify-center gap-2">
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: "#7a6550",
              letterSpacing: "0.1em",
            }}
          >
            {String(pageNumLeft).padStart(2, "0")}–{String(pageNumRight).padStart(2, "0")}
          </span>
          <span style={{ color: "rgba(122,101,80,0.35)", fontSize: 10 }}>·</span>
          <span
            style={{
              fontFamily: "Lato, sans-serif",
              fontSize: 11,
              color: "rgba(44,24,16,0.45)",
              letterSpacing: "0.08em",
            }}
          >
            {SPREAD_TITLES[spreadIndex]}
          </span>

          {/* Dots */}
          <div className="flex gap-1 ml-2">
            {Array.from({ length: TOTAL_SPREADS }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (isFlipping || i === spreadIndex) return;
                  playRandomPageTurnSound();
                  setSpreadIndex(i);
                  setLeftSpread(i);
                  setRightSpread(i);
                }}
                style={{
                  width: i === spreadIndex ? 14 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === spreadIndex ? "#c9863a" : "rgba(44,24,16,0.2)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={flipForward}
          disabled={spreadIndex >= TOTAL_SPREADS - 1 || isFlipping}
          className="flex items-center gap-2 disabled:opacity-25 hover:opacity-70 transition-opacity"
          style={{
            fontFamily: "Lato, sans-serif",
            fontSize: 12,
            color: "#2c1810",
            letterSpacing: "0.06em",
            border: "1px solid rgba(44,24,16,0.22)",
            borderRadius: 3,
            padding: "4px 8px",
          }}
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Keyboard hint */}
      <p style={{ fontFamily: "Lato, sans-serif", fontSize: 10, color: "rgba(44,24,16,0.3)", letterSpacing: "0.08em" }}>
        Use ← → arrow keys or click page edges to flip
      </p>
    </div>
  );
}
