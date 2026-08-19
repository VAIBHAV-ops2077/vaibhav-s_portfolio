import { Page, StickyNote, TechTag, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        about me · page 03
      </div>

      {/* Avatar circle */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          background: `linear-gradient(135deg, ${navy} 0%, #2d4a7a 100%)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          boxShadow: "0 4px 16px rgba(30,45,74,0.25)",
          border: "3px solid rgba(201,134,58,0.3)",
        }}>
          <span style={{ fontFamily: serif, fontSize: 24, fontWeight: 700, color: "#d4a655" }}>V</span>
        </div>
        <div>
          <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: navy, lineHeight: 1.2 }}>
            Vaibhav
          </div>
          <div style={{ fontFamily: hand, fontSize: 13, color: gold, marginTop: 2 }}>
            Computer Science Student. Developer. Builder.
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: inkFaint, marginTop: 4 }}>
            ITM Skills University · CSE · 2nd Year
          </div>
        </div>
      </div>

      <Divider />

      {/* Story */}
      <div style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: navy, marginBottom: 6, marginTop: 10 }}>
        Who I am
      </div>
      <p style={{ fontSize: 11.5, lineHeight: 1.7, color: ink, marginBottom: 12 }}>
        I'm a Computer Science student with a simple way of learning technology: I build with it.
        Instead of stopping at tutorials, I take an idea and push it far enough to become a working
        system — whether that means building a React interface, designing an API, deploying to the
        cloud, or experimenting with AI.
      </p>

      {/* What I build */}
      <div style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: navy, marginBottom: 8 }}>
        What I build
      </div>
      {[
        "Full-stack web applications — frontend through deployment",
        "Cloud systems and infrastructure on AWS",
        "Containerized services with Docker and Kubernetes",
        "AI-integrated applications and automation workflows",
        "Interactive experiences, game systems & real-time interactions",
        "Hardware / IoT projects with ESP32 and Arduino",
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 5 }}>
          <span style={{ color: gold, fontSize: 14, lineHeight: 1.5, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: 11, lineHeight: 1.5, color: ink }}>{item}</span>
        </div>
      ))}

      <PageNumber n={3} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        about me · page 04
      </div>

      {/* Journey timeline */}
      <div style={{ fontFamily: serif, fontSize: 15, fontWeight: 700, color: navy, marginBottom: 14 }}>
        Journey
      </div>

      {[
        { year: "2024", label: "Started B.Tech CSE", note: "ITM Skills University, Kharghar — dived into building projects alongside coursework" },
        { year: "2024", label: "StockSync", note: "First full-stack app with real-time inventory tracking, auth, and Socket.IO" },
        { year: "2025", label: "Converge", note: "Multi-page SaaS-style retail platform with demo dashboard" },
        { year: "2025", label: "Hackathons & Events", note: "GDG Cloud Mumbai, Smart India Hackathon, Techfest IIT Bombay" },
        { year: "Now", label: "Still building…", note: "CoWriter, interactive experiences, and always the next thing" },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 12, marginBottom: 11 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: item.year === "Now" ? gold : navy,
              marginTop: 3, flexShrink: 0,
              boxShadow: item.year === "Now" ? `0 0 8px ${gold}88` : "none",
            }} />
            {i < 4 && <div style={{ width: 1, flex: 1, background: "rgba(30,45,74,0.15)", marginTop: 3 }} />}
          </div>
          <div style={{ paddingBottom: 4 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
              <span style={{ fontFamily: mono, fontSize: 9, color: gold, letterSpacing: "0.08em" }}>{item.year}</span>
              <span style={{ fontFamily: serif, fontSize: 12, fontWeight: 700, color: navy }}>{item.label}</span>
            </div>
            <p style={{ fontSize: 10.5, color: inkFaint, lineHeight: 1.5, marginTop: 2 }}>{item.note}</p>
          </div>
        </div>
      ))}

      <Divider style={{ margin: "10px 0" }} />

      {/* How I work */}
      <div style={{ fontFamily: hand, fontSize: 13, color: navy, marginBottom: 8 }}>
        How I work:
      </div>
      {[
        "Start with the problem",
        "Break it into systems",
        "Build a working version",
        "Debug aggressively",
        "Deploy and test",
        "Iterate based on what fails",
      ].map((step, i) => (
        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 4, alignItems: "center" }}>
          <span style={{ fontFamily: mono, fontSize: 9, color: gold, width: 16, flexShrink: 0 }}>0{i + 1}</span>
          <span style={{ fontSize: 11, color: ink }}>{step}</span>
        </div>
      ))}

      {/* Approach tag */}
      <div className="absolute bottom-14 right-6">
        <StickyNote color="#d6e8ff" rotate={2} style={{ fontSize: 11 }}>
          Learn → Build → Deploy → Iterate
        </StickyNote>
      </div>

      <PageNumber n={4} side="right" />
    </Page>
  );
}

export function Spread1({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
