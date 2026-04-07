import { useState } from "react";
import { motion } from "motion/react";
import {
  Cpu,
  Monitor,
  MemoryStick,
  HardDrive,
  CircuitBoard,
  Zap,
  Box,
  Wind,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ShoppingCart,
} from "lucide-react";

const C = {
  charcoal: "#1C1F26",
  terracotta: "#C4704F",
  parchment: "#F0EDE6",
};

const components = [
  {
    id: "cpu",
    category: "Processor",
    name: "Intel Core i5-14600K",
    brand: "Intel",
    price: 199,
    icon: Cpu,
    detail: "14 cores · 3.5 GHz base · LGA1700",
    badge: "Great for gaming & productivity",
    compatible: true,
  },
  {
    id: "gpu",
    category: "Graphics Card",
    name: "NVIDIA RTX 4060 Ti",
    brand: "NVIDIA",
    price: 399,
    icon: Monitor,
    detail: "8GB GDDR6 · DLSS 3.0 · Ray Tracing",
    badge: "Excellent 1080p & 1440p performance",
    compatible: true,
  },
  {
    id: "ram",
    category: "Memory",
    name: "Corsair Vengeance 32GB",
    brand: "Corsair",
    price: 89,
    icon: MemoryStick,
    detail: "DDR5 · 5600 MHz · Dual Channel",
    badge: "Compatible with your motherboard",
    compatible: true,
  },
  {
    id: "storage",
    category: "Storage",
    name: "Samsung 990 Pro 1TB",
    brand: "Samsung",
    price: 109,
    icon: HardDrive,
    detail: "NVMe SSD · 7,450 MB/s read",
    badge: "Top-tier read & write speeds",
    compatible: true,
  },
  {
    id: "mobo",
    category: "Motherboard",
    name: "ASUS PRIME Z790-P",
    brand: "ASUS",
    price: 189,
    icon: CircuitBoard,
    detail: "LGA1700 · ATX · DDR5 support",
    badge: "Full compatibility confirmed",
    compatible: true,
  },
  {
    id: "psu",
    category: "Power Supply",
    name: "Corsair RM750x",
    brand: "Corsair",
    price: 109,
    icon: Zap,
    detail: "750W · 80+ Gold · Fully Modular",
    badge: "80W headroom for your build",
    compatible: true,
  },
  {
    id: "case",
    category: "Case",
    name: "NZXT H510 Flow",
    brand: "NZXT",
    price: 89,
    icon: Box,
    detail: "Mid-Tower · ATX · Tempered Glass",
    badge: "Your motherboard fits perfectly",
    compatible: true,
  },
  {
    id: "cooling",
    category: "CPU Cooler",
    name: "Noctua NH-D15",
    brand: "Noctua",
    price: 99,
    icon: Wind,
    detail: "Air Cooler · Dual Fan · 165mm height",
    badge: "Excellent for your CPU's TDP",
    compatible: true,
  },
];

const total = components.reduce((sum, c) => sum + c.price, 0);

function ComponentCard({ comp }: { comp: (typeof components)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = comp.icon;

  return (
    <motion.div
      layout
      style={{
        borderRadius: "20px",
        border: "1px solid rgba(28,31,38,0.09)",
        backgroundColor: "rgba(255,255,255,0.55)",
        padding: "18px 20px",
        boxShadow:
          "0 4px 16px rgba(28,31,38,0.05), 0 1px 3px rgba(196,112,79,0.07)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Card sheen */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "45%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
          borderRadius: "20px 20px 0 0",
          pointerEvents: "none",
        }}
      />

      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
        {/* Icon badge */}
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "14px",
            backgroundColor: "rgba(196,112,79,0.1)",
            border: "1px solid rgba(196,112,79,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={20} color={C.terracotta} strokeWidth={1.6} />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "rgba(28,31,38,0.4)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              margin: "0 0 3px",
            }}
          >
            {comp.category}
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: C.charcoal,
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {comp.name}
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(28,31,38,0.45)",
              margin: "2px 0 0",
            }}
          >
            {comp.brand}
          </p>
        </div>

        {/* Price */}
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: C.charcoal,
              margin: 0,
            }}
          >
            ${comp.price}
          </p>
        </div>
      </div>

      {/* Expand toggle */}
      <motion.button
        onClick={() => setExpanded((e) => !e)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginTop: "14px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(28,31,38,0.45)",
          fontSize: "12px",
          padding: 0,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {expanded ? (
          <ChevronUp size={14} strokeWidth={2} />
        ) : (
          <ChevronDown size={14} strokeWidth={2} />
        )}
        {expanded ? "Hide specs" : "View specs"}
      </motion.button>

      {/* Expanded details */}
      <AnimatedExpand expanded={expanded}>
        <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid rgba(28,31,38,0.08)" }}>
          <p style={{ fontSize: "13px", color: "rgba(28,31,38,0.65)", margin: "0 0 10px" }}>
            {comp.detail}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <CheckCircle size={13} color="#5A8A6A" strokeWidth={2} />
            <span style={{ fontSize: "12px", color: "#5A8A6A", fontWeight: 600 }}>
              {comp.badge}
            </span>
          </div>
        </div>
      </AnimatedExpand>
    </motion.div>
  );
}

function AnimatedExpand({
  expanded,
  children,
}: {
  expanded: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}

export function BuildScreen() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundColor: C.parchment,
        minHeight: "100%",
        paddingBottom: "100px",
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
            height: "140px",
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
          Your Build
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
          The Performer
        </h1>
        <p style={{ fontSize: "14px", color: "rgba(28,31,38,0.5)", marginTop: "6px" }}>
          We've checked compatibility, performance, and price.
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "20px",
          }}
        >
          {[
            { label: "Components", value: "8" },
            { label: "All Compatible", value: "✓" },
            { label: "Estimated Power", value: "~420W" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                flex: 1,
                backgroundColor: "rgba(255,255,255,0.55)",
                borderRadius: "14px",
                border: "1px solid rgba(28,31,38,0.08)",
                padding: "12px 10px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: stat.value === "✓" ? "#5A8A6A" : C.charcoal,
                  margin: 0,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: "10px",
                  color: "rgba(28,31,38,0.4)",
                  margin: "2px 0 0",
                  letterSpacing: "0.02em",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Component list */}
      <div
        style={{
          padding: "28px 24px 0",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {components.map((comp) => (
          <ComponentCard key={comp.id} comp={comp} />
        ))}
      </div>

      {/* Sticky bottom bar */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "14px 24px",
          backgroundColor: "rgba(240,237,230,0.96)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(28,31,38,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          zIndex: 20,
          marginTop: "24px",
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
            Total cost
          </p>
          <p
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: C.charcoal,
              margin: "2px 0 0",
              letterSpacing: "-0.01em",
            }}
          >
            ${total.toLocaleString()}
          </p>
        </div>
        <motion.button
          whileTap={{ scale: 0.97 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: C.terracotta,
            color: C.parchment,
            borderRadius: "16px",
            padding: "14px 20px",
            border: "none",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: 600,
            boxShadow: "0 6px 20px rgba(196,112,79,0.35)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <ShoppingCart size={16} strokeWidth={2} />
          Buy All Parts
        </motion.button>
      </div>
    </div>
  );
}