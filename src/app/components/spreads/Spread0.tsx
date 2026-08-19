import { motion } from "motion/react";
import photoImg from "../../../assets/scrapbook/photo.png";
import astrolabeImg from "../../../assets/scrapbook/astrolabe_trans.png";
import statueImg from "../../../assets/scrapbook/statue.png";
import newsTopImg from "../../../assets/scrapbook/news_top.png";
import newsBottomImg from "../../../assets/scrapbook/news_bottom.png";
import pixelHandImg from "../../../assets/scrapbook/pixel_hand_trans.png";
import { Page, PageNumber, serif, sans, mono, ink, navy, gold, inkFaint } from "./PageBase";

interface Props { side: "left" | "right"; }

/** Realistic Paperclip SVG */
function PaperClip({ className = "", rotate = 0, scale = 1 }: { className?: string; rotate?: number; scale?: number }) {
  return (
    <svg
      width={18 * scale}
      height={48 * scale}
      viewBox="0 0 18 48"
      fill="none"
      className={`pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Outer loop */}
      <path
        d="M9 4 C4.5 4, 2 7.5, 2 12 L2 38 C2 43, 6 46, 10 46 C14 46, 17 43, 17 38 L17 14 C17 10.5, 14.5 8, 11 8 C7.5 8, 5 10.5, 5 14 L5 34 C5 36.5, 6.8 38, 9 38 C11.2 38, 13 36.5, 13 34 L13 16"
        stroke="#1c1a17"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Metallic highlight */}
      <path
        d="M8.5 4.5 C4.8 4.5, 2.5 7.8, 2.5 12 L2.5 38 C2.5 42.5, 6.2 45.5, 10 45.5 C13.8 45.5, 16.5 42.5, 16.5 38 L16.5 14"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Realistic Kraft/Washi Masking Tape */
function MaskingTape({
  className = "",
  rotate = 0,
  width = 80,
  height = 25,
}: {
  className?: string;
  rotate?: number;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute z-20 ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotate}deg)`,
        backgroundColor: "rgba(216, 196, 162, 0.84)",
        backdropFilter: "blur(0.5px)",
        boxShadow: "0 2px 6px rgba(40, 25, 15, 0.18), inset 0 1px 2px rgba(255,255,255,0.35)",
        clipPath: "polygon(0% 4%, 4% 0%, 96% 2%, 100% 6%, 98% 94%, 95% 100%, 3% 98%, 0% 92%)",
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(140, 110, 75, 0.08) 3px, rgba(140, 110, 75, 0.08) 4px)",
      }}
    />
  );
}

/** Frosted Clear Scotch Tape */
function ScotchTape({
  className = "",
  rotate = 0,
  width = 54,
  height = 18,
}: {
  className?: string;
  rotate?: number;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute z-20 ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotate}deg)`,
        backgroundColor: "rgba(255, 255, 255, 0.65)",
        backdropFilter: "blur(1.5px)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.12), inset 0 0 4px rgba(255,255,255,0.6)",
        borderLeft: "1px dashed rgba(200,200,200,0.4)",
        borderRight: "1px dashed rgba(200,200,200,0.4)",
      }}
    />
  );
}

/** reCAPTCHA Badge Component */
function RecaptchaBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-2 bg-white/95 rounded-[3px] px-2.5 py-1.5 border border-neutral-300 shadow-[0_2px_8px_rgba(0,0,0,0.08)] select-none ${className}`}
      style={{ width: "fit-content" }}
    >
      <div className="w-5 h-5 rounded-[2px] border-2 border-emerald-600 bg-white flex items-center justify-center">
        <svg className="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 8.5 6.5 12 13 4.5" />
        </svg>
      </div>
      <span className="text-[10px] font-sans text-neutral-800 font-medium tracking-tight">
        I'm not a robot
      </span>
      <div className="flex flex-col items-center ml-2 pl-2 border-l border-neutral-200">
        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
        <span className="text-[6px] text-neutral-400 font-mono tracking-tighter leading-none mt-0.5">reCAPTCHA</span>
        <span className="text-[5px] text-neutral-400 font-mono tracking-tighter leading-none">Privacy · Terms</span>
      </div>
    </div>
  );
}

