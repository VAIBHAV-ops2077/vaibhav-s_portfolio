import { Page, TechTag, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

interface HackBadgeProps {
  title: string;
  event: string;
  date: string;
  result: string;
  color: string;
}

function HackBadge({ title, event, date, result, color }: HackBadgeProps) {
  return (
    <div style={{
      border: `1.5px solid ${color}33`,
      borderRadius: 4,
      padding: "9px 12px",
      background: `${color}08`,
      marginBottom: 9,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontFamily: serif, fontSize: 12, fontWeight: 700, color: navy }}>{title}</div>
          <div style={{ fontFamily: mono, fontSize: 8.5, color, marginTop: 2, letterSpacing: "0.06em" }}>{event}</div>
        </div>
        <div style={{ fontFamily: mono, fontSize: 8, color: inkFaint, textAlign: "right" as const }}>
          <div>{date}</div>
          <div style={{ color, marginTop: 2, fontSize: 9 }}>{result}</div>
        </div>
      </div>
    </div>
  );
}

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        portfolio project · page 17
      </div>

      {/* Project header */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <div style={{ width: 3, height: 32, background: gold, borderRadius: 2 }} />
        <div>
          <div style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: navy, lineHeight: 1.1 }}>
            Interactive Engineering<br />Portfolio
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: gold, letterSpacing: "0.12em", marginTop: 4 }}>
            THIS WEBSITE IS A PROJECT
          </div>
        </div>
      </div>

      <p style={{ fontSize: 11.5, lineHeight: 1.7, color: ink, marginBottom: 10 }}>
        I deliberately avoided building another portfolio made of scrolling sections and
        generic cards. The site is designed around the metaphor of an engineering book:
        open it, turn through the pages, and discover the work.
      </p>

      {/* Engineering decisions */}
      <div style={{ fontFamily: serif, fontSize: 12.5, fontWeight: 700, color: navy, marginBottom: 8 }}>
        Engineering decisions
      </div>
      {[
        { icon: "📖", text: "Book interface — 3D transform + perspective for page-flip feel" },
        { icon: "🎨", text: "Vintage engineering aesthetic — blueprint colours, serif typography" },
        { icon: "🖼️", text: "2D decorative objects (Compass, Globe, Hephaestus, Horse) with rAF-based parallax" },
        { icon: "⚡", text: "Ref-only animation loop — zero React re-renders at 60fps" },
        { icon: "📐", text: "Responsive positioning using clamp() for corner placement" },
        { icon: "🌫️", text: "Drop-shadow on PNG assets for silhouette-accurate shadows" },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7, alignItems: "flex-start" }}>
          <span style={{ fontSize: 12, flexShrink: 0 }}>{item.icon}</span>
          <span style={{ fontSize: 11, lineHeight: 1.55, color: ink }}>{item.text}</span>
        </div>
      ))}

      {/* Tech used */}
      <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap" as const }}>
        <TechTag>React</TechTag>
        <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">Framer Motion</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">TypeScript</TechTag>
        <TechTag color="#2a5c7a" bg="rgba(42,92,122,0.08)">Vite</TechTag>
        <TechTag color="#7a3f2a" bg="rgba(122,63,42,0.08)">CSS / clamp()</TechTag>
        <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">rAF Animations</TechTag>
      </div>

      <PageNumber n={17} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        hackathons · page 18
      </div>

      <div style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: navy, marginBottom: 4 }}>
        Hackathons &amp;
      </div>
      <div style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: gold, marginBottom: 4 }}>
        Tech Events
      </div>
      <div style={{ fontFamily: hand, fontSize: 12, color: "rgba(44,24,16,0.45)", marginBottom: 16 }}>
        — building under pressure, learning in community
      </div>

      <HackBadge
        title="GDG Cloud Mumbai"
        event="Build and Grow AI Hackathon"
        date="2025"
        result="✅ Participated"
        color="#c9863a"
      />

      <HackBadge
        title="Smart India Hackathon"
        event="National Hackathon · Ministry of Education"
        date="2024"
        result="✅ Participated"
        color="#2a5c7a"
      />

      <HackBadge
        title="FlutterFlow Mumbai"
        event="Community Event"
        date="2024"
        result="✅ Attended"
        color="#2a5c3f"
      />

      <HackBadge
        title="IIT Bombay Techfest"
        event="Annual Technical Festival"
        date="2024"
        result="✅ Attended"
        color="#5c2a7a"
      />

      <Divider style={{ margin: "12px 0" }} />

      {/* GitHub */}
      <div style={{ fontFamily: hand, fontSize: 13, color: navy, marginBottom: 8 }}>
        Code &amp; experiments:
      </div>
      <a
        href="https://github.com/VAIBHAV-ops2077"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "5px 12px", borderRadius: 2,
          background: navy, color: "#faf6f0",
          fontFamily: mono, fontSize: 10, letterSpacing: "0.06em",
          textDecoration: "none",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        github.com/VAIBHAV-ops2077
      </a>

      <PageNumber n={18} side="right" />
    </Page>
  );
}

export function Spread8({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
