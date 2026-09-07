/**
 * VaraText.tsx
 *
 * Renders "Vaibhav Kawde" as a handwriting stroke-by-stroke animation using
 * Vara.js, looping continuously while the loading screen is visible.
 *
 * Design notes
 * ────────────
 *  - Uses a React ref for the container — never a fixed global ID.
 *  - Generates a unique ID per mount via useId() to avoid conflicts.
 *  - Destroys and recreates the Vara instance on each loop iteration to
 *    avoid internal SVG state issues without flickering.
 *  - Loop sequence:
 *      draw → hold 700 ms → fade paths (400 ms CSS) → clear → redraw
 *  - prefers-reduced-motion: renders name in static text, no animation.
 *  - Cleans up all timeouts and intervals on unmount.
 */

import { useEffect, useRef, useId } from "react";
import Vara from "vara";

const VARA_FONT_URL =
  "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json";

const DRAW_DURATION_MS = 3200; // time to draw the full name
const HOLD_MS = 700;           // pause after draw completes
const FADE_MS = 400;           // duration of the SVG path opacity fade-out

interface Props {
  /** Fired after each complete draw+hold+fade cycle (before the next draw). */
  onCycleComplete?: () => void;
  /** Text to render. */
  text?: string;
}

export function VaraText({ onCycleComplete, text = "Vaibhav Kawde" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  // Sanitise the uid from React's colon characters so it's a valid CSS selector
  const containerId = `vara-${uid.replace(/:/g, "_")}`;

  // Refs for cleanup
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMountedRef = useRef(true);

  // Check reduced-motion preference once — stable across renders
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    isMountedRef.current = true;

    // Clear any pending timers from a previous cycle
    function clearTimers() {
      if (holdTimerRef.current !== null) clearTimeout(holdTimerRef.current);
      if (fadeTimerRef.current !== null) clearTimeout(fadeTimerRef.current);
      holdTimerRef.current = null;
      fadeTimerRef.current = null;
    }

    // Destroy the container contents cleanly (removes SVG + Vara's injected spans)
    function clearContainer() {
      const el = containerRef.current;
      if (!el) return;
      while (el.firstChild) el.removeChild(el.firstChild);
    }

    // Fade all path elements inside the container, then resolve
    function fadeOut(): Promise<void> {
      return new Promise((resolve) => {
        const el = containerRef.current;
        if (!el) { resolve(); return; }

        const paths = el.querySelectorAll<SVGPathElement>("path");
        const svg = el.querySelector<SVGSVGElement>("svg");

        // Apply transition to each path
        paths.forEach((p) => {
          p.style.transition = `opacity ${FADE_MS}ms ease-out`;
          p.style.opacity = "0";
        });
        // Also fade the SVG wrapper for a smooth disappear
        if (svg) {
          svg.style.transition = `opacity ${FADE_MS}ms ease-out`;
          svg.style.opacity = "0";
        }

        fadeTimerRef.current = setTimeout(() => {
          fadeTimerRef.current = null;
          resolve();
        }, FADE_MS + 50); // small buffer after transition ends
      });
    }

    // The main loop function — creates a fresh Vara instance each cycle
    function startCycle() {
      if (!isMountedRef.current) return;
      clearContainer();

      const el = containerRef.current;
      if (!el) return;

      // The container must have the id Vara will target
      el.id = containerId;

      let vara: InstanceType<typeof Vara> | null = null;

      try {
        vara = new Vara(
          `#${containerId}`,
          VARA_FONT_URL,
          [
            {
              text,
              fontSize: 56,
              strokeWidth: 1.4,
              color: "#6b3a1f",
              duration: DRAW_DURATION_MS,
              textAlign: "center",
              delay: 0,
              autoAnimation: true,
              queued: false,
            },
          ],
          {
            strokeWidth: 1.4,
            color: "#6b3a1f",
            textAlign: "center",
            autoAnimation: true,
            // Called when SVG is laid out (before animation starts)
            ready() {
              if (!isMountedRef.current) return;
              // Make the SVG fill our container width responsively
              const svg = el.querySelector<SVGSVGElement>("svg");
              if (svg) {
                svg.style.width = "100%";
                svg.style.height = "auto";
                svg.style.maxWidth = "min(560px, 90vw)";
                svg.style.opacity = "1";
                svg.style.transition = "none";
                svg.removeAttribute("width");
              }
            },
            // Called when the full draw animation completes
            animationEnd() {
              if (!isMountedRef.current) return;

              // Hold the completed name briefly
              holdTimerRef.current = setTimeout(async () => {
                holdTimerRef.current = null;
                if (!isMountedRef.current) return;

                onCycleComplete?.();

                // Fade out the paths
                await fadeOut();

                if (!isMountedRef.current) return;

                // Clean up this Vara instance and start a fresh cycle
                vara = null;
                startCycle();
              }, HOLD_MS);
            },
          }
        );
      } catch (err) {
        console.warn("[VaraText] Failed to initialise Vara:", err);
        // Graceful fallback — static text will show via the reducedMotion branch
      }

      return () => {
        vara = null;
      };
    }

    if (!reducedMotion) {
      startCycle();
    }

    return () => {
      isMountedRef.current = false;
      clearTimers();
      clearContainer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount only

  // ─── Reduced-motion fallback ───────────────────────────────────────────────
  if (reducedMotion) {
    return (
      <div
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(32px, 6vw, 58px)",
          fontWeight: 700,
          color: "#3d2510",
          textAlign: "center",
          letterSpacing: "0.04em",
          lineHeight: 1.2,
        }}
        aria-label={text}
      >
        {text}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      id={containerId}
      aria-label={text}
      style={{
        width: "100%",
        maxWidth: "min(560px, 90vw)",
        margin: "0 auto",
        // The Vara SVG is laid out here. We keep this div's height stable
        // so the surrounding layout doesn't shift between cycles.
        minHeight: "clamp(60px, 12vw, 100px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}
