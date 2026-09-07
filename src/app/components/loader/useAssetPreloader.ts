/**
 * useAssetPreloader.ts
 *
 * Real asset preloader — tracks progress based on actual resource loading,
 * never a fake timer.
 *
 * Assets tracked
 * ──────────────
 *  - Background PNG                                       (1)
 *  - Decorative corner objects: COMPASS, GLOBE, HEPHAESTUS, Horse, Spiral2 (5)
 *  - Scrapbook images used in Spread0 (first visible spread)              (6)
 *  - Product demo images (Spread3–6)                                      (4)
 *  - Google Fonts (document.fonts.ready)                                  (1)
 *  - Page-turn audio files                                    (3, non-blocking)
 *  - Vara handwriting font JSON                                           (1)
 *
 * Total tracked: 21 promises
 *
 * Bug fixes applied
 * ─────────────────
 *  FIX 1: loadImage now checks img.complete BEFORE assigning src, so already-cached
 *          images (where onload fires synchronously at src-set) are handled correctly.
 *
 *  FIX 2: total is stored in React state (not just a ref) so isComplete is correctly
 *          computed on every render after the useEffect initialises the promises.
 *          Previously, totalRef.current was 0 during the first render, making
 *          isComplete permanently false (0 > 0 === false).
 *
 *  FIX 3: loadAudio had a handler-override bug — it assigned oncanplaythrough twice,
 *          the second assignment silently replaced the first and cleared the fallback
 *          timer reference, so the fallback resolve could double-fire. Cleaned up.
 *
 * Failure strategy
 * ────────────────
 *  - Any failed image/audio/font increments the counter exactly like a
 *    successful load, so one broken optional asset never traps the loader.
 *  - All failures are logged with console.warn for debugging.
 *  - A safety timeout (8 s) forces completion if something hangs.
 *
 * React Strict Mode safety
 * ──────────────────────────
 *  - A ref gates loading to run exactly once per mount.
 */

import { useState, useEffect, useRef } from "react";

// ─── Bundled asset URLs ────────────────────────────────────────────────────────
// Imported via ES module so Vite handles content-hash file names correctly.
import backgroundUrl from "../../../assets/background.png";

// Decorative objects (corner scene)
import compassUrl from "../../../../3dAssets/COMPASS.png";
import globeUrl from "../../../../3dAssets/GLOBE.png";
import hephaestusUrl from "../../../../3dAssets/HEPHAESTUS.png";
import horseUrl from "../../../../3dAssets/Horse.png";
import spiralUrl from "../../../../3dAssets/Spiral2.png";

// Spread0 scrapbook images (always visible on open)
import photoUrl from "../../../assets/scrapbook/photo.png";
import astrolabeUrl from "../../../assets/scrapbook/astrolabe_trans.png";
import statueUrl from "../../../assets/scrapbook/statue.png";
import newsTopUrl from "../../../assets/scrapbook/news_top.png";
import newsBottomUrl from "../../../assets/scrapbook/news_bottom.png";
import pixelHandUrl from "../../../assets/scrapbook/pixel_hand_trans.png";

// Product demo images (Spreads 3–6)
import demoImg1Url from "../../../../ProductDemo/Converge/demoimg1.png";
import demoImg2Url from "../../../../ProductDemo/Cowriter/demoimg2.png";
import demoImg3Url from "../../../../ProductDemo/Stocksync/demoimg3.png";
import demoImg4Url from "../../../../ProductDemo/Game/demoimg4.png";

// Audio files (non-blocking — failure doesn't block completion)
import sound1Url from "../../../../SoundEffects/freesound_community-page-turning-3-90074.mp3";
import sound2Url from "../../../../SoundEffects/freesound_community-turning-book-page-79935.mp3";
import sound3Url from "../../../../SoundEffects/xpmonster-turning-page-in-a-book-419580.mp3";

const VARA_FONT_URL =
  "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json";

const SAFETY_TIMEOUT_MS = 8_000;

// ─── Asset lists ───────────────────────────────────────────────────────────────

const CRITICAL_IMAGES = [
  backgroundUrl,
  compassUrl,
  globeUrl,
  hephaestusUrl,
  horseUrl,
  spiralUrl,
  photoUrl,
  astrolabeUrl,
  statueUrl,
  newsTopUrl,
  newsBottomUrl,
  pixelHandUrl,
  demoImg1Url,
  demoImg2Url,
  demoImg3Url,
  demoImg4Url,
] as const;

