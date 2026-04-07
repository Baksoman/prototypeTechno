import { motion } from "motion/react";
import { CheckCircle, AlertTriangle, Zap } from "lucide-react";

const C = {
  charcoal: "#1C1F26",
  terracotta: "#C4704F",
  parchment: "#F0EDE6",
  green: "#4E8A63",
};

type Status = "great" | "warning" | "perfect";

const pairs = [
  {
    a: "Intel i5-14600K",
    b: "ASUS PRIME Z790",
    status: "perfect" as Status,
    label: "Perfect match",
    note: "LGA1700 socket on both — plug and play.",
  },
  {
    a: "RTX 4060 Ti",
    b: "Corsair RM750x",
    status: "great" as Status,
    label: "Works great together",
    note: "GPU draws ~200W. Your PSU has comfortable 550W headroom.",
  },
  {
    a: "Corsair Vengeance DDR5",
    b: "ASUS PRIME Z790",
    status: "perfect" as Status,
    label: "Perfect match",
    note: "DDR5-5600 fully supported. XMP ready to enable.",
  },
  {
    a: "NZXT H510 Flow",
    b: "ASUS PRIME Z790 (ATX)",
    status: "great" as Status,
    label: "Works great together",
    note: "Mid-tower supports ATX form factor. Plenty of clearance.",
  },
  {
    a: "Noctua NH-D15",
    b: "NZXT H510 Case",
    status: "warning" as Status,
    label: "Might cause issues",
    note: "The NH-D15 is 165mm tall. H510 clears up to 165mm — tight, but fits.",
  },
  {
    a: "Samsung 990 Pro",
    b: "ASUS PRIME Z790",
    status: "great" as Status,
    label: "Works great together",
    note: "PCIe 4.0 M.2 slot available. Full speed guaranteed.",
  },
];

const statusConfig = {
  perfect: {
    icon: Zap,
    color: "#5A8A6A",
    bg: "rgba(90,138,106,0.1)",
    border: "rgba(90,138,106,0.2)",
    iconBg: "rgba(90,138,106,0.12)",
  },
  great: {
    icon: CheckCircle,
    color: "#5A8A6A",
    bg: "rgba(90,138,106,0.06)",
    border: "rgba(28,31,38,0.09)",
    iconBg: "rgba(90,138,106,0.1)",
  },
  warning: {
    icon: AlertTriangle,
    color: C.terracotta,
    bg: "rgba(196,112,79,0.07)",
    border: "rgba(196,112,79,0.2)",
    iconBg: "rgba(196,112,79,0.1)",
  },
};

function CompatCard({ pair, index }: { pair: (typeof pairs)[0]; index: number }) {
  const cfg = statusConfig[pair.status];
  const Icon = cfg.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.3, ease: "easeOut" }}
      style={{
        borderRadius: "20px",
        border: `1px solid ${cfg.border}`,
        backgroundColor: cfg.bg,
        padding: "18px 20px",
        boxShadow: "0 3px 12px rgba(28,31,38,0.05)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Sheen */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "45%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
          borderRadius: "20px 20px 0 0",
          pointerEvents: "none",
        }}
      />

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "12px",
            backgroundColor: cfg.iconBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={18} color={cfg.color} strokeWidth={1.8} />
        </div>

        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: cfg.color,
              margin: "0 0 6px",
            }}
          >
            {pair.label}
          </p>

          {/* Component chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "10px" }}>
            {[pair.a, pair.b].map((part, i) => (
              <span
                key={i}
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: C.charcoal,
                  backgroundColor: "rgba(28,31,38,0.07)",
                  borderRadius: "99px",
                  padding: "3px 10px",
                  letterSpacing: "0.01em",
                }}
              >
                {part}
              </span>
            ))}
          </div>

          <p
            style={{
              fontSize: "12px",
              color: "rgba(28,31,38,0.55)",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {pair.note}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function CompatibilityScreen() {
  const warningCount = pairs.filter((p) => p.status === "warning").length;
  const clearCount = pairs.filter((p) => p.status !== "warning").length;

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
      {/* Header */}
      <div
        style={{
          padding: "28px 24px 0",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "160px",
            background:
              "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(196,112,79,0.07) 0%, transparent 80%)",
            pointerEvents: "none",
          }}
        />

        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "rgba(28,31,38,0.4)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: "0 0 6px",
          }}
        >
          Analysis
        </p>
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 600,
            color: C.charcoal,
            letterSpacing: "0.02em",
            margin: 0,
          }}
        >
          Compatibility Check
        </h1>
        <p style={{ fontSize: "14px", color: "rgba(28,31,38,0.5)", marginTop: "6px" }}>
          The Performer · 6 part pairs checked
        </p>

        {/* Summary pills */}
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(90,138,106,0.1)",
              border: "1px solid rgba(90,138,106,0.2)",
              borderRadius: "99px",
              padding: "7px 14px",
            }}
          >
            <CheckCircle size={13} color="#5A8A6A" strokeWidth={2.2} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#5A8A6A" }}>
              {clearCount} Clear
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(196,112,79,0.08)",
              border: "1px solid rgba(196,112,79,0.2)",
              borderRadius: "99px",
              padding: "7px 14px",
            }}
          >
            <AlertTriangle size={13} color={C.terracotta} strokeWidth={2.2} />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: C.terracotta,
              }}
            >
              {warningCount} Warning
            </span>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div
        style={{
          padding: "28px 24px 0",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {pairs.map((pair, i) => (
          <CompatCard key={i} pair={pair} index={i} />
        ))}
      </div>

      {/* Overall verdict */}
      <div style={{ padding: "24px 24px 0" }}>
        <div
          style={{
            borderRadius: "20px",
            backgroundColor: "rgba(90,138,106,0.08)",
            border: "1px solid rgba(90,138,106,0.18)",
            padding: "18px 20px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#4E7A5F",
              margin: "0 0 6px",
            }}
          >
            Overall: Good to go
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(28,31,38,0.55)",
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            One tight fit to be aware of (cooler clearance), but your build should
            come together without issues. Double-check your case spec sheet before ordering.
          </p>
        </div>
      </div>
    </div>
  );
}
