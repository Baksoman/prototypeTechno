import { motion } from "motion/react";

const C = {
  charcoal: "#1C1F26",
  terracotta: "#C4704F",
  parchment: "#F0EDE6",
};

const benchmarks = [
  {
    game: "Valorant",
    label: "Competitive FPS",
    result: "240+ FPS",
    percent: 96,
    rating: "Exceptional",
    ratingColor: "#4E8A63",
  },
  {
    game: "CS2",
    label: "Competitive FPS",
    result: "200+ FPS",
    percent: 88,
    rating: "Exceptional",
    ratingColor: "#4E8A63",
  },
  {
    game: "Cyberpunk 2077",
    label: "Ultra settings, 1080p",
    result: "~74 FPS",
    percent: 65,
    rating: "Very Good",
    ratingColor: "#5A8A6A",
  },
  {
    game: "Elden Ring",
    label: "Max settings, 1440p",
    result: "~110 FPS",
    percent: 78,
    rating: "Great",
    ratingColor: "#5A8A6A",
  },
  {
    game: "4K Video Export",
    label: "10 min clip, DaVinci",
    result: "~19 min",
    percent: 52,
    rating: "Good",
    ratingColor: "#8A7A4E",
  },
  {
    game: "Live Streaming",
    label: "1080p60 · x264",
    result: "Seamless",
    percent: 90,
    rating: "Excellent",
    ratingColor: "#4E8A63",
  },
  {
    game: "Photoshop CC",
    label: "Heavy compositing",
    result: "Very Fast",
    percent: 85,
    rating: "Great",
    ratingColor: "#5A8A6A",
  },
  {
    game: "Minecraft",
    label: "Vanilla · Java",
    result: "500+ FPS",
    percent: 100,
    rating: "Overkill",
    ratingColor: "#4E8A63",
  },
];

function PerfBar({ bench, index }: { bench: (typeof benchmarks)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35, ease: "easeOut" }}
      style={{ marginBottom: "20px" }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "8px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: C.charcoal,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {bench.game}
          </p>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(28,31,38,0.45)",
              margin: "2px 0 0",
            }}
          >
            {bench.label}
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: C.charcoal,
              margin: 0,
            }}
          >
            {bench.result}
          </p>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: bench.ratingColor,
              margin: "1px 0 0",
            }}
          >
            {bench.rating}
          </p>
        </div>
      </div>

      {/* Bar track */}
      <div
        style={{
          height: "8px",
          backgroundColor: "rgba(28,31,38,0.08)",
          borderRadius: "99px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Filled bar — painterly feel via slight gradient */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${bench.percent}%` }}
          transition={{
            delay: index * 0.06 + 0.2,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            height: "100%",
            borderRadius: "99px",
            background:
              bench.percent >= 85
                ? `linear-gradient(90deg, ${C.terracotta} 0%, rgba(196,112,79,0.75) 100%)`
                : bench.percent >= 70
                ? `linear-gradient(90deg, rgba(196,112,79,0.85) 0%, rgba(196,112,79,0.55) 100%)`
                : `linear-gradient(90deg, rgba(196,112,79,0.65) 0%, rgba(196,112,79,0.4) 100%)`,
            position: "relative",
          }}
        >
          {/* Brushed shimmer on bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%)",
              borderRadius: "99px 99px 0 0",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PerformanceScreen() {
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
          Estimate
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
          Performance
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(28,31,38,0.5)", marginTop: "6px", lineHeight: 1.5 }}>
          i5-14600K · RTX 4060 Ti · 32GB DDR5
        </p>

        {/* Score card */}
        <div
          style={{
            marginTop: "22px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(196,112,79,0.12) 0%, rgba(196,112,79,0.04) 100%)",
            border: "1.5px solid rgba(196,112,79,0.2)",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 4px 16px rgba(196,112,79,0.1)",
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
              background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
              borderRadius: "20px 20px 0 0",
              pointerEvents: "none",
            }}
          />
          <div>
            <p style={{ fontSize: "12px", color: "rgba(28,31,38,0.5)", margin: 0 }}>
              Overall Performance Score
            </p>
            <p
              style={{
                fontSize: "26px",
                fontWeight: 600,
                color: C.charcoal,
                margin: "4px 0 0",
                letterSpacing: "-0.01em",
              }}
            >
              84 / 100
            </p>
          </div>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: `3px solid ${C.terracotta}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(196,112,79,0.08)",
            }}
          >
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: C.terracotta,
              }}
            >
              A+
            </span>
          </div>
        </div>
      </div>

      {/* Benchmarks section */}
      <div style={{ padding: "28px 24px 0" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "rgba(28,31,38,0.4)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "22px",
          }}
        >
          Benchmarks & Estimates
        </p>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: "20px",
            border: "1px solid rgba(28,31,38,0.09)",
            padding: "20px",
            boxShadow: "0 4px 16px rgba(28,31,38,0.05)",
          }}
        >
          {benchmarks.map((bench, i) => (
            <PerfBar key={bench.game} bench={bench} index={i} />
          ))}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            fontSize: "11px",
            color: "rgba(28,31,38,0.35)",
            marginTop: "16px",
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          Estimates based on published benchmarks. Actual performance
          may vary by driver version and game settings.
        </p>
      </div>
    </div>
  );
}
