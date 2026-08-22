import { ReactNode } from "react";

export const ink = "#2c1810";
export const inkLight = "#4a3728";
export const inkFaint = "rgba(44,24,16,0.45)";
export const gold = "#c9863a";
export const navy = "#1e2d4a";
export const cream = "#faf6f0";

export const serif = "'Playfair Display', Georgia, serif";
export const sans = "'Lato', 'Helvetica Neue', sans-serif";
export const hand = "'Caveat', cursive";
export const mono = "'JetBrains Mono', monospace";

interface PageProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  noPadding?: boolean;
}

export function Page({ children, className = "", style, noPadding }: PageProps) {
  return (
    <div
      className={`relative w-full h-full ${noPadding ? "" : "p-8"} ${className}`}
      style={{ fontFamily: sans, color: ink, ...style }}
    >
      {children}
    </div>
  );
}

export function PageHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: serif,
        fontSize: 22,
        fontWeight: 700,
        color: navy,
        lineHeight: 1.2,
        marginBottom: 4,
      }}
    >
      {children}
    </h2>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: mono,
        fontSize: 9,
        letterSpacing: "0.2em",
        color: gold,
        textTransform: "uppercase" as const,
        marginBottom: 8,
      }}
    >
      {children}
    </div>
  );
}

interface StickyNoteProps {
  children: ReactNode;
  color?: string;
  rotate?: number;
  style?: React.CSSProperties;
}

export function StickyNote({ children, color = "#fff9c4", rotate = -2, style }: StickyNoteProps) {
  return (
    <div
      style={{
        background: color,
        padding: "10px 12px",
        boxShadow: "2px 3px 10px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)",
        transform: `rotate(${rotate}deg)`,
        fontFamily: hand,
        fontSize: 13,
        color: ink,
        lineHeight: 1.5,
        display: "inline-block",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface TechTagProps {
  children: ReactNode;
  color?: string;
  bg?: string;
}

export function TechTag({ children, color = navy, bg = "rgba(30,45,74,0.09)" }: TechTagProps) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 2,
        background: bg,
        color,
        fontFamily: mono,
        fontSize: 10,
        letterSpacing: "0.05em",
        border: `1px solid ${color}22`,
        marginRight: 4,
        marginBottom: 4,
      }}
    >
      {children}
    </span>
  );
}

interface StampProps {
  children: ReactNode;
  color?: string;
  rotate?: number;
}

export function Stamp({ children, color = "#a54232", rotate = -5 }: StampProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 72,
        height: 72,
        borderRadius: "50%",
        border: `3px solid ${color}`,
        color,
        fontFamily: sans,
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        textAlign: "center" as const,
        transform: `rotate(${rotate}deg)`,
        opacity: 0.85,
        lineHeight: 1.3,
        padding: 8,
      }}
    >
      {children}
    </div>
  );
}

export function Annotation({ children, color = gold, rotate = -1 }: { children: ReactNode; color?: string; rotate?: number }) {
  return (
    <span
      style={{
        fontFamily: hand,
        fontSize: 12,
        color,
        transform: `rotate(${rotate}deg)`,
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

export function PageNumber({ n, side }: { n: number | string; side: "left" | "right" }) {
  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        bottom: -12,
        [side === "left" ? "right" : "left"]: 8,
        fontFamily: mono,
        fontSize: 9,
        fontWeight: 600,
        color: "rgba(44,24,16,0.38)",
        letterSpacing: "0.08em",
        zIndex: 40,
      }}
    >
      {String(n).padStart(2, "0")}
    </div>
  );
}

export function Divider({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        height: 1,
        background: "linear-gradient(90deg, transparent, rgba(44,24,16,0.15) 30%, rgba(44,24,16,0.15) 70%, transparent)",
        margin: "10px 0",
        ...style,
      }}
    />
  );
}
