import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ClosedBook } from "./components/ClosedBook";
import { OpenBook } from "./components/OpenBook";
import { DecorativeObjects } from "./components/DecorativeObjects";
import type { BookPhase } from "./components/DecorativeObjects";
import backgroundImg from "../assets/background.png";

export default function App() {
  const [phase, setPhase] = useState<BookPhase>("closed");

  // Derive the book stage that controls which component is rendered.
  const stage = phase === "open" || phase === "closing" ? "open" : "closed";

  /** Fires immediately when user clicks the book — triggers corner-image entrance. */
  const handleOpening = useCallback(() => {
    setPhase("opening");
  }, []);

  /** Fires after 900 ms — book has finished its opening animation. */
  const handleOpen = useCallback(() => {
    setPhase("open");
  }, []);

  /** Fires when the user requests to close the book. */
  const handleClose = useCallback(() => {
    // 1. Kick off corner-image exit immediately.
    setPhase("closing");
    // 2. After the images have exited (~500 ms) + small buffer, switch to closed.
    setTimeout(() => {
      setPhase("closed");
    }, 600);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden select-none"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Vignette — darkened corners */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.60) 100%)",
          boxShadow: "inset 0 0 300px rgba(0,0,0,0.65)",
        }}
      />

      {/* Decorative corner artifacts — phase-driven entrance/exit */}
      <DecorativeObjects phase={phase} />

      {/*
        Book layer — wrapped in a positioned div at z-index 10 so it always
        renders above the decorative objects. The inner motion.divs use
        absolute inset-0 and remain scoped to this wrapper.
      */}
      <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
        <AnimatePresence mode="wait">
          {stage === "closed" ? (
            <motion.div
              key="closed"
              className="absolute inset-0 flex items-center justify-center"
              exit={{
                opacity: 0,
                scale: 1.08,
                transition: { duration: 0.45, ease: [0.4, 0, 1, 1] },
              }}
            >
              <ClosedBook onOpening={handleOpening} onOpen={handleOpen} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <OpenBook onClose={handleClose} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

