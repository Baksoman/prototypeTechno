import { useNavigate, useLocation } from "react-router";
import { Home, Cpu, GitCompare, User } from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, path: "/home" },
  { label: "Build", icon: Cpu, path: "/build" },
  { label: "Compare", icon: GitCompare, path: "/compare" },
  { label: "Profile", icon: User, path: "/profile" },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        height: "64px",
        backgroundColor: "#F0EDE6",
        borderTop: "1px solid rgba(28, 31, 38, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontFamily: "'DM Sans', sans-serif",
        flexShrink: 0,
      }}
    >
      {navItems.map(({ label, icon: Icon, path }) => {
        const isActive = location.pathname === path;
        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "3px",
              padding: "8px 16px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: isActive ? "#C4704F" : "rgba(28,31,38,0.4)",
              transition: "color 0.2s ease",
            }}
          >
            <Icon
              size={22}
              strokeWidth={isActive ? 2.2 : 1.8}
              style={{ transition: "all 0.2s ease" }}
            />
            <span
              style={{
                fontSize: "10px",
                fontWeight: isActive ? 600 : 400,
                letterSpacing: "0.02em",
                transition: "all 0.2s ease",
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
