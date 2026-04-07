import { createBrowserRouter, Navigate } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { OnboardingScreen } from "./screens/OnboardingScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { BuildScreen } from "./screens/BuildScreen";
import { CompatibilityScreen } from "./screens/CompatibilityScreen";
import { PerformanceScreen } from "./screens/PerformanceScreen";
import { CompareScreen } from "./screens/CompareScreen";
import { ProfileScreen } from "./screens/ProfileScreen";

export const router = createBrowserRouter([
  {
    path: "/onboarding",
    Component: OnboardingScreen,
  },
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, element: <Navigate to="/onboarding" replace /> },
      { path: "home", Component: HomeScreen },
      { path: "build", Component: BuildScreen },
      { path: "compare", Component: CompareScreen },
      { path: "compatibility", Component: CompatibilityScreen },
      { path: "performance", Component: PerformanceScreen },
      { path: "profile", Component: ProfileScreen },
    ],
  },
]);
