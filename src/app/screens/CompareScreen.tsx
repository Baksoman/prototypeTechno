import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, Trophy, DollarSign } from "lucide-react";

const C = {
  charcoal: "#1C1F26",
  terracotta: "#C4704F",
  parchment: "#F0EDE6",
};

const buildA = {
  name: "The Performer",
  tag: "Gaming",
  price: "$1,272",
  verdict: "Better for gaming",
  cpu: "i5-14600K",
  gpu: "RTX 4060 Ti",
  ram: "32GB DDR5",
  storage: "1TB NVMe",
  score: 84,
  fps: "240+ FPS",
  psuW: "750W",
};

const buildB = {
  name: "Budget Beast",
  tag: "Work & Study",
  price: "$847",
  verdict: "Better for budget",
  cpu: "Ryzen 5 7600",
  gpu: "RX 7600",
  ram: "16GB DDR5",
  storage: "512GB NVMe",
  score: 68,
  fps: "144+ FPS",
  psuW: "650W",
};

const rows = [
  { label: "Processor", keyA: "cpu", keyB: "cpu" },
  { label: "Graphics Card", keyA: "gpu", keyB: "gpu" },
  { label: "Memory", keyA: "ram", keyB: "ram" },
  { label: "Storage", keyA: "storage", keyB: "storage" },
  { label: "Est. Max FPS", keyA: "fps", keyB: "fps" },
  { label: "Performance Score", keyA: "score", keyB: "score" },
  { label: "Power Supply", keyA: "psuW", keyB: "psuW" },
  { label: "Total Cost", keyA: "price", keyB: "price" },
];

type BuildKey = keyof typeof buildA;

function getWinner(row: (typeof rows)[0]): "A" | "B" | "tie" {
  const valA = buildA[row.keyA as BuildKey];
  const valB = buildB[row.keyB as BuildKey];
  if (row.label === "Total Cost") return "B";
  if (row.label === "Performance Score") return Number(valA) > Number(valB) ? "A" : "B";
  if (row.label === "Memory") return "A";
  if (row.label === "Storage") return "A";
  if (row.label === "Est. Max FPS") return "A";
  return "tie";
}

export function CompareScreen() {
  const [activeRow, setActiveRow] = useState<string | null>(null);

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
      <div style={{ padding: "28px 24px 0", position: "relative" }}>
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
          Side by Side
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
          Compare Builds
        </h1>
        <p style={{ fontSize: "14px", color: "rgba(28,31,38,0.5)", marginTop: "6px" }}>
          Tap any row to see why it matters.
        </p>
      </div>

      {/* Build header cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1px 1fr",
          gap: "0",
          margin: "24px 24px 0",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(28,31,38,0.09)",
          boxShadow: "0 4px 16px rgba(28,31,38,0.06)",
          position: "relative",
        }}
      >
        {/* Sheen overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "45%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 1,
            borderRadius: "20px 20px 0 0",
          }}
        />

        {/* Build A */}
        <div
          style={{
            backgroundColor: "rgba(196,112,79,0.08)",
            padding: "18px 16px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "10px",
              fontWeight: 600,
              color: C.terracotta,
              backgroundColor: "rgba(196,112,79,0.15)",
              borderRadius: "99px",
              padding: "3px 9px",
              marginBottom: "8px",
              letterSpacing: "0.04em",
            }}
          >
            <Trophy size={9} strokeWidth={2.5} />
            {buildA.tag}
          </span>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: C.charcoal,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {buildA.name}
          </p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: C.terracotta,
              margin: "6px 0 0",
            }}
          >
            {buildA.price}
          </p>
        </div>

        {/* Divider */}
        <div style={{ backgroundColor: "rgba(28,31,38,0.1)" }} />

        {/* Build B */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.45)",
            padding: "18px 16px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "10px",
              fontWeight: 600,
              color: "rgba(28,31,38,0.5)",
              backgroundColor: "rgba(28,31,38,0.07)",
              borderRadius: "99px",
              padding: "3px 9px",
              marginBottom: "8px",
              letterSpacing: "0.04em",
            }}
          >
            <DollarSign size={9} strokeWidth={2.5} />
            {buildB.tag}
          </span>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: C.charcoal,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {buildB.name}
          </p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: C.charcoal,
              margin: "6px 0 0",
            }}
          >
            {buildB.price}
          </p>
        </div>
      </div>

      {/* Comparison rows */}
      <div style={{ padding: "16px 24px 0" }}>
        <div
          style={{
            borderRadius: "20px",
            border: "1px solid rgba(28,31,38,0.09)",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(28,31,38,0.05)",
          }}
        >
          {rows.map((row, idx) => {
            const winner = getWinner(row);
            const isActive = activeRow === row.label;
            const valA = buildA[row.keyA as BuildKey];
            const valB = buildB[row.keyB as BuildKey];

            return (
              <motion.div
                key={row.label}
                onClick={() => setActiveRow(isActive ? null : row.label)}
                whileTap={{ scale: 0.99 }}
                style={{
                  backgroundColor: isActive
                    ? "rgba(196,112,79,0.05)"
                    : idx % 2 === 0
                    ? "rgba(255,255,255,0.55)"
                    : "rgba(255,255,255,0.3)",
                  borderBottom:
                    idx < rows.length - 1
                      ? "1px solid rgba(28,31,38,0.06)"
                      : "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
              >
                {/* Row content */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    padding: "14px 16px",
                    gap: "8px",
                  }}
                >
                  {/* Value A */}
                  <div style={{ textAlign: "left" }}>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: winner === "A" ? 600 : 400,
                        color: winner === "A" ? C.terracotta : "rgba(28,31,38,0.65)",
                        margin: 0,
                      }}
                    >
                      {String(valA)}
                    </p>
                  </div>

                  {/* Label */}
                  <div style={{ textAlign: "center", minWidth: "80px" }}>
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "rgba(28,31,38,0.4)",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      {row.label}
                    </p>
                  </div>

                  {/* Value B */}
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: winner === "B" ? 600 : 400,
                        color: winner === "B" ? "#4E8A63" : "rgba(28,31,38,0.65)",
                        margin: 0,
                      }}
                    >
                      {String(valB)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Verdict */}
      <div style={{ padding: "20px 24px 0", display: "flex", gap: "12px" }}>
        <div
          style={{
            flex: 1,
            borderRadius: "16px",
            backgroundColor: "rgba(196,112,79,0.1)",
            border: "1.5px solid rgba(196,112,79,0.2)",
            padding: "14px 16px",
            textAlign: "center",
          }}
        >
          <Trophy size={16} color={C.terracotta} strokeWidth={2} style={{ marginBottom: "6px" }} />
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: C.terracotta,
              margin: 0,
            }}
          >
            Better for gaming
          </p>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(28,31,38,0.5)",
              margin: "3px 0 0",
            }}
          >
            The Performer
          </p>
        </div>
        <div
          style={{
            flex: 1,
            borderRadius: "16px",
            backgroundColor: "rgba(78,138,99,0.08)",
            border: "1.5px solid rgba(78,138,99,0.2)",
            padding: "14px 16px",
            textAlign: "center",
          }}
        >
          <DollarSign size={16} color="#4E8A63" strokeWidth={2} style={{ marginBottom: "6px" }} />
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#4E8A63",
              margin: 0,
            }}
          >
            Better for budget
          </p>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(28,31,38,0.5)",
              margin: "3px 0 0",
            }}
          >
            Budget Beast
          </p>
        </div>
      </div>
    </div>
  );
}
