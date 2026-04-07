Design a clean, premium mobile app UI for Buildr — a PC & laptop build recommender app for beginners and enthusiasts. The app guides users to find the best PC components based on their budget, use case, and preferences.

Visual Style Direction
Semi-realistic digital painting aesthetic blended with 3D animation technique — often described as "3D that looks like 2D." Every UI element should feel like it has been hand-painted with subtle texture and depth, yet remains clean and navigable. Think Spider-Man: Into the Spider-Verse meets a premium tech product — painterly strokes, soft shading, tactile surfaces, but never messy or cluttered.
Specific style rules:

Surfaces have a very subtle hand-painted texture — not flat, not glossy, just slightly organic
Shadows are soft and painted, not CSS drop-shadows — they feel part of the surface, not floating above it
UI components (cards, buttons, icons) have gentle volumetric depth — slightly raised, like bas-relief illustration
Icons are hand-drawn outline style with slightly imperfect, organic stroke weight — consistent but not robotic
Illustrations and component visuals use this same 3D-painted language — no photographic renders, no clipart


Color Palette
Strictly 3 main colors. No bright or saturated hues — palette is muted, warm, and easy on the eyes.

Primary: Deep Charcoal #1C1F26 — headers, primary text, key UI elements. Rich dark tone that anchors the screen without being harsh pure black.
Accent: Muted Terracotta #C4704F — CTAs, active states, highlights, progress bars. Warm and distinctive without being aggressive.
Base: Warm Parchment #F0EDE6 — all backgrounds and card surfaces. Soft off-white with a barely-there warm undertone — never clinical, never bright, kind to the eyes in any lighting.

Tonal usage:

Use 8–15% opacity of Charcoal for subtle card borders and dividers
Use 10–20% opacity of Terracotta for inactive/disabled states and background accents
No pure white (#FFFFFF), no pure black (#000000), no grays outside of the defined palette


Typography

Single typeface: DM Sans or Fraunces (for a slightly editorial, premium feel)
3 sizes only: 26px headings, 16px body/labels, 12px captions and micro-copy
Weight: Regular (400) for body, Semibold (600) for headings and CTAs
Letter spacing: slightly loose (+0.02em) on headings for an airy, premium feel
No decorative or display fonts


Whitespace & Layout
Whitespace is intentional and generous — it signals quality and reduces cognitive load.

Mobile-first, 375px frame width
24px horizontal padding (wider than standard — creates breathing room)
Minimum 32px vertical gap between all sections — never stack elements tightly
Cards have 20px internal padding on all sides
Between the last content element and the bottom nav: always 40px clearance
The screen should never feel "full" — aim for 55–65% content density, the rest is air
Card border-radius: 20px — softer, more tactile feel
Bottom navigation bar: 4 items (Home, Build, Compare, Profile), tall touch targets (64px height), subtle top border only


Screens to Design

Onboarding / Use Case Quiz — Full-screen question cards, one question per screen. Large tap targets, soft painted progress bar at top. Questions: budget range, main use (gaming / work / editing / study), experience level. Background has very subtle painted texture, not flat.
Home Dashboard — Warm greeting at top, generous space before the "Your Recommended Build" hero card. Hero card uses a slightly raised, hand-painted surface feel. Quick-action buttons below with breathing room between each.
Build Result Screen — Each component (CPU, GPU, RAM, etc.) in its own tall card with generous padding. Component name, brand, price, and a soft compatibility badge. Sticky bottom bar: total price + "Buy All" CTA in Terracotta.
Compatibility Checker — Large, readable status indicators per component pair. Use plain language: "Works great together", "Might cause issues." Status colors stay within palette: Terracotta for warnings, Charcoal for confirmed, muted mid-tone for neutral.
Performance Estimator — Horizontal painted-style bar chart. Each bar feels brushed, not rendered. Labels: "Valorant — 120+ FPS", "4K Export — ~18 min." Airy spacing between rows.
Compare Screen — Two-column layout comparing two builds. Soft dividing line between columns (painted, not sharp). "Better for gaming" / "Better for budget" verdict in a subtle badge. Plenty of white space so comparison never feels overwhelming.


UX Rules

One clear primary action per screen — no decision paralysis
Technical terms always have a small "?" or plain-language subtitle — beginner-safe
Progressive disclosure: simple view first, tap to expand full specs
No modals during core build flow — keep user in context
Empty states: helpful message + one action button, never blank
Loading: skeleton screens with painterly shimmer, not spinners
Micro-interactions: soft press feedback, gentle screen transitions (ease-in-out, slide from right, 280ms)


Tone & Personality
Calm, knowledgeable, and trustworthy — like a senior friend who knows everything about PCs but never talks down to you. Warm without being casual, smart without being cold.
Copy example: "Here's your best build — we've checked compatibility, performance, and price so you don't have to."