function LeftPage() {
  return (
    <Page noPadding>
      {/* ── FULL PAGE SCRAPBOOK SURFACE ── */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden select-none"
        style={{
          backgroundColor: "#f7f3ea",
          backgroundImage:
            "linear-gradient(135deg, #f9f5ed 0%, #f5efe3 45%, #eee7d8 100%)",
        }}
      >
        {/* Paper grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, rgba(210,195,170,0.4) 100%)",
          }}
        />

        {/* ── Layer 1: Top-Left Torn Newspaper ── */}
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.92, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          src={newsTopImg}
          alt=""
          className="absolute top-0 left-0 w-[34%] max-w-[180px] pointer-events-none mix-blend-multiply drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)]"
        />

        {/* ── Layer 2: Bottom-Right Torn Newspaper ── */}
        <motion.img
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={{ opacity: 0.88, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          src={newsBottomImg}
          alt=""
          className="absolute bottom-0 right-0 w-[35%] max-w-[190px] pointer-events-none mix-blend-multiply drop-shadow-[0_2px_6px_rgba(0,0,0,0.1)]"
        />

        {/* ── Layer 3: Vintage Astrolabe ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: -4 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="absolute top-[-10px] left-[22%] w-[33%] max-w-[170px] z-10 pointer-events-none"
        >
          <img
            src={astrolabeImg}
            alt="Astrolabe illustration"
            className="w-full h-auto mix-blend-multiply drop-shadow-[0_4px_8px_rgba(0,0,0,0.14)]"
          />
        </motion.div>

        {/* ── Layer 4: Top-Right "hello!" ── */}
        <div className="absolute top-2 right-4 z-20 flex flex-col items-end">
          <PaperClip className="mr-3 -mb-1" rotate={-5} scale={0.9} />
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontFamily: "'Syne', 'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4.8vw, 3rem)",
              fontWeight: 800,
              color: "#0c0b09",
              letterSpacing: "-0.035em",
              lineHeight: 0.9,
              margin: 0,
              textShadow: "0 1px 2px rgba(0,0,0,0.05)",
            }}
          >
            hello!
          </motion.h1>
        </div>

        {/* ── Layer 5: Main Photograph of Vaibhav ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[15%] left-[24%] z-[15] w-[56%] max-w-[310px]"
          style={{ transform: "rotate(-1.2deg)" }}
        >
          {/* Tape on top-left corner */}
          <MaskingTape className="-top-3.5 -left-5" rotate={-34} width={82} height={25} />

          {/* Tape on bottom-right corner */}
          <MaskingTape className="-bottom-3.5 -right-4" rotate={-28} width={86} height={25} />

          {/* Photo print container */}
          <div
            className="relative overflow-hidden bg-[#faf8f4] p-2 rounded-[2px]"
            style={{
              boxShadow:
                "0 14px 34px -4px rgba(35, 22, 12, 0.3), 0 4px 10px rgba(0,0,0,0.1), inset 0 0 12px rgba(200,180,150,0.12)",
            }}
          >
            <img
              src={photoImg}
              alt="Vaibhav"
              className="w-full h-auto block rounded-[1px] object-cover"
              style={{
                filter: "contrast(1.02) saturate(1.04) brightness(0.99)",
              }}
            />
          </div>
        </motion.div>

        {/* ── Layer 6: Pixel Pointer Hand Cursor ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: 1,
            x: [0, -3, 0],
            y: [0, -4, 0],
          }}
          transition={{
            opacity: { duration: 0.4, delay: 0.5 },
            x: { repeat: Infinity, duration: 2.4, ease: "easeInOut" },
            y: { repeat: Infinity, duration: 2.4, ease: "easeInOut" },
          }}
          className="absolute top-[49%] right-[3%] z-25 w-[15%] max-w-[72px] pointer-events-none"
          style={{ transform: "rotate(-13deg)" }}
        >
          <img
            src={pixelHandImg}
            alt="Pointer"
            className="w-full h-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.22)]"
          />
        </motion.div>

        {/* ── Layer 7: Editorial Introduction Paragraph ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="absolute top-[63%] left-[4%] z-[35] w-[55%] max-w-[290px]"
        >
          {/* Paperclip on left margin */}
          <PaperClip className="absolute -left-3 top-3" rotate={88} scale={0.8} />

          <div
            className="relative px-3 py-2.5 rounded-[2px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.55)",
              backdropFilter: "blur(2px)",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06), inset 0 0 15px rgba(255,255,255,0.6)",
              clipPath: "polygon(0% 1%, 99% 0%, 100% 98%, 1% 100%)",
            }}
          >
            <p
              style={{
                fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(0.88rem, 1.9vw, 1.1rem)",
                lineHeight: 1.38,
                color: "#161310",
                fontWeight: 500,
                letterSpacing: "-0.015em",
                margin: 0,
                textShadow: "0 0 1px rgba(0,0,0,0.05)",
              }}
            >
              I'm a Computer Science student and developer who enjoys building websites,
              applications, cloud systems, AI projects, and experimental products.
            </p>
          </div>
        </motion.div>

        {/* ── Layer 8: Yellow Post-it / Sticky Note ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
          animate={{ opacity: 1, scale: 1, rotate: 3.5 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="absolute bottom-[11%] right-[4%] z-20 w-[36%] max-w-[170px]"
          style={{
            backgroundColor: "#fef08a",
            boxShadow:
              "0 12px 24px -4px rgba(45, 30, 10, 0.22), 0 3px 8px rgba(0,0,0,0.06), inset 0 -2px 6px rgba(0,0,0,0.04)",
            padding: "12px 14px 14px",
            clipPath: "polygon(0% 0%, 100% 1%, 99% 99%, 1% 98%)",
          }}
        >
          {/* Scotch tape on top center */}
          <ScotchTape className="-top-2 left-1/2 -translate-x-1/2" rotate={-2} width={54} height={18} />

          <div
            style={{
              fontFamily: "'Special Elite', 'JetBrains Mono', monospace",
              fontSize: "clamp(10px, 1.55vw, 12.5px)",
              lineHeight: 1.36,
              color: "#181410",
              fontWeight: 600,
            }}
          >
            <div className="font-bold mb-0.5">Currently:</div>
            <div className="pl-1">building things,</div>
            <div className="pl-1">breaking things,</div>
            <div className="pl-1">learning things.</div>
          </div>
        </motion.div>

        {/* ── Layer 9: Classical Statue with Laptop ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="absolute bottom-0 left-0 z-25 w-[42%] max-w-[210px] pointer-events-none"
        >
          <img
            src={statueImg}
            alt="Statue with laptop"
            className="w-full h-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.24)]"
            style={{ display: "block" }}
          />
        </motion.div>

        {/* ── Layer 10: reCAPTCHA Badge ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-[2.5%] left-[36%] z-20 pointer-events-none"
          style={{ transform: "rotate(-1deg)" }}
        >
          <RecaptchaBadge />
        </motion.div>

        {/* ── Page number ── */}
        <PageNumber n={1} side="left" />
      </div>
    </Page>
  );
}

