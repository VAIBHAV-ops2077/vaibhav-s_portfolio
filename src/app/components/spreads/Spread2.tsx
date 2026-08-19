import { Page, PageNumber, hand, serif, mono, ink, navy, gold, inkFaint } from "./PageBase";

interface Props { side: "left" | "right"; }

interface SkillGroupProps {
  label: string;
  color: string;
  bg: string;
  skills: string[];
}

function SkillGroup({ label, color, bg, skills }: SkillGroupProps) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{
        fontFamily: mono,
        fontSize: 9,
        letterSpacing: "0.18em",
        color,
        textTransform: "uppercase" as const,
        marginBottom: 6,
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}>
        <span style={{ display: "inline-block", width: 14, height: 1.5, background: color, borderRadius: 1 }} />
        {label}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 4 }}>
        {skills.map((s, i) => (
          <span
            key={i}
            style={{
              padding: "3px 8px",
              borderRadius: 2,
              background: bg,
              color,
              fontFamily: mono,
              fontSize: 10,
              border: `1px solid ${color}22`,
              letterSpacing: "0.03em",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        skills · page 05
      </div>

      {/* Title */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
        <span style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: navy }}>Technical Skills</span>
      </div>
      <div style={{ fontFamily: hand, fontSize: 12, color: gold, marginBottom: 16 }}>
        — technologies I've used to build, deploy, and experiment
      </div>

      <SkillGroup
        label="Programming"
        color={navy}
        bg="rgba(30,45,74,0.07)"
        skills={["Python", "Java", "C++", "JavaScript", "HTML", "CSS", "Lua"]}
      />

      <SkillGroup
        label="Frontend"
        color="#2a5c7a"
        bg="rgba(42,92,122,0.07)"
        skills={["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Three.js"]}
      />

      <SkillGroup
        label="Backend"
        color="#2a5c3f"
        bg="rgba(42,92,63,0.07)"
        skills={["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT", "Flask", "GraphQL"]}
      />

      {/* Small doodle */}
      <div style={{ position: "absolute", bottom: 50, right: 24, opacity: 0.12 }}>
        <svg width="52" height="52" viewBox="0 0 52 52">
          <rect x="4" y="4" width="44" height="44" rx="4" stroke={navy} strokeWidth="2" fill="none" />
          <rect x="10" y="10" width="14" height="14" rx="2" fill={gold} />
          <rect x="28" y="10" width="14" height="14" rx="2" fill={navy} />
          <rect x="10" y="28" width="14" height="14" rx="2" fill={navy} />
          <rect x="28" y="28" width="14" height="14" rx="2" fill={gold} />
        </svg>
      </div>

      <div style={{ fontFamily: hand, fontSize: 12, color: "rgba(44,24,16,0.4)", marginTop: 4 }}>
        * and always learning more...
      </div>

      <PageNumber n={5} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        skills · page 06
      </div>

      {[
        { label: "Databases", color: "#7a3f2a", bg: "rgba(122,63,42,0.07)", skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore", "Redis"] },
        { label: "Cloud & Infrastructure", color: "#a54232", bg: "rgba(165,66,50,0.07)", skills: ["AWS EC2", "AWS RDS", "AWS S3", "Docker", "Kubernetes", "Linux", "Prometheus", "Grafana"] },
        { label: "AI / Automation", color: "#5c2a7a", bg: "rgba(92,42,122,0.07)", skills: ["Gemini", "Chatbase", "LM Studio", "n8n", "AI-assisted dev"] },
        { label: "Hardware / IoT", color: "#2a5c3f", bg: "rgba(42,92,63,0.07)", skills: ["ESP32", "ESP8266", "ESP32-CAM", "Arduino", "Sensors", "Blynk"] },
        { label: "Dev Tools", color: "#2a5c7a", bg: "rgba(42,92,122,0.07)", skills: ["Git", "GitHub", "VS Code", "Vite", "NPM", "Bun"] },
      ].map((g, i) => (
        <div key={i} style={{ marginBottom: 11 }}>
          <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.18em", color: g.color, textTransform: "uppercase" as const, marginBottom: 5, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ display: "inline-block", width: 14, height: 1.5, background: g.color, borderRadius: 1 }} />
            {g.label}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 4 }}>
            {g.skills.map((s, j) => (
              <span key={j} style={{ padding: "2px 7px", borderRadius: 2, background: g.bg, color: g.color, fontFamily: mono, fontSize: 9.5, border: `1px solid ${g.color}22`, letterSpacing: "0.03em" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Stamp decoration */}
      <div style={{ position: "absolute", bottom: 50, right: 16, transform: "rotate(12deg)", opacity: 0.65 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 58, height: 58, borderRadius: "50%",
          border: `2.5px solid ${gold}`,
          color: gold, fontFamily: "sans-serif", fontSize: 8, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase" as const,
          textAlign: "center" as const, lineHeight: 1.3, padding: 6,
        }}>
          Full<br />Stack
        </div>
      </div>

      <PageNumber n={6} side="right" />
    </Page>
  );
}

export function Spread2({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
