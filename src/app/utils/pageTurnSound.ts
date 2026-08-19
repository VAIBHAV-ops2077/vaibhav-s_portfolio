/**
 * pageTurnSound.ts
 *
 * Page-turn sound-effects integration.
 * - Randomly selects between 3 recorded page-turn audio files
 * - Preloaded on initialization for instant zero-delay playback
 * - Supports rapid overlapping page flips without clipping
 * - Balanced volume (~0.5)
 */

import sound1 from "../../../SoundEffects/freesound_community-page-turning-3-90074.mp3";
import sound2 from "../../../SoundEffects/freesound_community-turning-book-page-79935.mp3";
import sound3 from "../../../SoundEffects/xpmonster-turning-page-in-a-book-419580.mp3";

const SOUND_URLS = [sound1, sound2, sound3];
const DEFAULT_VOLUME = 0.5;

// Preloaded Audio instances pool
const preloadedAudios: HTMLAudioElement[] = [];

if (typeof window !== "undefined") {
  SOUND_URLS.forEach((url) => {
    try {
      const audio = new Audio(url);
      audio.preload = "auto";
      audio.volume = DEFAULT_VOLUME;
      audio.load();
      preloadedAudios.push(audio);
    } catch (err) {
      console.warn("Page turn audio preload failed:", url, err);
    }
  });
}

/**
 * Plays one of the three page-turn sound effects at random.
 * Triggered synchronously at the start of any page-turn action.
 */
export function playRandomPageTurnSound() {
  if (SOUND_URLS.length === 0 || typeof window === "undefined") return;

  const index = Math.floor(Math.random() * SOUND_URLS.length);
  const baseAudio = preloadedAudios[index];
  const src = SOUND_URLS[index];

  try {
    let audio: HTMLAudioElement;

    if (baseAudio && baseAudio.paused) {
      audio = baseAudio;
      audio.currentTime = 0;
    } else {
      // Rapid page turns: instantiate or clone so overlapping sounds play cleanly
      audio = (baseAudio ? baseAudio.cloneNode(true) : new Audio(src)) as HTMLAudioElement;
      audio.volume = DEFAULT_VOLUME;
    }

    const promise = audio.play();
    if (promise !== undefined) {
      promise.catch(() => {
        // Suppress browser autoplay policy warnings if user hasn't interacted yet
      });
    }
  } catch (err) {
    console.warn("Could not play page turn sound:", err);
  }
}
