import { motion } from "motion/react";
import {
  Bell,
  DollarSign,
  Shield,
  HelpCircle,
  ChevronRight,
  Cpu,
  GitCompare,
  Star,
} from "lucide-react";

const C = {
  charcoal: "#1C1F26",
  terracotta: "#C4704F",
  parchment: "#F0EDE6",
};

const settings = [
  { icon: Bell, label: "Notifications", sub: "Price alerts, new builds" },
  { icon: DollarSign, label: "Currency", sub: "USD · United States" },
  { icon: Shield, label: "Privacy", sub: "Manage your data" },
  { icon: HelpCircle, label: "Help & Support", sub: "FAQ, contact us" },
];

const stats = [
  { icon: Cpu, label: "Builds Saved", value: "3" },
  { icon: GitCompare, label: "Comparisons", value: "2" },
  { icon: Star, label: "Member Since", value: "2024" },
];

export function ProfileScreen() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundColor: C.parchment,
        minHeight: "100%",
        paddingBottom: "40px",
        position: "relative",
      }}
    >
      {/* Top ambient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "250px",
          background:
            "radial-gradient(ellipse 90% 120% at 50% 0%, rgba(196,112,79,0.1) 0%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      {/* Profile hero */}
      <div
        style={{
          padding: "40px 24px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: C.terracotta,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
            boxShadow: "0 8px 24px rgba(196,112,79,0.35)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.2) 0%, transparent 60%)",
            }}
          />
          <span
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: C.parchment,
              letterSpacing: "-0.01em",
            }}
          >
            AC
          </span>
        </div>

        <h1
          style={{
            fontSize: "22px",
            fontWeight: 600,
            color: C.charcoal,
            margin: 0,
            letterSpacing: "0.01em",
          }}
        >
          Alex Chen
        </h1>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            backgroundColor: "rgba(196,112,79,0.12)",
            borderRadius: "99px",
            padding: "5px 12px",
            marginTop: "8px",
          }}
        >
          <Star size={11} color={C.terracotta} strokeWidth={2} fill={C.terracotta} />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: C.terracotta,
            }}
          >
            PC Enthusiast
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ padding: "0 24px 32px" }}>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileTap={{ scale: 0.97 }}
              style={{
                flex: 1,
                borderRadius: "18px",
                border: "1px solid rgba(28,31,38,0.09)",
                backgroundColor: "rgba(255,255,255,0.55)",
                padding: "14px 10px",
                textAlign: "center",
                boxShadow: "0 3px 12px rgba(28,31,38,0.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "45%",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
                  borderRadius: "18px 18px 0 0",
                  pointerEvents: "none",
                }}
              />
              <stat.icon
                size={16}
                color={C.terracotta}
                strokeWidth={1.8}
                style={{ marginBottom: "6px" }}
              />
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: C.charcoal,
                  margin: 0,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: "10px",
                  color: "rgba(28,31,38,0.45)",
                  margin: "3px 0 0",
                  lineHeight: 1.3,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Settings list */}
      <div style={{ padding: "0 24px" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "rgba(28,31,38,0.4)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Settings
        </p>
        <div
          style={{
            borderRadius: "20px",
            border: "1px solid rgba(28,31,38,0.09)",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(28,31,38,0.05)",
          }}
        >
          {settings.map((item, idx) => (
            <motion.button
              key={item.label}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                width: "100%",
                padding: "16px 18px",
                backgroundColor:
                  idx % 2 === 0 ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.3)",
                borderBottom:
                  idx < settings.length - 1
                    ? "1px solid rgba(28,31,38,0.06)"
                    : "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "'DM Sans', sans-serif",
                transition: "background-color 0.15s ease",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(196,112,79,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <item.icon size={17} color={C.terracotta} strokeWidth={1.8} />
              </div>

              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: C.charcoal,
                    margin: 0,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(28,31,38,0.45)",
                    margin: "2px 0 0",
                  }}
                >
                  {item.sub}
                </p>
              </div>
              <ChevronRight size={16} color="rgba(28,31,38,0.25)" strokeWidth={2} />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Sign out */}
      <div style={{ padding: "20px 24px 0" }}>
        <motion.button
          whileTap={{ scale: 0.97 }}
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "16px",
            border: "1.5px solid rgba(196,112,79,0.25)",
            backgroundColor: "transparent",
            color: C.terracotta,
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            transition: "all 0.2s ease",
          }}
        >
          Sign Out
        </motion.button>
      </div>

      {/* Version */}
      <p
        style={{
          textAlign: "center",
          fontSize: "11px",
          color: "rgba(28,31,38,0.25)",
          marginTop: "20px",
        }}
      >
        Buildr v1.0.0 · Made with care
      </p>
    </div>
  );
}
