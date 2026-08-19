import { Page, StickyNote, PageNumber, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  const links = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "github.com/VAIBHAV-ops2077",
      href: "https://github.com/VAIBHAV-ops2077",
      color: navy,
      bg: "rgba(30,45,74,0.07)",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/vaibhav-kawde-4a1a13321",
      href: "https://www.linkedin.com/in/vaibhav-kawde-4a1a13321/",
      color: "#2a5c7a",
      bg: "rgba(42,92,122,0.07)",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: "Email",
      value: "2024.vaibhavk@isu.ac.in",
      href: "mailto:2024.vaibhavk@isu.ac.in",
      color: "#a54232",
      bg: "rgba(165,66,50,0.07)",
    },
  ];

  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        contact · page 19
      </div>

      {/* Big heading */}
      <div style={{ marginBottom: 6 }}>
        <div style={{ fontFamily: serif, fontSize: 24, fontWeight: 700, color: navy, lineHeight: 1.2 }}>
          Let's build
        </div>
        <div style={{ fontFamily: serif, fontSize: 24, fontWeight: 700, color: gold, lineHeight: 1.2 }}>
          something.
        </div>
      </div>

      {/* Wavy line */}
      <svg width="140" height="12" viewBox="0 0 140 12" style={{ marginBottom: 16 }}>
        <path d="M0 8 Q17.5 2 35 8 Q52.5 14 70 8 Q87.5 2 105 8 Q122.5 14 140 8" stroke={gold} strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>

      <p style={{ fontSize: 12, lineHeight: 1.75, color: ink, marginBottom: 18 }}>
        Open to internships, software development opportunities, collaborations,
        and interesting technical projects. If you're building something — I want to hear about it.
      </p>

      {/* Contact cards */}
      <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 3,
              background: link.bg,
              border: `1px solid ${link.color}22`,
              textDecoration: "none",
            }}
          >
            <div style={{ color: link.color, flexShrink: 0 }}>{link.icon}</div>
            <div>
              <div style={{ fontFamily: mono, fontSize: 9, color: link.color, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{link.label}</div>
              <div style={{ fontFamily: sans, fontSize: 11.5, color: ink, marginTop: 1 }}>{link.value}</div>
            </div>
          </a>
        ))}
      </div>

      <PageNumber n={19} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        contact · page 20
      </div>

      {/* Final page closing message */}
      <div style={{ display: "flex", flexDirection: "column" as const, height: "100%", justifyContent: "space-between", paddingBottom: 40 }}>
        <div>
          {/* Positioning statement */}
          <div style={{
            padding: "14px 16px",
            borderLeft: `3px solid ${gold}`,
            background: "rgba(201,134,58,0.04)",
            marginBottom: 20,
          }}>
            <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.15em", color: gold, textTransform: "uppercase" as const, marginBottom: 8 }}>
              who I am
            </div>
            <p style={{ fontFamily: serif, fontSize: 12.5, color: navy, lineHeight: 1.65, fontWeight: 500 }}>
              A Computer Science student who builds real software across frontend,
              full-stack development, cloud, DevOps, AI-enabled applications,
              and interactive web experiences.
            </p>
          </div>

          {/* Thank you note */}
          <div style={{ fontFamily: hand, fontSize: 17, color: navy, marginBottom: 10, lineHeight: 1.4 }}>
            Thank you for reading through my portfolio.
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.75, color: ink, marginBottom: 16 }}>
            Every project here was built with genuine curiosity.
            I'm early in my career — this is evidence of learning,
            not a claim of expertise. I'm just getting started.
          </p>

          {/* Availability */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            borderRadius: 20,
            background: "rgba(42,92,63,0.08)",
            border: "1px solid rgba(42,92,63,0.2)",
            marginBottom: 16,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#27c93f", boxShadow: "0 0 6px #27c93f88" }} />
            <span style={{ fontFamily: mono, fontSize: 10, color: "#2a5c3f", letterSpacing: "0.06em" }}>
              Available for opportunities
            </span>
          </div>

          {/* Signature */}
          <div style={{ marginTop: 8 }}>
            <div style={{ fontFamily: hand, fontSize: 28, color: navy, lineHeight: 1 }}>Vaibhav</div>
            <div style={{ fontFamily: mono, fontSize: 9, color: inkFaint, marginTop: 4, letterSpacing: "0.1em" }}>
              CS Student · Developer · Builder
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 8, opacity: 0.25 }}>
            <svg width="40" height="30" viewBox="0 0 40 30">
              <rect x="2" y="4" width="16" height="22" rx="1" fill={navy} />
              <rect x="22" y="4" width="16" height="22" rx="1" fill={navy} />
              <rect x="18" y="2" width="4" height="26" fill="#c9863a" />
              <line x1="5" y1="10" x2="15" y2="10" stroke="#faf6f0" strokeWidth="1" opacity="0.4" />
              <line x1="5" y1="14" x2="15" y2="14" stroke="#faf6f0" strokeWidth="1" opacity="0.4" />
              <line x1="5" y1="18" x2="13" y2="18" stroke="#faf6f0" strokeWidth="1" opacity="0.4" />
              <line x1="25" y1="10" x2="35" y2="10" stroke="#faf6f0" strokeWidth="1" opacity="0.4" />
              <line x1="25" y1="14" x2="35" y2="14" stroke="#faf6f0" strokeWidth="1" opacity="0.4" />
              <line x1="25" y1="18" x2="33" y2="18" stroke="#faf6f0" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>
          <div style={{ textAlign: "center" as const, fontFamily: mono, fontSize: 9, color: inkFaint, letterSpacing: "0.12em" }}>
            — fin —
          </div>
        </div>
      </div>

      <PageNumber n={20} side="right" />
    </Page>
  );
}

export function Spread9({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
