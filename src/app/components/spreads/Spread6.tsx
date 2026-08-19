import { Page, TechTag, StickyNote, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        capabilities · page 13
      </div>

      {/* Section header */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <div style={{ width: 3, height: 32, background: "#7a3f2a", borderRadius: 2 }} />
        <div>
          <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: navy, lineHeight: 1 }}>
            Interactive &amp; Game Dev
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: "#7a3f2a", letterSpacing: "0.12em", marginTop: 3 }}>
            BEYOND CONVENTIONAL WEB DEVELOPMENT
          </div>
        </div>
      </div>

      {/* Code-style capability display */}
      <div style={{
        background: "#1a0a2e", borderRadius: 6, padding: "10px 12px",
        marginBottom: 14, boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        fontFamily: mono, fontSize: 8.5,
      }}>
        <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: 8, fontSize: 8, letterSpacing: "0.12em" }}>
          // capability areas
        </div>
        {[
          { label: "interactive_experiences", color: "#4fc3f7" },
          { label: "game_mechanics_and_systems", color: "#a5d6a7" },
          { label: "real_time_physics_interactions", color: "#ffcc80" },
          { label: "client_server_game_architecture", color: "#ce93d8" },
          { label: "3d_web_experiences", color: "#4fc3f7" },
          { label: "interactive_prototypes", color: "#a5d6a7" },
        ].map((line, i) => (
          <div key={i} style={{ color: line.color, lineHeight: 1.85 }}>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>→ </span>{line.label}
          </div>
        ))}
      </div>

      {/* Description */}
      <div style={{ fontFamily: serif, fontSize: 12.5, fontWeight: 700, color: navy, marginBottom: 6 }}>
        Beyond the browser
      </div>
      <p style={{ fontSize: 11.5, lineHeight: 1.7, color: ink, marginBottom: 10 }}>
        My development work extends into interactive experience design and
        game systems. I have built multiplayer game mechanics, physics-driven
        interactions, client-server game architectures, and real-time
        interactive systems.
      </p>
      <p style={{ fontSize: 11.5, lineHeight: 1.65, color: inkFaint }}>
        This gives me a practical understanding of event-driven architecture,
        latency-sensitive state management, and user interaction design that
        goes well beyond conventional web interfaces.
      </p>

      <PageNumber n={13} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 14, textTransform: "uppercase" }}>
        beyond code · page 14
      </div>

      {/* Interactive dev capability tags */}
      <div style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: navy, marginBottom: 8 }}>
        Interactive dev toolkit
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, marginBottom: 14 }}>
        <TechTag color="#7a3f2a" bg="rgba(122,63,42,0.08)">Game Mechanics</TechTag>
        <TechTag color="#2a5c7a" bg="rgba(42,92,122,0.08)">Client-Server Events</TechTag>
        <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">Physics Systems</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Hit Detection</TechTag>
        <TechTag color="#7a3f2a" bg="rgba(122,63,42,0.08)">3D Web (Three.js/R3F)</TechTag>
        <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">Real-time Interaction</TechTag>
      </div>

      <Divider style={{ margin: "0 0 12px 0" }} />

      {/* Beyond Code section */}
      <div style={{ fontFamily: serif, fontSize: 16, fontWeight: 700, color: navy, marginBottom: 4 }}>
        Beyond Code
      </div>
      <div style={{ fontFamily: hand, fontSize: 12, color: gold, marginBottom: 10 }}>
        — I like building products, not just completing assignments.
      </div>

      <p style={{ fontSize: 11, lineHeight: 1.65, color: ink, marginBottom: 10 }}>
        I regularly explore product ideas across: full-stack applications,
        real-time systems, interactive experiences, developer tools,
        cloud infrastructure, and creative 3D web experiences.
      </p>

      <p style={{ fontSize: 11, lineHeight: 1.65, color: inkFaint, marginBottom: 12 }}>
        I naturally think in terms of problems, users, systems, and products —
        not just code.
      </p>

      {/* Process loop */}
      <div style={{ display: "flex", gap: 0, alignItems: "center", justifyContent: "center" }}>
        {["IDEA", "PROTOTYPE", "TEST", "ITERATE"].map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 0 }}>
            <div style={{
              padding: "4px 8px",
              borderRadius: 2,
              background: i === 0 ? navy : i === 3 ? gold : "rgba(44,24,16,0.07)",
              color: i === 0 ? "#faf6f0" : i === 3 ? "#fff" : ink,
              fontFamily: mono,
              fontSize: 8.5,
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}>
              {step}
            </div>
            {i < 3 && <span style={{ fontFamily: mono, fontSize: 10, color: inkFaint, margin: "0 2px" }}>→</span>}
          </div>
        ))}
      </div>

      <PageNumber n={14} side="right" />
    </Page>
  );
}

export function Spread6({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
