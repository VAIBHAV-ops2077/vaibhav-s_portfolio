import { Page, StickyNote, TechTag, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        experience · page 15
      </div>

      <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: navy, marginBottom: 4 }}>
        Experience
      </div>
      <div style={{ fontFamily: hand, fontSize: 13, color: gold, marginBottom: 18 }}>
        — working in the real world
      </div>

      {/* LetsUpgrade experience entry */}
      <div style={{ borderLeft: `3px solid ${gold}`, paddingLeft: 14, marginBottom: 16 }}>
        {/* Title row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 3 }}>
          <div style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: navy }}>
            Operations Intern
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: inkFaint }}>2024 · 6 months</div>
        </div>

        {/* Org + mode */}
        <div style={{ fontFamily: hand, fontSize: 12, color: gold, marginBottom: 6 }}>
          LetsUpgrade · Remote
        </div>


        {/* Responsibilities */}
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 4, marginBottom: 10 }}>
          {[
            "Built and maintained n8n workflow automations for recurring operational tasks",
            "Processed and organized large volumes of signup, enrollment, and operational data",
            "Prepared structured daily and periodic reports based on collected data",
            "Coordinated communication via email and WhatsApp — queries, updates, follow-ups",
            "Researched cloud-computing topics and created internal documentation",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
              <span style={{ color: gold, fontSize: 12, flexShrink: 0, lineHeight: 1.5 }}>✦</span>
              <span style={{ fontSize: 10.5, lineHeight: 1.6, color: ink }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Skill tags */}
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 4 }}>
          <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">n8n</TechTag>
          <TechTag color="#2a5c7a" bg="rgba(42,92,122,0.08)">Process Automation</TechTag>
          <TechTag color="#7a3f2a" bg="rgba(122,63,42,0.08)">Data Handling</TechTag>
          <TechTag color={navy}>Reporting</TechTag>
          <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Operations</TechTag>
          <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">Documentation</TechTag>
        </div>
      </div>

      <Divider />

      {/* What this taught me */}
      <div style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: navy, marginBottom: 10, marginTop: 12 }}>
        What this taught me
      </div>
      {[
        { area: "Automation thinking", note: "Identifying repetitive workflows and replacing them with n8n automations" },
        { area: "Working with data at scale", note: "Handling large, inconsistent datasets — filtering, validating, organizing" },
        { area: "Operational discipline", note: "Daily reporting rhythms, structured follow-ups, and process consistency" },
        { area: "Cross-channel coordination", note: "Managing information flow across email, WhatsApp, and internal processes" },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: gold, marginTop: 5, flexShrink: 0 }} />
          <div>
            <div style={{ fontFamily: serif, fontSize: 11, fontWeight: 700, color: navy }}>{item.area}</div>
            <div style={{ fontSize: 10.5, color: inkFaint, lineHeight: 1.5 }}>{item.note}</div>
          </div>
        </div>
      ))}

      <PageNumber n={15} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        education · page 16
      </div>

      <div style={{ fontFamily: serif, fontSize: 15, fontWeight: 700, color: navy, marginBottom: 14 }}>
        Education
      </div>

      <div style={{ borderLeft: `3px solid ${gold}`, paddingLeft: 14, marginBottom: 20 }}>
        <div style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: navy, marginBottom: 2 }}>
          B.Tech — Computer Science Engineering
        </div>
        <div style={{ fontFamily: hand, fontSize: 12, color: gold, marginBottom: 2 }}>
          ITM Skills University
        </div>
        <div style={{ fontFamily: mono, fontSize: 9, color: inkFaint, marginBottom: 8 }}>
          Kharghar, Maharashtra · 2024 – present · Second Year
        </div>
        <p style={{ fontSize: 11.5, lineHeight: 1.6, color: ink, marginBottom: 10 }}>
          Core areas: Data Structures &amp; Algorithms, Machine Learning, Cloud Computing,
          Database Systems, System Design, Web Development, DevOps, Programming.
        </p>
      </div>

      <Divider />

      {/* Learning through projects */}
      <div style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: navy, marginBottom: 10, marginTop: 12 }}>
        Learning through projects
      </div>
      <p style={{ fontSize: 11.5, lineHeight: 1.65, color: ink, marginBottom: 12 }}>
        Many concepts from the curriculum have been reinforced through implementation.
        Rather than stopping at coursework, I apply what I learn immediately — deploying
        cloud systems, building APIs, containerizing services, and experimenting with
        AI-integrated applications.
      </p>

      {/* Technical areas */}
      <div style={{ fontFamily: hand, fontSize: 13, color: navy, marginBottom: 8 }}>
        Applied in projects:
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 4 }}>
        {["DSA", "Cloud Computing", "GraphQL", "DevOps", "Machine Learning", "System Design", "Databases", "Web Dev"].map((tag, i) => (
          <span key={i} style={{ padding: "2px 8px", borderRadius: 2, background: "rgba(30,45,74,0.07)", color: navy, fontFamily: mono, fontSize: 9.5, border: "1px solid rgba(30,45,74,0.12)" }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Personal note */}
      <div className="absolute bottom-14" style={{ left: 32, right: 32 }}>
        <StickyNote color="#d6e8ff" rotate={-1} style={{ fontSize: 11 }}>
          I'm early in my career — and that's something I want this portfolio to make clear.
          I'm not presenting expertise. I'm presenting evidence of learning. 📚
        </StickyNote>
      </div>

      <PageNumber n={16} side="right" />
    </Page>
  );
}

export function Spread7({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
