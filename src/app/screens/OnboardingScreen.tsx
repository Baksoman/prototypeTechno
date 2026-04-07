import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { MobileShell } from "../components/MobileShell";

const C = {
  charcoal: "#1C1F26",
  terracotta: "#C4704F",
  parchment: "#F0EDE6",
};

const steps = [
  {
    id: "budget",
    question: "What's your budget?",
    subtitle: "We'll find the best parts for your price range.",
    options: [
      { label: "Under $500", sub: "Basic builds, light tasks" },
      { label: "$500 – $1,000", sub: "Solid performance for most needs" },
      { label: "$1,000 – $2,000", sub: "High performance, future-proof" },
      { label: "$2,000+", sub: "No compromises, all the power" },
    ],
  },
  {
    id: "useCase",
    question: "What will you use it for?",
    subtitle: "Your main use case shapes everything.",
    options: [
      { label: "Gaming", sub: "High FPS, smooth gameplay" },
      { label: "Work & Study", sub: "Productivity, video calls, docs" },
      { label: "Video Editing", sub: "4K exports, color grading" },
      { label: "Mixed Use", sub: "A bit of everything" },
    ],
  },
  {
    id: "experience",
    question: "How much do you know about PCs?",
    subtitle: "We adjust how we explain things based on this.",
    options: [
      { label: "Complete Beginner", sub: "Never built a PC before" },
      { label: "Some Knowledge", sub: "I know the basics" },
      { label: "Enthusiast", sub: "I've built PCs before" },
    ],
  },
];

export function OnboardingScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState(1);

  const current = steps[step];
  const selectedAnswer = answers[current.id];

  function handleSelect(label: string) {
    setAnswers((prev) => ({ ...prev, [current.id]: label }));
  }

  function handleContinue() {
    if (!selectedAnswer) return;
    if (step < steps.length - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    } else {
      navigate("/home");
    }
  }

  function handleBack() {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  }

  return (
    <MobileShell>
      <div
        style={{
          height: "100%",
          backgroundColor: C.parchment,
          fontFamily: "'DM Sans', sans-serif",
          display: "flex",
          flexDirection: "column",
          paddingTop: "12px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(196,112,79,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Top bar */}
        <div style={{ padding: "0 24px 0", display: "flex", alignItems: "center", gap: "12px" }}>
          {step > 0 && (
            <button
              onClick={handleBack}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: C.charcoal,
                display: "flex",
                alignItems: "center",
                padding: "4px",
                marginLeft: "-4px",
              }}
            >
              <ArrowLeft size={20} strokeWidth={1.8} />
            </button>
          )}
          <div style={{ flex: 1 }}>
            {/* Logo wordmark */}
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: C.charcoal,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Buildr
            </div>
          </div>
          <span style={{ fontSize: "12px", color: "rgba(28,31,38,0.5)" }}>
            {step + 1} of {steps.length}
          </span>
        </div>

        {/* Progress bar */}
        <div style={{ padding: "16px 24px 0" }}>
          <div
            style={{
              height: "4px",
              backgroundColor: "rgba(196,112,79,0.18)",
              borderRadius: "99px",
              overflow: "hidden",
            }}
          >
            <motion.div
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              style={{
                height: "100%",
                backgroundColor: C.terracotta,
                borderRadius: "99px",
              }}
            />
          </div>
        </div>

        {/* Question content */}
        <div style={{ flex: 1, padding: "40px 24px 0", overflow: "hidden" }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              style={{ height: "100%" }}
            >
              {/* Question */}
              <h1
                style={{
                  fontSize: "26px",
                  fontWeight: 600,
                  color: C.charcoal,
                  letterSpacing: "0.02em",
                  lineHeight: "1.3",
                  margin: 0,
                }}
              >
                {current.question}
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(28,31,38,0.55)",
                  marginTop: "8px",
                  marginBottom: "36px",
                }}
              >
                {current.subtitle}
              </p>

              {/* Options */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {current.options.map((opt) => {
                  const isSelected = selectedAnswer === opt.label;
                  return (
                    <motion.button
                      key={opt.label}
                      onClick={() => handleSelect(opt.label)}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "18px 20px",
                        borderRadius: "20px",
                        border: `1.5px solid ${isSelected ? C.terracotta : "rgba(28,31,38,0.1)"}`,
                        backgroundColor: isSelected
                          ? "rgba(196,112,79,0.1)"
                          : "rgba(255,255,255,0.5)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: isSelected
                          ? "0 4px 16px rgba(196,112,79,0.15)"
                          : "0 2px 8px rgba(28,31,38,0.05)",
                        width: "100%",
                        textAlign: "left",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Subtle sheen */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "50%",
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",
                          borderRadius: "20px 20px 0 0",
                          pointerEvents: "none",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: isSelected ? C.terracotta : C.charcoal,
                          lineHeight: "1.3",
                        }}
                      >
                        {opt.label}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: isSelected
                            ? "rgba(196,112,79,0.8)"
                            : "rgba(28,31,38,0.45)",
                          marginTop: "3px",
                        }}
                      >
                        {opt.sub}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Continue button */}
        <div style={{ padding: "24px 24px 40px" }}>
          <motion.button
            onClick={handleContinue}
            whileTap={{ scale: 0.97 }}
            style={{
              width: "100%",
              padding: "18px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: selectedAnswer ? C.terracotta : "rgba(196,112,79,0.25)",
              color: selectedAnswer ? C.parchment : "rgba(196,112,79,0.5)",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              cursor: selectedAnswer ? "pointer" : "not-allowed",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow: selectedAnswer
                ? "0 6px 20px rgba(196,112,79,0.3)"
                : "none",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {step < steps.length - 1 ? "Continue" : "Find My Build"}
            <ChevronRight size={18} strokeWidth={2.2} />
          </motion.button>
        </div>
      </div>
    </MobileShell>
  );
}