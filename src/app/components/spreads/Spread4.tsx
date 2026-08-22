import { Page, TechTag, StickyNote, PageNumber, Divider, serif, mono, ink, navy, gold, sans } from "./PageBase";
import demoImg2 from "../../../../ProductDemo/Cowriter/demoimg2.png";

interface Props {
  side: "left" | "right";
}

function LeftPage() {
  return (
    <Page>
      {/* Top running header */}
      <div
        style={{
          fontFamily: mono,
          fontSize: 8,
          letterSpacing: "0.2em",
          color: "rgba(44,24,16,0.35)",
          marginBottom: 12,
          textTransform: "uppercase",
        }}
      >
        Project 02 · Page 09
      </div>

      {/* Product Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
        <div style={{ width: 3.5, height: 36, background: "#2a5c3f", borderRadius: 2, flexShrink: 0, marginTop: 2 }} />
        <div>
          <div style={{ fontFamily: serif, fontSize: 21, fontWeight: 700, color: navy, lineHeight: 1.1 }}>
            CoWriter
          </div>
          <div style={{ fontFamily: mono, fontSize: 8.5, color: "#2a5c3f", letterSpacing: "0.14em", marginTop: 2, fontWeight: 600 }}>
            REAL-TIME COLLABORATIVE NOTES PLATFORM
          </div>
          <div style={{ fontFamily: serif, fontSize: 10.5, fontStyle: "italic", color: "rgba(44,24,16,0.6)", marginTop: 2 }}>
            Real-time collaborative notes platform for creating, sharing, and editing notes together across devices.
          </div>
        </div>
      </div>

      {/* Product Description */}
      <p style={{ fontSize: 10.5, lineHeight: 1.55, color: ink, marginBottom: 10 }}>
        CoWriter lets multiple users create, share, and collaborate on notes
        across devices with live Firestore synchronization — no manual refresh
        required. Users authenticate via email, Google, or GitHub, then share
        notes through invite links.
      </p>

      {/* Compact Product Metadata Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 6,
          background: "rgba(44,24,16,0.03)",
          border: "1px solid rgba(42,92,63,0.25)",
          borderRadius: 4,
          padding: "6px 8px",
          marginBottom: 12,
        }}
      >
        <div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Type</div>
          <div style={{ fontFamily: sans, fontSize: 9.5, fontWeight: 700, color: navy, marginTop: 1 }}>Collab Web App</div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Focus</div>
          <div style={{ fontFamily: sans, fontSize: 9.5, fontWeight: 700, color: navy, marginTop: 1 }}>Live Notes</div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Auth</div>
          <div style={{ fontFamily: sans, fontSize: 9.5, fontWeight: 700, color: navy, marginTop: 1 }}>Firebase Auth</div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Deployment</div>
          <div style={{ fontFamily: sans, fontSize: 9.5, fontWeight: 700, color: "#2a5c3f", marginTop: 1 }}>Vercel</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14 }}>
        <a
          href="https://cowriter-test.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "5px 12px",
            borderRadius: 3,
            background: "#2a5c3f",
            color: "#ffffff",
            fontFamily: mono,
            fontSize: 9.5,
            fontWeight: 600,
            letterSpacing: "0.05em",
            textDecoration: "none",
            boxShadow: "0 2px 6px rgba(42,92,63,0.25)",
            border: "1px solid rgba(0,0,0,0.1)",
            transition: "all 0.2s ease",
          }}
        >
          <span>↗</span> Live Demo
        </a>
        <a
          href="https://github.com/VAIBHAV-ops2077/cowriter-test"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "5px 12px",
            borderRadius: 3,
            background: "rgba(30,45,74,0.08)",
            color: navy,
            fontFamily: mono,
            fontSize: 9.5,
            fontWeight: 600,
            letterSpacing: "0.05em",
            textDecoration: "none",
            border: "1px solid rgba(30,45,74,0.25)",
            transition: "all 0.2s ease",
          }}
        >
          <span>↗</span> GitHub
        </a>
      </div>

      {/* Featured Product Screenshot Card */}
      <div
        className="group"
        style={{
          position: "relative",
          borderRadius: 6,
          overflow: "hidden",
          border: "1px solid rgba(44,24,16,0.18)",
          boxShadow: "0 4px 16px rgba(44,24,16,0.12), 0 1px 3px rgba(44,24,16,0.08)",
          background: "#ffffff",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
        }}
      >
        {/* Subtle browser mockup header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4px 8px",
            background: "#f0ece3",
            borderBottom: "1px solid rgba(44,24,16,0.1)",
          }}
        >
          <div style={{ display: "flex", gap: 3.5 }}>
            <div style={{ width: 5.5, height: 5.5, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 5.5, height: 5.5, borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: 5.5, height: 5.5, borderRadius: "50%", background: "#10b981" }} />
          </div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.05em" }}>
            cowriter.app/shared-notes
          </div>
          <div style={{ width: 18 }} />
        </div>

        {/* Screenshot Image */}
        <img
          src={demoImg2}
          alt="CoWriter Real-time Collaborative Workspace"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Screenshot Caption */}
      <div
        style={{
          fontFamily: mono,
          fontSize: 8,
          color: "rgba(44,24,16,0.5)",
          letterSpacing: "0.06em",
          marginTop: 6,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <span style={{ color: "#2a5c3f", fontWeight: 700 }}>◆</span>
        <span>Real-time collaborative workspace with live multi-user editing & AI summarization</span>
      </div>

      <PageNumber n={9} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      {/* Top running header */}
      <div
        style={{
          fontFamily: mono,
          fontSize: 8,
          letterSpacing: "0.2em",
          color: "rgba(44,24,16,0.35)",
          marginBottom: 12,
          textTransform: "uppercase",
        }}
      >
        Project 02 · Page 10
      </div>

      {/* Section Header */}
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontFamily: serif, fontSize: 16, fontWeight: 700, color: navy, lineHeight: 1.1 }}>
          Collaborative Engine & Capabilities
        </div>
        <div style={{ fontFamily: mono, fontSize: 8, color: "#2a5c3f", letterSpacing: "0.12em", marginTop: 2, textTransform: "uppercase" }}>
          Live Multi-User Cloud Synchronization
        </div>
      </div>

      {/* Key Features / App Store Highlights */}
      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 14 }}>
        {[
          {
            title: "Real-Time Cloud Synchronization",
            desc: "Instant bidirectional updates across all connected clients powered by Firestore onSnapshot() listeners.",
          },
          {
            title: "Multi-Provider Firebase Authentication",
            desc: "Seamless single sign-on with Email, Google, and GitHub for instant document authorization.",
          },
          {
            title: "Rich Text Formatting & AI Summarization",
            desc: "Markdown shortcuts (Cmd+B, Cmd+I), list structures, and integrated AI assistant for rapid note synthesis.",
          },
          {
            title: "Shareable Invite Links & Permissions",
            desc: "Generate secure unique URLs for teammates to join active document sessions with live presence.",
          },
          {
            title: "Collaborator Avatars & Live Status",
            desc: "Visual stacked avatars showing active collaborators currently reading and editing the document.",
          },
        ].map((f, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              padding: "5px 8px",
              background: "rgba(255,255,255,0.45)",
              border: "1px solid rgba(42,92,63,0.18)",
              borderRadius: 4,
            }}
          >
            <span style={{ color: "#2a5c3f", fontSize: 9, marginTop: 1 }}>◆</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 700, color: navy, lineHeight: 1.2 }}>
                {f.title}
              </div>
              <div style={{ fontSize: 9.5, color: ink, lineHeight: 1.4, marginTop: 1 }}>
                {f.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div style={{ marginBottom: 12 }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 8,
            letterSpacing: "0.15em",
            color: "rgba(44,24,16,0.45)",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Built With
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          <TechTag color={navy} bg="rgba(30,45,74,0.08)">Next.js</TechTag>
          <TechTag color="#2a5c7a" bg="rgba(42,92,122,0.08)">TypeScript</TechTag>
          <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">Tailwind CSS</TechTag>
          <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">Firebase Auth</TechTag>
          <TechTag color="#7a3f2a" bg="rgba(122,63,42,0.08)">Firestore</TechTag>
          <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Framer Motion</TechTag>
          <TechTag color="#3f7a2a" bg="rgba(63,122,42,0.08)">GSAP</TechTag>
          <TechTag color="#1e2d4a" bg="rgba(30,45,74,0.08)">Vercel</TechTag>
        </div>
      </div>

      <Divider style={{ margin: "8px 0" }} />

      {/* Takeaway Sticky Note */}
      <div style={{ marginTop: 8 }}>
        <StickyNote color="#d6f5e8" rotate={1} style={{ fontSize: 10, width: "100%", padding: "7px 10px" }}>
          Built around real-time collaboration and cloud-synced notes across desktop and mobile devices.
        </StickyNote>
      </div>

      <PageNumber n={10} side="right" />
    </Page>
  );
}

export function Spread4({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
