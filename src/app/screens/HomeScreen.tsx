import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronRight, Cpu, GitCompare, Shield, BarChart2, Plus, Clock } from "lucide-react";

const C = {
  charcoal: "#1C1F26",
  terracotta: "#C4704F",
  parchment: "#F0EDE6",
};

function Card({
  children,
  style = {},
  onClick,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  return (
    <motion.div
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      style={{
        borderRadius: "20px",
        border: "1px solid rgba(28,31,38,0.1)",
        backgroundColor: "rgba(255,255,255,0.5)",
        padding: "20px",
        boxShadow:
          "0 4px 16px rgba(28,31,38,0.06), 0 1px 4px rgba(196,112,79,0.08)",
        position: "relative",
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "40%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
          borderRadius: "20px 20px 0 0",
          pointerEvents: "none",
        }}
      />
      {children}
    </motion.div>
  );
}

const quickActions = [
  {
    label: "New Build",
    sub: "Start fresh",
    icon: Plus,
    path: "/onboarding",
    accent: true,
  },
  {
    label: "Compare",
    sub: "Two builds",
    icon: GitCompare,
    path: "/compare",
    accent: false,
  },
  {
    label: "Compatibility",
    sub: "Check parts",
    icon: Shield,
    path: "/compatibility",
    accent: false,
  },
  {
    label: "Performance",
    sub: "Estimate FPS",
    icon: BarChart2,
    path: "/performance",
    accent: false,
  },
];

const recentBuilds = [
  {
    name: "The Performer",
    badge: "Gaming",
    price: "$1,272",
    date: "Today",
  },
  {
    name: "Budget Beast",
    badge: "Work & Study",
    price: "$847",
    date: "2 days ago",
  },
];

export function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundColor: C.parchment,
        minHeight: "100%",
        padding: "32px 24px 40px",
        position: "relative",
      }}
    >
      {/* Ambient top gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "200px",
          background:
            "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(196,112,79,0.07) 0%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      {/* Greeting */}
      <div style={{ marginBottom: "32px" }}>
        <p
          style={{
            fontSize: "12px",
            color: "rgba(28,31,38,0.45)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          Tuesday, April 7
        </p>
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 600,
            color: C.charcoal,
            letterSpacing: "0.02em",
            lineHeight: "1.25",
            margin: 0,
          }}
        >
          Good morning,{" "}
          <span style={{ color: C.terracotta }}>Alex.</span>
        </h1>
        <p style={{ fontSize: "14px", color: "rgba(28,31,38,0.5)", marginTop: "6px" }}>
          Ready to build your dream PC?
        </p>
      </div>

      {/* Hero Build Card */}
      <Card
        onClick={() => navigate("/build")}
        style={{
          background:
            "linear-gradient(135deg, rgba(196,112,79,0.12) 0%, rgba(196,112,79,0.04) 100%), rgba(255,255,255,0.6)",
          border: "1.5px solid rgba(196,112,79,0.2)",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            backgroundColor: "rgba(196,112,79,0.15)",
            borderRadius: "99px",
            padding: "4px 10px",
            marginBottom: "14px",
          }}
        >
          <Cpu size={11} color={C.terracotta} strokeWidth={2} />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: C.terracotta,
              letterSpacing: "0.04em",
            }}
          >
            Optimized for Gaming
          </span>
        </div>

        <h2
          style={{
            fontSize: "22px",
            fontWeight: 600,
            color: C.charcoal,
            margin: 0,
            letterSpacing: "0.01em",
          }}
        >
          The Performer
        </h2>
        <p
          style={{
            fontSize: "12px",
            color: "rgba(28,31,38,0.5)",
            marginTop: "4px",
            marginBottom: "0",
          }}
        >
          Intel i5-14600K · RTX 4060 Ti · 32GB DDR5
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(28,31,38,0.45)",
                margin: 0,
              }}
            >
              Total build cost
            </p>
            <p
              style={{
                fontSize: "26px",
                fontWeight: 600,
                color: C.charcoal,
                margin: "2px 0 0",
                letterSpacing: "-0.01em",
              }}
            >
              $1,272
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: C.terracotta,
              color: C.parchment,
              borderRadius: "14px",
              padding: "10px 16px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            View Build
            <ChevronRight size={15} strokeWidth={2.2} />
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "rgba(28,31,38,0.4)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Quick Actions
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          {quickActions.map((action) => (
            <Card
              key={action.label}
              onClick={() => navigate(action.path)}
              style={{
                padding: "16px",
                backgroundColor: action.accent
                  ? "rgba(196,112,79,0.1)"
                  : "rgba(255,255,255,0.5)",
                border: action.accent
                  ? "1.5px solid rgba(196,112,79,0.2)"
                  : "1px solid rgba(28,31,38,0.09)",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "12px",
                  backgroundColor: action.accent
                    ? C.terracotta
                    : "rgba(28,31,38,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <action.icon
                  size={18}
                  color={action.accent ? C.parchment : C.charcoal}
                  strokeWidth={1.8}
                />
              </div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: C.charcoal,
                  margin: 0,
                }}
              >
                {action.label}
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: "rgba(28,31,38,0.45)",
                  margin: "2px 0 0",
                }}
              >
                {action.sub}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Builds */}
      <div>
        <h3
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "rgba(28,31,38,0.4)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Recent Builds
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {recentBuilds.map((build) => (
            <Card
              key={build.name}
              onClick={() => navigate("/build")}
              style={{ padding: "16px 20px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: C.charcoal,
                        margin: 0,
                      }}
                    >
                      {build.name}
                    </p>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: C.terracotta,
                        backgroundColor: "rgba(196,112,79,0.12)",
                        borderRadius: "99px",
                        padding: "2px 8px",
                      }}
                    >
                      {build.badge}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      marginTop: "4px",
                    }}
                  >
                    <Clock size={11} color="rgba(28,31,38,0.4)" />
                    <p
                      style={{
                        fontSize: "12px",
                        color: "rgba(28,31,38,0.4)",
                        margin: 0,
                      }}
                    >
                      {build.date}
                    </p>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: C.charcoal,
                      margin: 0,
                    }}
                  >
                    {build.price}
                  </p>
                  <ChevronRight size={16} color="rgba(28,31,38,0.25)" strokeWidth={2} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
