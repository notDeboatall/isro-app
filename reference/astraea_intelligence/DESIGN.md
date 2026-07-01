---
name: Astraea Intelligence
colors:
  surface: '#0c1322'
  surface-dim: '#0c1322'
  surface-bright: '#323949'
  surface-container-lowest: '#070e1d'
  surface-container-low: '#141b2b'
  surface-container: '#191f2f'
  surface-container-high: '#232a3a'
  surface-container-highest: '#2e3545'
  on-surface: '#dce2f7'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dce2f7'
  inverse-on-surface: '#293040'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  secondary-container: '#00cbe6'
  on-secondary-container: '#00515d'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#996100'
  on-tertiary-container: '#ffeedd'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#a2eeff'
  secondary-fixed-dim: '#2fd9f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0c1322'
  on-background: '#dce2f7'
  surface-variant: '#2e3545'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  data-point:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  gutter: 16px
  margin-edge: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is engineered for high-stakes climate intelligence, blending the authoritative precision of aerospace interfaces with a modern, glass-morphic aesthetic. It targets government stakeholders and scientific agencies, demanding a UI that feels predictive, reliable, and technologically advanced.

The visual style is **Modern Enterprise Glassmorphism**. It utilizes deep, layered backgrounds to simulate infinite data depth, paired with hyper-crisp typography and glowing accents. The interface prioritizes clarity under pressure, using minimalist layouts to ensure that complex geospatial and predictive data remains the focal point. The emotional response is one of absolute control—a "Mission Control" for the planet's future.

## Colors
The palette is rooted in a "Deep Space" spectrum to minimize eye strain during long-duration monitoring. 

- **Foundational Layers:** The primary background uses Deep Space Blue (#081120) to provide maximum contrast for data overlays.
- **Glass Surfaces:** Cards and containers use a semi-transparent Deep Navy Glass.
- **Action & Intelligence:** Command Blue (#2563EB) is reserved for primary interactions and institutional branding. Cyan Glow (#22D3EE) is used for active data streams, vector lines, and futuristic highlights.
- **Criticality:** Amber/Orange is used for predictive alerts, while Success Green and Danger Red provide immediate semantic feedback for environmental thresholds.

## Typography
This design system employs a dual-typeface strategy to balance readability with a technical aesthetic.

- **Space Grotesk** is used for all headlines, display metrics, and high-impact data points. Its geometric construction evokes a scientific, futuristic feel.
- **Inter** handles all body copy and functional UI text, ensuring high legibility for complex reports and tooltips.
- **JetBrains Mono** (or generic Monospace) is introduced for labels, coordinates, and timestamp data to reinforce the "Digital Twin" and technical nature of the platform.

## Layout & Spacing
The system utilizes a **12-column fluid grid** for dashboard views, allowing for flexible arrangements of data widgets. 

- **Rhythm:** A 4px baseline grid ensures tight, technical alignment.
- **Margins:** Large 32px outer margins provide "breathing room" against the dark background, preventing the UI from feeling claustrophobic.
- **Density:** Data-heavy views should utilize "High-Density" spacing (8px gutters), while informational landing pages or reports should use "Standard" spacing (16px gutters).
- **Responsiveness:** On mobile, the grid collapses to a single column with 16px side margins. Data widgets should transition from side-by-side to stacked cards.

## Elevation & Depth
Depth is created through **Glassmorphism and Tonal Layering** rather than traditional drop shadows.

- **Base Layer:** #081120 (Deep Space Blue).
- **Level 1 (Cards):** Deep Navy Glass (#172033) with a 12px backdrop blur and a 1px border of `rgba(255, 255, 255, 0.1)`.
- **Level 2 (Popovers/Modals):** Lighter glass tint with 20px backdrop blur and a subtle Cyan Glow (#22D3EE) outer shadow (spread 0, blur 15px, opacity 0.1) to indicate active focus.
- **Vector Overlays:** Pure white or Cyan lines at 0.5pt thickness for connecting data points, creating a "HUD" (Heads-Up Display) effect.

## Shapes
The shape language is sophisticated and modern. While the base `roundedness` is set to 2 (0.5rem), this system specifically utilizes **2xl rounding (1.5rem)** for primary containers and dashboard widgets to create a soft, high-end "Apple-esque" feel.

- **Small Components (Buttons/Inputs):** 8px (0.5rem) for a precise, tactical look.
- **Containers (Cards/Modals):** 24px (1.5rem) to soften the large data panels.
- **Status Indicators:** Fully rounded (pill-shaped) for high visibility.

## Components
- **Buttons:** Primary buttons use a solid Command Blue fill with white text. Secondary buttons are "Ghost" style with a Cyan 1px border and a subtle glass background.
- **Glass Cards:** The signature component. Must include a `backdrop-filter: blur(12px)`, a subtle linear gradient from top-left to bottom-right, and a 1px inner stroke to catch light.
- **Data Visualizations:** Charts should use the Tech Accent (Cyan) as the primary line color. Areas under curves should use a transparent gradient fade. Grid lines should be faint (`rgba(255,255,255,0.05)`).
- **Status Chips:** Use a subtle background tint of the status color (Success/Danger) with high-contrast text and a leading 6px "glowing" dot.
- **Input Fields:** Dark, recessed backgrounds with a 1px border that glows Cyan on focus.
- **Geospatial Overlays:** Maps should use a "Dark/Satellite" base with custom vector layers in Cyan and Amber to highlight climate anomalies.