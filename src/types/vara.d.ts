/**
 * Minimal TypeScript declarations for vara@1.4.1
 * The package ships no types — this shim provides the subset we use.
 */

declare module "vara" {
  interface VaraTextOptions {
    id?: string | number;
    text: string | string[];
    fontSize?: number;
    strokeWidth?: number;
    color?: string;
    duration?: number;
    delay?: number;
    letterSpacing?: number | Record<string, number>;
    x?: number;
    y?: number;
    textAlign?: "left" | "center" | "right";
    autoAnimation?: boolean;
    queued?: boolean;
    fromCurrentPosition?: { x?: boolean; y?: boolean };
  }

  interface VaraProperties {
    fontSize?: number;
    strokeWidth?: number;
    color?: string;
    duration?: number;
    textAlign?: "left" | "center" | "right";
    autoAnimation?: boolean;
    letterSpacing?: number;
    /** Called once the SVG is ready and all characters are laid out. */
    ready?: () => void;
    /** Called when each text animation finishes. */
    animationEnd?: (id: string | number, element: unknown) => void;
  }

  interface DrawnCharacter {
    characters: Element[];
    container: SVGElement;
    index: number;
    queued: boolean;
  }

  class Vara {
    constructor(
      selector: string,
      fontUrl: string,
      texts: VaraTextOptions[],
      properties?: VaraProperties
    );

    /** Animate a specific text by its id or index. */
    draw(id: string | number, duration?: number): void;

    /** Get drawn character data for a given id. */
    get(id: string | number): DrawnCharacter | false;

    /** Returns the SVG element. */
    svg: SVGSVGElement;

    /** Fires after the SVG is ready. Internal — use the ready property instead. */
    readyF?: () => void;

    /** Fires after each text animation ends. Internal — use animationEnd instead. */
    animationEndF?: (id: string | number, el: DrawnCharacter) => void;
  }

  export = Vara;
}