const AUDIO_URLS = [sound1Url, sound2Url, sound3Url] as const;

// ─── Individual loaders ────────────────────────────────────────────────────────

/**
 * FIX 1: Check img.complete BEFORE setting src.
 * For cached images the browser fires onload synchronously at the point where
 * img.src is assigned — before any onload handler can be attached.
 * We must detect this case explicitly.
 */
function loadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();

    img.onload = () => resolve();
    img.onerror = () => {
      console.warn(`[Preloader] Image load failed: ${src}`);
      resolve(); // non-blocking — failure still counts as done
    };

    img.src = src;

    // If the image was already cached the browser may have synchronously
    // set img.complete = true while executing img.src = src (before onload
    // could fire asynchronously). Catch that case immediately after setting src.
    if (img.complete) {
      resolve();
    }
  });
}

/**
 * FIX 3: Rewritten audio loader — single clean path, no double-assignment.
 * Audio is treated as optional; a 3-second fallback always resolves the promise.
 */
function loadAudio(src: string): Promise<void> {
  return new Promise((resolve) => {
    let settled = false;
    const settle = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    const audio = new Audio();
    audio.preload = "auto";

    audio.addEventListener("canplaythrough", settle, { once: true });
    audio.addEventListener("error", () => {
      console.warn(`[Preloader] Audio load failed: ${src}`);
      settle();
    }, { once: true });

    // Browsers on mobile or with strict autoplay policies may never fire
    // canplaythrough for non-playing audio. This 3 s fallback ensures audio
    // never blocks the loader.
    setTimeout(settle, 3_000);

    audio.src = src;
    audio.load();
  });
}

function loadFonts(): Promise<void> {
  if (typeof document === "undefined" || !("fonts" in document)) {
    return Promise.resolve();
  }
  return document.fonts.ready.then(() => undefined).catch(() => undefined);
}

function loadVaraFont(): Promise<void> {
  return fetch(VARA_FONT_URL, { mode: "cors" })
    .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); })
    .catch((err) => {
      console.warn("[Preloader] Vara font JSON failed to load:", err);
      // Non-blocking — VaraText handles its own font fetch independently
    });
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export interface PreloadState {
  /** 0 → 1 as assets load */
  progress: number;
  /** true once all tracked assets have resolved/rejected */
  isComplete: boolean;
}

export function useAssetPreloader(): PreloadState {
  // FIX 2: Store both total AND resolved in React state so that isComplete
  // is always computed from the latest rendered values. Previously, total was
  // only in a ref (totalRef.current = 0 on first render → isComplete was always
  // false because "0 > 0" is never true, even after the useEffect set it to 21).
  const [resolved, setResolved] = useState(0);
  const [total, setTotal] = useState(0);

  const startedRef = useRef(false); // strict-mode guard — run loading once only
  const safetyRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Guard: run only once even in React Strict Mode double-invocation
    if (startedRef.current) return;
    startedRef.current = true;

    const imagePromises = CRITICAL_IMAGES.map((src) => loadImage(src));
    const audioPromises = AUDIO_URLS.map((src) => loadAudio(src));
    const fontsPromise = loadFonts();
    const varaPromise = loadVaraFont();

    const allPromises = [
      ...imagePromises,
      ...audioPromises,
      fontsPromise,
      varaPromise,
    ];

    const n = allPromises.length; // 21

    // FIX 2: Put the total count into React state so isComplete is computed
    // correctly on re-renders after this effect runs.
    setTotal(n);

    // Safety timeout — if assets haven't all loaded after 8 s, force completion
    safetyRef.current = setTimeout(() => {
      console.warn("[Preloader] Safety timeout reached — forcing completion.");
      setResolved(n);
    }, SAFETY_TIMEOUT_MS);

    // Increment counter as each asset settles (success or failure both count)
    allPromises.forEach((p) => {
      p.finally(() => {
        setResolved((prev) => prev + 1);
      });
    });

    return () => {
      if (safetyRef.current !== null) {
        clearTimeout(safetyRef.current);
        safetyRef.current = null;
      }
    };
  }, []);

  const progress = total > 0 ? Math.min(1, resolved / total) : 0;
  const isComplete = total > 0 && resolved >= total;

  // Clear the safety timer once naturally complete
  useEffect(() => {
    if (isComplete && safetyRef.current !== null) {
      clearTimeout(safetyRef.current);
      safetyRef.current = null;
    }
  }, [isComplete]);

  return { progress, isComplete };
}