function RightPage() {
  const sections = [
    { icon: "✦", label: "Introduction", pg: "01–02" },
    { icon: "◎", label: "About Me", pg: "03–04" },
    { icon: "⌨", label: "Technical Skills", pg: "05–06" },
    { icon: "◈", label: "StockSync", pg: "07–08" },
    { icon: "◈", label: "Converge", pg: "09–10" },
    { icon: "◈", label: "CoWriter", pg: "11–12" },
    { icon: "◎", label: "Interactive & Game Dev", pg: "13–14" },
    { icon: "◷", label: "Experience & Education", pg: "15–16" },
    { icon: "✺", label: "Portfolio & Hackathons", pg: "17–18" },
    { icon: "✉", label: "Contact", pg: "19–20" },
  ];

  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 28, textTransform: "uppercase" }}>table of contents</div>

      {/* Title */}
      <div style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: navy, marginBottom: 6 }}>
        What's in this book
      </div>
      <div style={{ height: 2, width: 48, background: gold, marginBottom: 18, borderRadius: 1 }} />

      {/* Contents list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {sections.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "7px 0",
              borderBottom: "1px dashed rgba(44,24,16,0.1)",
            }}
          >
            <span style={{ fontFamily: mono, fontSize: 11, color: gold, width: 14, textAlign: "center" }}>{s.icon}</span>
            <span style={{ fontFamily: sans, fontSize: 11, color: ink, flex: 1, letterSpacing: "0.02em" }}>{s.label}</span>
            <span style={{ fontFamily: mono, fontSize: 10, color: inkFaint }}>{s.pg}</span>
          </div>
        ))}
      </div>

      {/* Handwritten note at bottom */}
      <div style={{ marginTop: 16, padding: "8px 12px", border: `1px solid rgba(201,134,58,0.3)`, borderRadius: 2, background: "rgba(201,134,58,0.04)" }}>
        <span style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: "rgba(44,24,16,0.6)" }}>
          "The best way to predict the future<br />is to invent it."
        </span>
        <div style={{ fontFamily: mono, fontSize: 9, color: inkFaint, marginTop: 4 }}>— Alan Kay</div>
      </div>

      {/* Small illustration — stack of books */}
      <div className="absolute bottom-12 right-8 opacity-20">
        <svg width="48" height="40" viewBox="0 0 48 40">
          <rect x="4" y="30" width="40" height="6" rx="1" fill={navy} />
          <rect x="8" y="22" width="32" height="6" rx="1" fill={gold} />
          <rect x="12" y="14" width="24" height="6" rx="1" fill={navy} />
          <rect x="16" y="8" width="16" height="5" rx="1" fill={gold} />
        </svg>
      </div>

      <PageNumber n={2} side="right" />
    </Page>
  );
}

export function Spread0({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
