import { Page, TechTag, StickyNote, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 03 · page 11
      </div>

      {/* Project header */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <div style={{ width: 3, height: 32, background: "#2a5c3f", borderRadius: 2 }} />
        <div>
          <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 700, color: navy, lineHeight: 1 }}>
            CoWriter
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: "#2a5c3f", letterSpacing: "0.12em", marginTop: 3 }}>
            REAL-TIME COLLABORATIVE NOTES PLATFORM
          </div>
        </div>
      </div>

      {/* Collaboration flow mockup */}
      <div style={{
        background: "#1a2a1a", borderRadius: 6, padding: "10px 12px",
        marginBottom: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
          {["#ff5f56", "#ffbd2e", "#27c93f"].map((c, i) => (
            <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{ fontFamily: mono, fontSize: 8.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>
          <div style={{ color: "#4fc3f7" }}>// Firestore real-time sync</div>
          <div>User creates note → stored in Firestore</div>
          <div>Shareable note URL generated <span style={{ color: "#27c93f" }}>✓</span></div>
          <div>Collaborator opens shared link</div>
          <div style={{ color: "#a5d6a7" }}>onSnapshot() keeps note live <span style={{ color: "#27c93f" }}>✓</span></div>
        </div>
      </div>

      {/* Description */}
      <div style={{ fontFamily: serif, fontSize: 12.5, fontWeight: 700, color: navy, marginBottom: 6 }}>
        What it solves
      </div>
      <p style={{ fontSize: 11.5, lineHeight: 1.7, color: ink, marginBottom: 8 }}>
        CoWriter lets multiple users create, share, and collaborate on notes
        across devices with live Firestore synchronization — no manual refresh
        required. Users authenticate via email, Google, or GitHub, then share
        notes through invite links.
      </p>

      {/* Links */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
        <a href="https://cowriter-test.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ padding: "4px 10px", borderRadius: 2, background: "#2a5c3f", color: "#faf6f0", fontFamily: mono, fontSize: 9, letterSpacing: "0.05em", textDecoration: "none" }}>
          ↗ Live Demo
        </a>
        <a href="https://github.com/VAIBHAV-ops2077/cowriter-test" target="_blank" rel="noopener noreferrer" style={{ padding: "4px 10px", borderRadius: 2, background: navy, color: "#faf6f0", fontFamily: mono, fontSize: 9, letterSpacing: "0.05em", textDecoration: "none" }}>
          ↗ GitHub
        </a>
      </div>

      <PageNumber n={11} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 12, textTransform: "uppercase" }}>
        project 03 · page 12
      </div>

      {/* Tech stack */}
      <div style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: navy, marginBottom: 8 }}>
        Tech Stack
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, marginBottom: 14 }}>
        <TechTag>Next.js</TechTag>
        <TechTag color="#2a5c7a" bg="rgba(42,92,122,0.08)">TypeScript</TechTag>
        <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">Tailwind CSS</TechTag>
        <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">Firebase Auth</TechTag>
        <TechTag color="#7a3f2a" bg="rgba(122,63,42,0.08)">Firestore</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Framer Motion</TechTag>
        <TechTag color="#3f7a2a" bg="rgba(63,122,42,0.08)">GSAP</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Vercel</TechTag>
      </div>

      <Divider style={{ margin: "0 0 12px 0" }} />

      <div style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: navy, marginBottom: 8 }}>
        Key features
      </div>
      {[
        { icon: "🔐", text: "Email / Google / GitHub authentication via Firebase" },
        { icon: "📝", text: "Create, edit, and save notes with rich formatting" },
        { icon: "🔗", text: "Shareable invite links for each note" },
        { icon: "⚡", text: "onSnapshot() listeners — live sync without polling" },
        { icon: "👥", text: "Collaborative editing with multiple simultaneous users" },
        { icon: "🚀", text: "Deployed on Vercel — production-grade hosting" },
      ].map((f, i) => (
        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
          <span style={{ fontSize: 12, flexShrink: 0 }}>{f.icon}</span>
          <span style={{ fontSize: 10.5, lineHeight: 1.55, color: ink }}>{f.text}</span>
        </div>
      ))}

      <div className="absolute bottom-14" style={{ left: 32, right: 32 }}>
        <StickyNote color="#d6f5e8" rotate={1} style={{ fontSize: 10.5, width: "100%" }}>
          Demonstrates: Next.js, real-time collaboration, Firebase, cloud auth, production deployment.
        </StickyNote>
      </div>

      <PageNumber n={12} side="right" />
    </Page>
  );
}

export function Spread5({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
