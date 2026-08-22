import { Page, TechTag, StickyNote, PageNumber, Divider, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";
import demoImg1 from "../../../../ProductDemo/Converge/demoimg1.png";

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
        Project 01 · Page 07
      </div>

      {/* Product Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
        <div style={{ width: 3.5, height: 36, background: "#a54232", borderRadius: 2, flexShrink: 0, marginTop: 2 }} />
        <div>
          <div style={{ fontFamily: serif, fontSize: 21, fontWeight: 700, color: navy, lineHeight: 1.1 }}>
            Converge
          </div>
          <div style={{ fontFamily: mono, fontSize: 8.5, color: "#a54232", letterSpacing: "0.14em", marginTop: 2, fontWeight: 600 }}>
            SMART RETAIL MANAGEMENT PLATFORM
          </div>
          <div style={{ fontFamily: serif, fontSize: 10.5, fontStyle: "italic", color: "rgba(44,24,16,0.6)", marginTop: 2 }}>
            SaaS-style retail management platform for Indian small businesses.
          </div>
        </div>
      </div>

      {/* Product Description */}
      <p style={{ fontSize: 10.5, lineHeight: 1.55, color: ink, marginBottom: 10 }}>
        Converge is a SaaS-style retail management platform designed for Indian
        kirana stores, pharmacies, and small retailers. It provides billing,
        inventory tracking, UPI payment visibility, and WhatsApp order management
        from a single, fast dashboard interface.
      </p>

      {/* Compact Product Metadata Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 6,
          background: "rgba(44,24,16,0.03)",
          border: "1px solid rgba(201,134,58,0.22)",
          borderRadius: 4,
          padding: "6px 8px",
          marginBottom: 12,
        }}
      >
        <div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Type</div>
          <div style={{ fontFamily: sans, fontSize: 9.5, fontWeight: 700, color: navy, marginTop: 1 }}>SaaS / Web</div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Focus</div>
          <div style={{ fontFamily: sans, fontSize: 9.5, fontWeight: 700, color: navy, marginTop: 1 }}>Retail POS</div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Target</div>
          <div style={{ fontFamily: sans, fontSize: 9.5, fontWeight: 700, color: navy, marginTop: 1 }}>Kirana Stores</div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 7, color: "rgba(44,24,16,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Status</div>
          <div style={{ fontFamily: sans, fontSize: 9.5, fontWeight: 700, color: "#2a5c3f", marginTop: 1 }}>Built / Live</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14 }}>
        <a
          href="https://converge-sandy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "5px 12px",
            borderRadius: 3,
            background: "#a54232",
            color: "#ffffff",
            fontFamily: mono,
            fontSize: 9.5,
            fontWeight: 600,
            letterSpacing: "0.05em",
            textDecoration: "none",
            boxShadow: "0 2px 6px rgba(165,66,50,0.25)",
            border: "1px solid rgba(0,0,0,0.1)",
            transition: "all 0.2s ease",
          }}
        >
          <span>↗</span> Live Demo
        </a>
        <a
          href="https://github.com/VAIBHAV-ops2077/Converge"
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
            converge.app/analytics
          </div>
          <div style={{ width: 18 }} />
        </div>

        {/* Screenshot Image */}
        <img
          src={demoImg1}
          alt="Converge Store Analytics Dashboard"
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
        <span style={{ color: gold, fontWeight: 700 }}>◆</span>
        <span>Dashboard Overview: Real-time sales trends, margin analysis & inventory accuracy</span>
      </div>

      <PageNumber n={7} side="left" />
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
        Project 01 · Page 08
      </div>

      {/* Section Header */}
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontFamily: serif, fontSize: 16, fontWeight: 700, color: navy, lineHeight: 1.1 }}>
          System Architecture & Modules
        </div>
        <div style={{ fontFamily: mono, fontSize: 8, color: gold, letterSpacing: "0.12em", marginTop: 2, textTransform: "uppercase" }}>
          Built for Kirana & Retail Workflows
        </div>
      </div>

      {/* Key Features / App Store Highlights */}
      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 14 }}>
        {[
          {
            title: "POS Billing & Instant Invoicing",
            desc: "Rapid barcode / manual item lookup with split payments (Cash + UPI) and printed slips.",
          },
          {
            title: "Live Inventory & Stock Health",
            desc: "Continuous stock decrementing, batch expiry tracking, and low-inventory restock alerts.",
          },
          {
            title: "UPI Settlement Visibility",
            desc: "Live reconciliation of PhonePe, Paytm, and GPay soundbox transactions directly on dashboard.",
          },
          {
            title: "WhatsApp Order Engine",
            desc: "Capture direct customer grocery orders via WhatsApp and generate automated digital bills.",
          },
          {
            title: "Store Analytics & Profit Margins",
            desc: "Visual daily revenue curves, highest-margin product tracking, and customer visit volume.",
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
              border: "1px solid rgba(201,134,58,0.18)",
              borderRadius: 4,
            }}
          >
            <span style={{ color: "#a54232", fontSize: 9, marginTop: 1 }}>◆</span>
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
          <TechTag color={navy} bg="rgba(30,45,74,0.08)">HTML5</TechTag>
          <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">CSS3</TechTag>
          <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">JavaScript (ES6+)</TechTag>
          <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">Lucide Icons</TechTag>
          <TechTag color="#2a5c7a" bg="rgba(42,92,122,0.08)">Chart.js</TechTag>
          <TechTag color="#1e2d4a" bg="rgba(30,45,74,0.08)">Vercel CI/CD</TechTag>
        </div>
      </div>

      <Divider style={{ margin: "8px 0" }} />

      {/* Takeaway Sticky Note */}
      <div style={{ marginTop: 8 }}>
        <StickyNote color="#ffd6b3" rotate={-1} style={{ fontSize: 10, width: "100%", padding: "7px 10px" }}>
          Demonstrates: frontend product engineering, multi-page SaaS architecture, kirana POS workflows, and responsive state management.
        </StickyNote>
      </div>

      <PageNumber n={8} side="right" />
    </Page>
  );
}

export function Spread3({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
