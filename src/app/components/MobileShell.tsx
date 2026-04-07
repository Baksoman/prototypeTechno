import { ReactNode } from "react";

interface MobileShellProps {
  children: ReactNode;
}

export function MobileShell({ children }: MobileShellProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1C1F26",
        padding: "24px",
      }}
    >
      {/* Desktop ambient glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          opacity: 0.2,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #C4704F, transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Phone frame */}
      <div
        style={{
          position: "relative",
          width: "375px",
          height: "812px",
          borderRadius: "44px",
          backgroundColor: "#F0EDE6",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(196,112,79,0.15)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* Status bar row */}
        <div
          style={{
            height: "44px",
            position: "relative",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          {/* Notch */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "126px",
              height: "34px",
              backgroundColor: "#1C1F26",
              borderRadius: "0 0 18px 18px",
              zIndex: 10,
            }}
          />
          {/* Time */}
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: "#1C1F26",
              zIndex: 5,
            }}
          >
            9:41
          </span>
        </div>

        {/* Scrollable content area */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
