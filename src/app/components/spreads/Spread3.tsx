import { Page, TechTag, StickyNote, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 01 · page 07
      </div>

      {/* Project label */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <div style={{ width: 3, height: 32, background: gold, borderRadius: 2 }} />
        <div>
          <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 700, color: navy, lineHeight: 1 }}>
            StockSync
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: gold, letterSpacing: "0.12em", marginTop: 3 }}>
            FULL-STACK INVENTORY MANAGEMENT SYSTEM
          </div>
        </div>
      </div>

      {/* Architecture diagram */}
      <div style={{
        background: "#1e2d4a", borderRadius: 6, padding: "10px 12px",
        marginBottom: 14, boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        fontFamily: mono, fontSize: 9,
      }}>
        <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: 8, fontSize: 8, letterSpacing: "0.12em" }}>
          // architecture
        </div>
        {[
          { label: "[ React + Vite Frontend ]", color: "#4fc3f7" },
          { label: "       ↓  Socket.IO (real-time)", color: "rgba(255,255,255,0.3)" },
          { label: "[ Node.js + Express Backend ]", color: "#a5d6a7" },
          { label: "       ↓  Mongoose ODM", color: "rgba(255,255,255,0.3)" },
          { label: "[ MongoDB Database ]", color: "#ffcc80" },
          { label: "       ↕  WebSocket events", color: "rgba(255,255,255,0.3)" },
          { label: "[ Live Stock · Barcode · Alerts ]", color: "#ce93d8" },
        ].map((line, i) => (
          <div key={i} style={{ color: line.color, lineHeight: 1.8 }}>{line.label}</div>
        ))}
      </div>

      {/* Description */}
      <div style={{ fontFamily: serif, fontSize: 12.5, fontWeight: 700, color: navy, marginBottom: 6 }}>
        What it is
      </div>
      <p style={{ fontSize: 11.5, lineHeight: 1.7, color: ink, marginBottom: 8 }}>
        A full-stack inventory management platform providing real-time visibility
        into stock levels, product information, barcode scanning, and shipment
        tracking — with live updates across all connected clients via Socket.IO.
      </p>

      {/* Links */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
        <a href="https://stock-sync-indol.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ padding: "4px 10px", borderRadius: 2, background: gold, color: "#fff", fontFamily: mono, fontSize: 9, letterSpacing: "0.05em", textDecoration: "none" }}>
          ↗ Live Demo
        </a>
        <a href="https://github.com/VAIBHAV-ops2077/StockSync" target="_blank" rel="noopener noreferrer" style={{ padding: "4px 10px", borderRadius: 2, background: navy, color: "#faf6f0", fontFamily: mono, fontSize: 9, letterSpacing: "0.05em", textDecoration: "none" }}>
          ↗ GitHub
        </a>
      </div>

      <PageNumber n={7} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 01 · page 08
      </div>

      {/* Tech stack */}
      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 10 }}>
        Tech Stack
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, marginBottom: 14 }}>
        <TechTag>React</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Vite</TechTag>
        <TechTag color="#7a3f2a" bg="rgba(122,63,42,0.08)">Node.js</TechTag>
        <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">Express.js</TechTag>
        <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">MongoDB</TechTag>
        <TechTag color="#2a5c7a" bg="rgba(42,92,122,0.08)">Socket.IO</TechTag>
        <TechTag color="#7a5c2a" bg="rgba(122,92,42,0.08)">JWT</TechTag>
        <TechTag color="#3f7a2a" bg="rgba(63,122,42,0.08)">bcryptjs</TechTag>
      </div>

      <Divider />

      {/* Features */}
      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 10, marginTop: 12 }}>
        Key capabilities
      </div>
      {[
        { icon: "📡", text: "Real-time stock updates via Socket.IO WebSockets" },
        { icon: "🔐", text: "JWT authentication with role-based demo access" },
        { icon: "📦", text: "Barcode scanning with product matching" },
        { icon: "🚚", text: "Incoming & outgoing shipment tracking" },
        { icon: "🔍", text: "Live inventory search by name, SKU, location" },
        { icon: "📊", text: "Stock-health dashboard with animated gauges" },
      ].map((f, i) => (
        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
          <span style={{ fontSize: 13, flexShrink: 0 }}>{f.icon}</span>
          <span style={{ fontSize: 11, lineHeight: 1.55, color: ink }}>{f.text}</span>
        </div>
      ))}

      <div className="absolute bottom-14" style={{ left: 32, right: 32 }}>
        <StickyNote color="#d6f5d6" rotate={1} style={{ fontSize: 10.5, width: "100%" }}>
          Demonstrates: full-stack dev, real-time systems, REST APIs, WebSockets, auth, database design.
        </StickyNote>
      </div>

      <PageNumber n={8} side="right" />
    </Page>
  );
}

export function Spread3({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
