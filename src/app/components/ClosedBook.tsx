import { useState } from "react";
import { motion } from "motion/react";

interface Props {
  onOpen: () => void;
}

export function ClosedBook({ onOpen }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(onOpen, 900);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div style={{ perspective: "1800px", perspectiveOrigin: "50% 42%" }}>
        <motion.div
          className="relative cursor-pointer select-none"
          style={{
            width: 260,
            height: 360,
            transformStyle: "preserve-3d",
            filter: "drop-shadow(0 30px 24px rgba(28,16,10,0.22))",
          }}
          animate={{
            rotateX: isOpening ? 0 : 8,
            rotateY: isOpening ? 5 : -26,
            rotateZ: isOpening ? 0 : -2.5,
            scale: isOpening ? 1.3 : isHovered ? 1.06 : 1,
            y: isHovered && !isOpening ? -14 : 0,
            z: isHovered && !isOpening ? 24 : 0,
          }}
          transition={
            isOpening
              ? { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
              : { type: "spring", stiffness: 150, damping: 18 }
          }
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleClick}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: "translateZ(-18px) translateX(12px)",
              background: "linear-gradient(160deg, #1c263d 0%, #111b2d 45%, #0d1627 100%)",
              borderRadius: "2px 8px 8px 2px",
              boxShadow: "-10px 18px 26px rgba(8,10,15,0.35)",
              opacity: 0.92,
            }}
          />

          <div
            className="absolute inset-y-3 left-[-10px]"
            style={{
              width: 16,
              transform: "translateZ(-8px) rotateY(-90deg)",
              background: "linear-gradient(90deg, #141d31 0%, #1a2437 100%)",
              borderRadius: "4px 0 0 4px",
              boxShadow: "inset 0 0 12px rgba(255,255,255,0.06)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(160deg, #243558 0%, #1a2640 50%, #141d34 100%)",
              borderRadius: "2px 8px 8px 2px",
              boxShadow: isHovered
                ? "18px 28px 66px rgba(0,0,0,0.7), 8px 15px 26px rgba(0,0,0,0.45), inset 0 0 18px rgba(255,255,255,0.08)"
                : "12px 22px 46px rgba(0,0,0,0.58), 4px 10px 18px rgba(0,0,0,0.38), inset 0 0 18px rgba(255,255,255,0.04)",
              transition: "box-shadow 0.3s ease",
              overflow: "hidden",
              transform: "translateZ(16px)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent 18%, transparent 82%, rgba(0,0,0,0.18))",
              }}
            />

            <div
              className="absolute"
              style={{
                inset: 12,
                border: "1.5px solid rgba(201,134,58,0.55)",
                borderRadius: 2,
              }}
            />
            <div
              className="absolute"
              style={{
                inset: 18,
                border: "1px solid rgba(201,134,58,0.25)",
                borderRadius: 1,
              }}
            />

            {[
              { top: 14, left: 14 },
              { top: 14, right: 14 },
              { bottom: 14, left: 14 },
              { bottom: 14, right: 14 },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  ...pos,
                  width: 12,
                  height: 12,
                  borderTop: i < 2 ? "2px solid rgba(201,134,58,0.6)" : "none",
                  borderBottom: i >= 2 ? "2px solid rgba(201,134,58,0.6)" : "none",
                  borderLeft: i % 2 === 0 ? "2px solid rgba(201,134,58,0.6)" : "none",
                  borderRight: i % 2 === 1 ? "2px solid rgba(201,134,58,0.6)" : "none",
                }}
              />
            ))}

            <div
              className="absolute inset-0 flex items-center justify-center opacity-5"
              style={{ fontSize: 180, color: "#c9863a", fontFamily: "Playfair Display, serif", fontWeight: 700 }}
            >
              V
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8">
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: "0.35em",
                  color: "rgba(201,134,58,0.55)",
                  fontFamily: "Lato, sans-serif",
                  textTransform: "uppercase",
                }}
              >
                Portfolio
              </div>

              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "linear-gradient(90deg, transparent, rgba(201,134,58,0.5), transparent)",
                }}
              />

              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: 42,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "#d4a655",
                  textAlign: "center",
                  lineHeight: 1,
                  textShadow: "0 0 40px rgba(201,134,58,0.3)",
                }}
              >
                VAIBHAV
              </div>

              <div
                style={{
                  width: 60,
                  height: 1,
                  background: "linear-gradient(90deg, transparent, rgba(201,134,58,0.45), transparent)",
                }}
              />

              <div
                style={{
                  fontSize: 9,
                  letterSpacing: "0.18em",
                  color: "rgba(201,134,58,0.6)",
                  fontFamily: "Lato, sans-serif",
                  textTransform: "uppercase",
                  textAlign: "center",
                  lineHeight: 1.8,
                }}
              >
                Developer · Builder
                <br />
                CS Student
              </div>

              <div style={{ marginTop: 8 }}>
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    color: "rgba(201,134,58,0.35)",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  2024
                </div>
              </div>

              <motion.div
                style={{
                  marginTop: 16,
                  padding: "5px 14px",
                  border: "1px solid rgba(201,134,58,0.3)",
                  borderRadius: 2,
                  fontSize: 9,
                  letterSpacing: "0.15em",
                  color: "rgba(201,134,58,0.7)",
                  fontFamily: "Lato, sans-serif",
                  textTransform: "uppercase",
                  background: "rgba(201,134,58,0.06)",
                  boxShadow: "inset 0 0 10px rgba(201,134,58,0.06)",
                }}
                animate={isOpening ? {} : { opacity: [0.55, 1, 0.55] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              >
                {isOpening ? "Opening…" : "Open"}
              </motion.div>
            </div>
          </div>

          <div
            className="absolute"
            style={{
              left: 0,
              top: 0,
              width: 28,
              height: "100%",
              transformOrigin: "left center",
              transform: "rotateY(-90deg) translateZ(2px)",
              background: "linear-gradient(90deg, #0d1628 0%, #1a2338 100%)",
              borderRadius: "4px 0 0 4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "inset -8px 0 16px rgba(0,0,0,0.22)",
            }}
          >
            <div
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                fontFamily: "Lato, sans-serif",
                fontSize: 8,
                letterSpacing: "0.25em",
                color: "rgba(201,134,58,0.6)",
                textTransform: "uppercase",
              }}
            >
              VAIBHAV · Portfolio
            </div>
          </div>

          <div
            className="absolute"
            style={{
              right: 0,
              top: 4,
              bottom: 4,
              width: 22,
              transformOrigin: "right center",
              transform: "rotateY(90deg) translateZ(4px)",
              borderRadius: "0 2px 2px 0",
              overflow: "hidden",
            }}
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: i * 1.1,
                  top: 0,
                  bottom: 0,
                  width: "100%",
                  background:
                    i % 3 === 0
                      ? "#f5f0e8"
                      : i % 3 === 1
                      ? "#faf6f0"
                      : "#ede8e0",
                  borderLeft: "0.5px solid rgba(0,0,0,0.06)",
                  boxShadow: "inset 0 0 8px rgba(0,0,0,0.03)",
                }}
              />
            ))}
          </div>

          <div
            className="absolute"
            style={{
              bottom: 0,
              left: 6,
              right: 2,
              height: 18,
              transformOrigin: "bottom center",
              transform: "rotateX(-90deg)",
              background: "linear-gradient(180deg, #c8bfb0, #b8afa0)",
              boxShadow: "inset 0 4px 8px rgba(0,0,0,0.12)",
            }}
          />

          <div
            className="absolute"
            style={{
              top: 0,
              left: 6,
              right: 2,
              height: 18,
              transformOrigin: "top center",
              transform: "rotateX(90deg)",
              background: "linear-gradient(0deg, #d0c8b8, #c0b8a8)",
              boxShadow: "inset 0 -4px 8px rgba(0,0,0,0.08)",
            }}
          />

          {isHovered && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 30%, rgba(201,134,58,0.08) 0%, transparent 68%)",
                borderRadius: "2px 6px 6px 2px",
              }}
            />
          )}
        </motion.div>
      </div>

      <motion.p
        style={{
          fontFamily: "Caveat, cursive",
          fontSize: 15,
          color: "rgba(44, 24, 16, 0.5)",
          letterSpacing: "0.02em",
        }}
        animate={{ opacity: isOpening ? 0 : [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        ← click to open the portfolio →
      </motion.p>
    </div>
  );
}
