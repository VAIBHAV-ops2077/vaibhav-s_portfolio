import { Page, TechTag, StickyNote, PageNumber, Divider, serif, mono, ink, navy, gold, sans } from "./PageBase";
import demoImg4 from "../../../../ProductDemo/Game/demoimg4.png";

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
        Project 04 · Page 13
      </div>

      {/* Product / Game Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
        <div style={{ width: 3.5, height: 36, background: "#7a3f2a", borderRadius: 2, flexShrink: 0, marginTop: 2 }} />
        <div>
          <div style={{ fontFamily: serif, fontSize: 21, fontWeight: 700, color: navy, lineHeight: 1.1 }}>
            Glove Royale
          </div>
          <div style={{ fontFamily: mono, fontSize: 8.5, color: "#7a3f2a", letterSpacing: "0.14em", marginTop: 2, fontWeight: 600 }}>
            REAL-TIME 3D ARENA COMBAT &amp; PHYSICS
          </div>
          <div style={{ fontFamily: serif, fontSize: 10.5, fontStyle: "italic", color: "rgba(44,24,16,0.6)", marginTop: 2 }}>
            Real-time 3D arena combat game featuring custom physics hitboxes and particle effects.
          </div>
        </div>
      </div>

      {/* Product Description */}
      <p style={{ fontSize: 10.5, lineHeight: 1.55, color: ink, marginBottom: 10 }}>
        Glove Royale is a fast-paced 3D multiplayer arena combat experience built
        around custom physics hitboxes, responsive punch animation timing, and
        event-driven client-server replication. Players battle on a suspended sky
        colosseum with dynamic knockback vectors and impact VFX.
      </p>

      {/* Compact Product Metadata Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 6,
          background: "rgba(44,24,16,0.03)",
          border: "1px solid rgba(122,63,42,0.22)",
          borderRadius: 4,
          padding: "6px 8px",
          marginBottom: 12,
        }}
      >
        <div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Type</div>
          <div style={{ fontFamily: sans, fontSize: 9.5, fontWeight: 700, color: navy, marginTop: 1 }}>3D Arena Game</div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Platform</div>
          <div style={{ fontFamily: sans, fontSize: 9.5, fontWeight: 700, color: navy, marginTop: 1 }}>Roblox Engine</div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Focus</div>
          <div style={{ fontFamily: sans, fontSize: 9.5, fontWeight: 700, color: navy, marginTop: 1 }}>Combat Physics</div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Status</div>
          <div style={{ fontFamily: sans, fontSize: 9.5, fontWeight: 700, color: "#2a5c3f", marginTop: 1 }}>Playable Prototype</div>
        </div>
      </div>

      {/* Action / Showcase Badges */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "5px 12px",
            borderRadius: 3,
            background: "#7a3f2a",
            color: "#ffffff",
            fontFamily: mono,
            fontSize: 9.5,
            fontWeight: 600,
            letterSpacing: "0.05em",
            boxShadow: "0 2px 6px rgba(122,63,42,0.25)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <span>🎮</span> Interactive 3D Showcase
        </span>
        <span
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
            border: "1px solid rgba(30,45,74,0.25)",
          }}
        >
          <span>⚔️</span> Custom Lua Architecture
        </span>
      </div>

      {/* Featured Game Screenshot Card */}
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
        {/* Subtle studio frame mockup header */}
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
            studio.roblox.com/glove-royale/arena
          </div>
          <div style={{ width: 18 }} />
        </div>

        {/* Screenshot Image */}
        <img
          src={demoImg4}
          alt="Glove Royale 3D Battle Arena & Script Hierarchy"
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
        <span style={{ color: "#7a3f2a", fontWeight: 700 }}>◆</span>
        <span>Floating Battle Arena: 3D sky colosseum with custom raycast hitboxes &amp; VFX handlers</span>
      </div>

      <PageNumber n={13} side="left" />
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
        Project 04 · Page 14
      </div>

      {/* Section Header */}
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontFamily: serif, fontSize: 16, fontWeight: 700, color: navy, lineHeight: 1.1 }}>
          Combat Engine &amp; Gameplay Systems
        </div>
        <div style={{ fontFamily: mono, fontSize: 8, color: "#7a3f2a", letterSpacing: "0.12em", marginTop: 2, textTransform: "uppercase" }}>
          Client-Server Architecture &amp; Mechanics
        </div>
      </div>

      {/* Key Mechanics / App Store Highlights */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
        {[
          {
            title: "Spatial Raycast & Hitbox System",
            desc: "Custom client-side spatial hit registration with server validation via PunchHitboxClient.",
          },
          {
            title: "Dynamic Keyframe Animation Blending",
            desc: "Handcrafted attack animation sequences with recovery frames and strike window cancellation.",
          },
          {
            title: "Impact Physics & Knockback Vectors",
            desc: "Physics impulses calculated from player facing angles and momentum at the moment of impact.",
          },
          {
            title: "Hit Effect Handler & Audio Spatialization",
            desc: "Triggered 3D sound effects, directional spark emitters, and camera shake via HitEffectHandler.",
          },
          {
            title: "Floating Sky Arena Environment",
            desc: "Atmospheric skybox lighting, ancient stone pillar geometry, and instant fall-off bounds elimination.",
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
              border: "1px solid rgba(122,63,42,0.18)",
              borderRadius: 4,
            }}
          >
            <span style={{ color: "#7a3f2a", fontSize: 9, marginTop: 1 }}>◆</span>
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

      {/* Gameplay Flow Loop */}
      <div style={{ marginBottom: 10 }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 8,
            letterSpacing: "0.15em",
            color: "rgba(44,24,16,0.45)",
            textTransform: "uppercase",
            marginBottom: 5,
          }}
        >
          Gameplay Loop
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(44,24,16,0.04)", padding: "4px 8px", borderRadius: 3, border: "1px solid rgba(44,24,16,0.1)" }}>
          {["1. ARENA SPAWN", "2. SPACING", "3. COMBO STRIKE", "4. KNOCKOUT"].map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <span style={{ fontFamily: mono, fontSize: 8, fontWeight: 700, color: i === 3 ? "#a54232" : navy }}>
                {step}
              </span>
              {i < 3 && <span style={{ color: "rgba(44,24,16,0.3)", fontSize: 8 }}>→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div style={{ marginBottom: 10 }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 8,
            letterSpacing: "0.15em",
            color: "rgba(44,24,16,0.45)",
            textTransform: "uppercase",
            marginBottom: 5,
          }}
        >
          Built With
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          <TechTag color="#7a3f2a" bg="rgba(122,63,42,0.08)">Luau / Lua</TechTag>
          <TechTag color={navy} bg="rgba(30,45,74,0.08)">Roblox Studio</TechTag>
          <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Hitbox Math</TechTag>
          <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">Animation Editor</TechTag>
          <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">Client-Server Events</TechTag>
          <TechTag color="#2a5c7a" bg="rgba(42,92,122,0.08)">TweenService</TechTag>
        </div>
      </div>

      <Divider style={{ margin: "6px 0" }} />

      {/* Takeaway Sticky Note */}
      <div style={{ marginTop: 6 }}>
        <StickyNote color="#f0e6d6" rotate={1} style={{ fontSize: 9.5, width: "100%", padding: "6px 9px" }}>
          Demonstrates event-driven client-server networking, custom 3D spatial math, hitbox replication, and latency-tolerant combat design.
        </StickyNote>
      </div>

      <PageNumber n={14} side="right" />
    </Page>
  );
}

export function Spread6({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
