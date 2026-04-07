import { Outlet } from "react-router";
import { MobileShell } from "../components/MobileShell";
import { BottomNav } from "../components/BottomNav";

export function MainLayout() {
  return (
    <MobileShell>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F0EDE6",
        }}
      >
        {/* Scrollable screen content */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Outlet />
        </div>

        {/* Bottom navigation — always visible */}
        <BottomNav />
      </div>
    </MobileShell>
  );
}
