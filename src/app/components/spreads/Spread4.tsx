import { Page, TechTag, StickyNote, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 02 · page 09
      </div>

      {/* Project label */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <div style={{ width: 3, height: 32, background: "#a54232", borderRadius: 2 }} />
        <div>
          <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 700, color: navy, lineHeight: 1 }}>
            Converge
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: "#a54232", letterSpacing: "0.12em", marginTop: 3 }}>
            SMART RETAIL MANAGEMENT PLATFORM
          </div>
        </div>
      </div>

      {/* Dashboard mockup */}
      <div style={{
        background: "#0B2545", borderRadius: 6, padding: "10px 12px",
        marginBottom: 14, boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        fontFamily: mono, fontSize: 9,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5A09" }} />
          <div style={{ fontFamily: sans, fontSize: 10, color: "rgba(255,255,255,0.7)", fontWeight: 700 }}>Converge Dashboard</div>
        </div>
        {[
          { label: "Today's Sales", value: "₹14,250", color: "#FF5A09" },
          { label: "UPI Received", value: "₹1,200 via PhonePe", color: "#10B981" },
          { label: "Stock Alert", value: "Britannia Rusk — 3 left", color: "#EF4444" },
          { label: "New Order", value: "5 items • ₹450", color: "#4fc3f7" },
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 8 }}>{row.label}</span>
            <span style={{ color: row.color, fontSize: 8, fontWeight: 700 }}>{row.value}</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <div style={{ fontFamily: serif, fontSize: 12.5, fontWeight: 700, color: navy, marginBottom: 6 }}>
        What it is
      </div>
      <p style={{ fontSize: 11.5, lineHeight: 1.7, color: ink, marginBottom: 8 }}>
        Converge is a SaaS-style retail management platform designed for Indian
        kirana stores, pharmacies, and small retailers. It provides billing,
        inventory tracking, UPI payment visibility, and WhatsApp order management
        from a single, fast dashboard interface.
      </p>

      {/* Links */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
        <a href="https://converge-sandy.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ padding: "4px 10px", borderRadius: 2, background: "#a54232", color: "#fff", fontFamily: mono, fontSize: 9, letterSpacing: "0.05em", textDecoration: "none" }}>
          ↗ Live Demo
        </a>
        <a href="https://github.com/VAIBHAV-ops2077/Converge" target="_blank" rel="noopener noreferrer" style={{ padding: "4px 10px", borderRadius: 2, background: navy, color: "#faf6f0", fontFamily: mono, fontSize: 9, letterSpacing: "0.05em", textDecoration: "none" }}>
          ↗ GitHub
        </a>
      </div>

      <PageNumber n={9} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 02 · page 10
      </div>

      {/* Tech stack */}
      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 10 }}>
        Tech Stack
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, marginBottom: 14 }}>
        <TechTag>HTML5</TechTag>
        <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">CSS3</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">JavaScript</TechTag>
        <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">Lucide Icons</TechTag>
        <TechTag color="#2a5c7a" bg="rgba(42,92,122,0.08)">Vercel</TechTag>
      </div>

      <Divider />

      {/* Pages & features */}
      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 10, marginTop: 12 }}>
        What's inside
      </div>
      {[
        { icon: "🏠", text: "Marketing landing page — hero, features, pricing overview" },
        { icon: "📊", text: "Interactive demo dashboard — sales, stock, UPI payment cards" },
        { icon: "📋", text: "Features page — billing, inventory, payments, WhatsApp orders" },
        { icon: "💡", text: "How It Works — step-by-step explainer flow" },
        { icon: "🌐", text: "Ecosystem & Pricing — plan comparison and integrations" },
        { icon: "📱", text: "Fully responsive across mobile and desktop" },
      ].map((f, i) => (
        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
          <span style={{ fontSize: 13, flexShrink: 0 }}>{f.icon}</span>
          <span style={{ fontSize: 11, lineHeight: 1.55, color: ink }}>{f.text}</span>
        </div>
      ))}

      <div className="absolute bottom-14" style={{ left: 32, right: 32 }}>
        <StickyNote color="#ffd6b3" rotate={-1} style={{ fontSize: 10.5, width: "100%" }}>
          Demonstrates: frontend product design, multi-page architecture, responsive UI, dashboard UX.
        </StickyNote>
      </div>

      <PageNumber n={10} side="right" />
    </Page>
  );
}

export function Spread4({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
