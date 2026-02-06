---
name: design-system
description: Cape Bridge brand design tokens, visual redesign spec, and component patterns. Use when building or styling any Cape Bridge site.
---

# Cape Bridge Design System

The canonical design system for all Cape Bridge sites. This is the single source of truth for visual design — read this before implementing any UI.

---

# PART 1: VISUAL REDESIGN SPECIFICATION

---

## Brand Tagline

- Tagline: "Your path, properly built"
- Use across all Cape Bridge sites — hero tagline, footer sign-off, meta descriptions
- Styling: subtle, elegant — smaller font size (0.875rem), lighter weight (400), tracked letters (0.03em)
- Never bold, never ALL CAPS
- Colour: muted foreground

---

## Brand Logo

- Master file: `../../brand/capebridge_logo_v2.png` (relative to sub-project)
- Repo copy: `public/capebridge_logo_v2.png`
- The logo features a wave flowing left-to-right that transitions into a bridge/crossing shape, with a navy-to-teal gradient
- "Cape" is navy, "Bridge" is teal
- Copy into each repo's `public/` folder before use
- Use in: header, footer, contact section, favicon/meta
- Header: icon + text side by side, ~36px height desktop, ~32px when scrolled
- Hover: wave shifts 2px left, bridge shifts 2px right, 0.3s ease-out transition

---

## Design Philosophy

- Must NOT look like a generic AI/SaaS website
- No stock gradients, no floating blobs, no generic grid backgrounds, no pulsing dots
- Instead: architectural, blueprint-inspired, precise, constructed
- The brand is about building data infrastructure — the visual language should feel engineered, not templated
- Interactions should feel intentional and crafted, not decorative or bouncy
- CTAs must stand out with strong contrast — never blend into the background
- No infinite animations after page load — the page should feel stable and professional

---

## Colour Palette

### Core Brand Colours
```
Navy (logo):             oklch(0.25 0.06 250)   — deep, authoritative, headings
Teal (logo):             oklch(0.65 0.15 195)   — energetic, accent, "Bridge" text
Blueprint Blue:          oklch(0.55 0.12 240)   — technical lines, grids, subtle borders
```

### Accent Colour
```
Construction Orange:     oklch(0.70 0.18 55)    — accent highlights ONLY
```
- Used ONLY for: nav link hover underlines, subtle accent highlights
- **NEVER used on buttons** — no orange bg buttons anywhere on the site
- Borrowed from construction/safety signage aesthetic but kept as accent, not action

### Existing Tokens (keep)
```
Primary:                 oklch(0.68 0.14 200)   — teal, for accents
Background:              oklch(0.97 0.003 250)  — light gray
Foreground:              oklch(0.20 0.01 250)   — near black for text
Muted Foreground:        oklch(0.50 0.01 250)   — secondary text
Border:                  oklch(0.88 0.003 250)  — subtle borders
```

### CTA Button Strategy

**CRITICAL: ALL buttons use navy or white. NEVER use construction orange on any button.**

| Context | Style |
|---------|-------|
| All CTAs on light backgrounds | Navy bg, white text, `rounded-sm` |
| Secondary CTA on light backgrounds | Ghost: navy border, navy text → navy bg + white text on hover |
| All CTAs on dark backgrounds | White bg, navy text, `rounded-sm` |
| Secondary CTA on dark backgrounds | Ghost: white/20 border, white text → white bg + navy text on hover |

**Navy CTA pattern (light bg — copy this):**
```
className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-medium tracking-[0.02em] text-white transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
```

**White CTA pattern (dark bg — copy this):**
```
className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-medium tracking-[0.02em] text-navy transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
```

**Required on all buttons:** `cursor-pointer` class — ensures pointer cursor on hover for clickable elements.

---

## Typography Hierarchy

Fonts: Plus Jakarta Sans (body), JetBrains Mono (code)

| Element | Size (desktop) | Weight | Tracking | Colour |
|---------|----------------|--------|----------|--------|
| H1 (Hero) | 4rem-4.5rem | 700 | -0.02em (tight) | Foreground |
| H2 (Section) | 2.25rem | 700 | -0.01em | Foreground |
| H3 (Card titles) | 1.125rem | 600 | 0 | Foreground |
| Body | 1rem | 400 | 0 | Muted foreground |
| Eyebrow/Label | 0.75rem | 500 | 0.05em (wide) | Navy |
| Tagline | 0.875rem | 400 | 0.03em | Muted foreground |
| Button text | 0.875rem | 500 | 0.02em | Per button style |

---

## Micro-Interactions

### Principles
- No bounce, no wiggle, no playful elasticity
- All transitions: linear or ease-out (never ease-in-out which feels floaty)
- Durations: 150-300ms, never longer than 400ms
- Movement: 2-4px max translations, scaling only to 1.02 max

### Specific Interactions
| Element | Hover State |
|---------|-------------|
| Nav links | Underline draws in from center (border-bottom animation) |
| Logo | Wave shifts 2px left, bridge shifts 2px right, then return |
| Service cards | Border brightens to full opacity, measurement line appears |
| Resource cards | Lift 2px (translateY), subtle shadow appears |
| Primary CTAs (navy) | Slight background darken (navy/90) |
| Secondary CTAs | Fill with navy, text turns white |
| Footer links | Arrow (→) slides in from left |
| Form inputs | Border turns white, subtle inner glow |

---

## Section Transitions — Wave/Bridge Dividers

Instead of plain lines between sections, use the logo motif as a horizontal divider:

- A straight horizontal line from left edge to ~40%
- Line curves into the wave shape
- Crosses with the bridge shape at center
- Returns to straight line to right edge
- Rendered at ~10-15% opacity in navy
- Used between: Hero→Services, Services→About, About→Resources, Resources→Contact

Create as a reusable SVG component.

---

## HEADER

### Logo Treatment
- SVG version of logo icon (wave + bridge mark) at 36px height
- Text beside icon: "Cape" (navy, 600 weight) + "Bridge" (teal, 500 weight)
- Hover: wave shifts 2px left, bridge shifts 2px right, 0.3s ease-out
- Scroll state: shrinks to 32px, tracking tightens, subtle shadow appears

### Navigation
- Links: subtle bottom border that "draws in" on hover (from center outward)
- Active section: small orange dot or short orange underline segment
- No rounded hover backgrounds — those feel soft/SaaS-y

### CTA Button
- "Get in Touch" in navy background, white text, subtle rounded corners (rounded-sm)
- Hover: background lightens slightly (navy/90)
- Should feel like a "call to action" label on a technical diagram
- Note: ALL CTAs use navy bg + white text. No orange buttons anywhere.

### Overall Feel
Header should feel like navigation in a CAD application — precise, minimal, functional.

---

## HERO — "Drawing Hand" Animation

### Animation Phases (Pure SVG + CSS)

**Phase 1: Wave (0-1.2s)**
- Single stroke drawn left-to-right using stroke-dashoffset animation
- Line "grows" from left edge, tracing the wave curve
- Slight trailing glow effect (feathered edge fading behind drawing point)
- Navy blue, ~4-6px stroke width

**Phase 2: Bridge (0-1.2s, simultaneous)**
- Drawn right-to-left, same technique
- Teal arc sketched in opposite direction
- Same trailing glow effect

**Phase 3: Collision (1.2-1.8s)**
- Both lines reach center intersection
- Brief "connection flash" — soft radial pulse from crossing point
- Both strokes hold at full opacity for ~0.6s

**Phase 4: Settle (1.8-2.3s)**
- Paths fade from 100% → 15% opacity
- Glow filter removed, stroke width reduces to 3px
- Collision flash fades out completely
- Paths remain in place (no fragmentation or drift)

**Final State (2.3s+)**
- Paths stay at 15% opacity as permanent background elements
- Combined with BlueprintBackground grid/marks for layered effect

### Final Background Pattern
Architectural blueprint grid (BlueprintBackground component):
- Faint orthogonal grid lines (every 40px) at ~3% opacity
- Scattered diagonal line segments at ~5-8% opacity, deterministic positions
- Small "construction marks" — crosses (+) and circles at some intersections
- Subtle radial gradient: center slightly lighter, edges slightly darker
- Settled hero animation paths at 15% opacity layered on top

### Hero Content
- Eyebrow: "Your path, properly built" — tagline as eyebrow position, smaller (text-xs), tracked (0.05em), navy, NOT uppercase
- Headline: current text, ensure teal span uses actual brand teal (`text-teal`)
- Subheading: current text
- CTAs:
  - Primary: "Get in Touch" — navy bg, white text, arrow icon, `cursor-pointer`
  - Secondary: "Explore Services" — ghost button (btn-secondary), navy border, navy fill on hover
- Trust indicators: Removed entirely (no grey placeholders)

### Technology
- Pure SVG with CSS stroke-dasharray and stroke-dashoffset for draw animation
- React state manages phases: `"drawing"` → `"settling"` → `"settled"`
- Background: BlueprintBackground (static SVG) + settled animation paths
- All animations use transform and opacity only (GPU-accelerated)
- Total weight: ~15KB including all SVG paths

### Mobile
- Tablet (768px): Full animation, 1.6s draw duration
- Phone (<640px): 1s draw duration, 3px strokes, 50% grid density
- prefers-reduced-motion: Skip animation entirely, show static background only

---

## SERVICES — "Capability Blueprints"

### Section Header
- Title: "Capabilities" or "What We Build" (more constructive than "Our Services")
- Subtitle: "End-to-end solutions, engineered for results."

### Card Design
Each service as a "capability module" on a technical diagram:

- **Shape:** Rectangular, no rounded corners (or max 2px radius)
- **Border:** 1px solid blueprint blue at ~30% opacity
- **Corner markers:** Small L-shaped marks in all four corners (like crop marks)
- **Icon:** Line-art style, ~2px stroke weight, navy colour. NOT filled circles. Position top-left, not centered.
- **Label line:** Small connector line from icon to title (like a callout on a diagram)
- **Title:** Bold, navy, left-aligned
- **Description:** Regular weight, muted, left-aligned

### Hover State
- Border brightens to full opacity
- Subtle "measurement line" appears along one edge (decorative dimension line)
- Background: very light blue tint (~2% opacity)
- No bouncy transforms, no scale changes

### Grid
- 3-column desktop, 2-column tablet, 1-column mobile
- Subtle grid lines between cards (~5% opacity) like graph paper divisions

### Bottom CTA
- Navy bg, white text, `rounded-sm` — matches header/hero CTA style (NOT construction orange)
- Text: "Discuss Your Project"

---

## ABOUT — "The Workshop"

### Section Divider
Use wave-bridge motif at TOP of section — horizontal line that curves into logo shape at center, ~10% opacity.

### Background
- Keep muted background
- Optional: subtle diagonal hatching pattern in top corner (technical drawing aesthetic)

### Left Column
- Headline: "Why Cape Bridge"
- Incorporate tagline naturally: "Your path, properly built — that's our philosophy..."
- **Differentiator cards redesign:**
  - Remove icon circles, use inline line-art icons
  - Left border only (not full border), 2px navy
  - Transparent or very subtle background
  - Tighter padding

### Right Column — Stats as "Spec Sheet"
Replace 4-box grid with single "profile panel":
- Header bar: "Cape Bridge — At a Glance"
- Stats listed vertically with dotted leader lines:
  ```
  Experience ................. 10+ Years
  Projects Delivered ......... 50+
  Cloud Platforms ............ AWS, Azure, GCP
  Location ................... Australia
  ```
- Feels like reading a technical datasheet

### CTA
- "Let's Talk" — navy bg, white text, `cursor-pointer` (consistent with header/hero CTAs)

---

## RESOURCES — "Technical Documents"

### Card Design
Each resource as a document/specification file:

- **Shape:** Taller aspect ratio (document-like)
- **Top edge:** Subtle "tab" or "fold" visual (file folder aesthetic)
- **Left margin:** Thin vertical line with small horizontal tick marks (lined paper)
- **Icon:** Document icon or specific resource icon, line drawing style
- **Tag:** "[GUIDE]" in top-right corner with bracket styling, not pill
- **Title:** Bold, navy, like a document title
- **Description:** Smaller, muted, like an abstract

### Hover State
- Card lifts 2px (translateY) with subtle shadow
- Margin line extends or darkens

### Section Subtitle
"Technical resources and reference guides"

---

## CONTACT — "Direct Line"

### Background
- Keep dark primary background for contrast
- Add subtle blueprint grid overlay at ~5% opacity (white lines on dark teal)
- Creates visual continuity with hero

### Layout
- Above form/info grid: Cape Bridge logo (icon + text, white version) centered or left-aligned
- Below logo: Tagline "Your path, properly built" at ~70% white opacity, tracked

### Form
- Inputs: Semi-transparent, sharp borders (no rounded corners), clean rectangles
- Labels: Smaller, tracked (like form field labels on technical document)
- Focus state: Border turns white, subtle inner glow
- **Submit button:** MUST be highly visible
  - White bg with navy text (matches dark-bg CTA pattern above)
  - Full width on mobile, auto on desktop
  - Text: "Send Message →"
  - Hover: bg-white/90

### Info Column
- Remove icon circles, use inline line-art icons
- Simple list with subtle separator lines
- Keep "We work with clients globally..." as footnote

### Success State
- Include logo and tagline for brand reinforcement at conversion

---

## FOOTER — "The Foundation"

### Top Section — Brand Block
- Logo (icon + text) at ~28px height
- Tagline directly below
- Brief description
- Optional: subtle wave-bridge SVG motif spanning width as decorative header

### Navigation Columns
- Headers: Uppercase, small, tracked (like document section labels)
- Links: Regular weight, arrow (→) slides in from left on hover

### Bottom Bar
- Construction-line styling: horizontal line with small vertical tick marks (like a ruler)
- Copyright left, ABN right
- Social links if available (LinkedIn), styled as line-art icons

### Background
- Slightly darker than card colour
- Optional: very faint blueprint grid at ~3% opacity

---

## Responsive Behaviour Summary

### Tablet (768px)
- Hero animation: 2s duration
- Services: 2-column grid
- About: single column, stats below content
- Full navigation visible

### Mobile (<640px)
- Hero animation: 1.5s, thinner strokes (3px), simplified dissolution, 50% grid density
- Services: single column, corner markers may hide
- CTAs: stack vertically, full-width
- Contact: single column, info below form
- Footer: single column, centered brand block

### prefers-reduced-motion
- Skip all animations
- Show final states immediately with simple 0.5s opacity fade-in

---

## Implementation Order

Recommended sequence for implementation:
1. Colour tokens (add construction orange, navy, blueprint blue)
2. Header (logo SVG, nav styling, scroll behaviour)
3. Hero (animation, background pattern, content updates)
4. Section dividers (wave-bridge motif component)
5. Services (card redesign)
6. About (layout + stats spec sheet)
7. Resources (document card styling)
8. Contact (form refinement, logo placement)
9. Footer (complete redesign)
10. Final polish (micro-interactions, responsive testing)

---

## Files to Create/Modify

### New Components
- `src/components/ui/Logo.tsx` — SVG logo with hover animation
- `src/components/ui/BlueprintBackground.tsx` — hero background pattern
- `src/components/ui/SectionDivider.tsx` — wave-bridge motif
- `src/components/ui/SpecSheet.tsx` — stats display for About section

### Modified Components
- `src/components/layout/Header.tsx` — logo integration, nav styling
- `src/components/layout/Footer.tsx` — full redesign
- `src/sections/Hero.tsx` — animation, content, CTAs
- `src/sections/Services.tsx` — card redesign
- `src/sections/About.tsx` — layout, stats component
- `src/sections/Resources.tsx` — document card styling
- `src/sections/Contact.tsx` — form, logo, tagline

### Styles
- `src/styles/index.css` — new colour tokens, animation keyframes

---

## Quality Checklist

Before marking any section complete:
- [ ] No floating blobs, pulsing dots, or generic gradients
- [ ] CTAs clearly stand out with strong contrast
- [ ] Interactions feel engineered (no bounce/wiggle)
- [ ] Blueprint/architectural aesthetic maintained
- [ ] Tagline appears where specified
- [ ] Logo used correctly with proper hover animation
- [ ] Responsive behaviour tested at 375px, 768px, 1024px, 1440px
- [ ] prefers-reduced-motion respected
- [ ] Typography hierarchy followed
- [ ] Colour tokens used correctly (navy, teal, construction orange for accents only — NEVER on buttons)

---

# PART 2: SETUP & REFERENCE

This section contains setup instructions and code patterns for new Cape Bridge repos.

---

## Quick Setup Checklist

When setting up a new Cape Bridge repo:

1. [ ] Copy Google Fonts import to `index.html`
2. [ ] Copy full `@theme` block + base styles to `src/styles/index.css`
3. [ ] Copy custom animation keyframes to `src/styles/index.css`
4. [ ] Create `src/lib/utils.ts` with `cn()` helper
5. [ ] Create shared UI components in `src/components/ui/` (Button, Card, SectionWrapper)
6. [ ] Create layout components in `src/components/layout/` (Header, Footer)
7. [ ] Install dependencies: `clsx`, `tailwind-merge`, `lucide-react`
8. [ ] Ensure all sections have `id` attributes for navigation

---

## Fonts

### Google Fonts Import

Add to `index.html` `<head>`:

```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Plus Jakarta Sans (body/headings) + JetBrains Mono (code) -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```

### Font Pairing

| Usage | Font | Weights |
|-------|------|---------|
| Body | Plus Jakarta Sans | 400, 500, 600, 700 |
| Headings | Plus Jakarta Sans | 700, 800 |
| Code | JetBrains Mono | 400, 500, 600 |

---

## Required Utilities

### cn() Helper

Create `src/lib/utils.ts`:

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Required packages:** `clsx`, `tailwind-merge`

---

## Spacing & Layout

### Border Radius

```css
--radius: 0.75rem;        /* 12px - default */
--radius-sm: 0.5rem;      /* 8px */
--radius-md: 0.625rem;    /* 10px */
--radius-lg: 0.75rem;     /* 12px */
--radius-xl: 1rem;        /* 16px */
```

### Common Spacing Values

| Use Case | Value |
|----------|-------|
| Card padding | `p-6` (24px) |
| Section padding | `py-16 lg:py-24` |
| Component gap | `gap-4` to `gap-6` |
| Nav item padding | `px-4 py-3` |

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm:` | 640px | Tablet portrait |
| `md:` | 768px | Tablet landscape |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |
| `2xl:` | 1536px | Extra large |

---

## Smooth Scroll Navigation

### CSS Foundation

All Cape Bridge sites have smooth scrolling enabled globally:

```css
html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: 4rem;  /* Offset for sticky header (64px) */
}
```

### Navigation Patterns

**For anchor links (`<a>` tags):**
Use simple `href="#section"` - CSS handles smooth scrolling:

```tsx
<a href="#contact">Contact Us</a>
```

**For button CTAs:**
Use `scrollIntoView` for programmatic navigation:

```tsx
<Button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Get in Touch
</Button>
```

---

## File Structure Reference

```
src/
├── styles/
│   └── index.css          # @theme config + base styles + custom animations
├── components/
│   ├── ui/                 # Primitives (Button, Card, SectionWrapper, etc.)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── Logo.tsx           # NEW: SVG logo with hover animation
│   │   ├── BlueprintBackground.tsx  # Hero background pattern
│   │   ├── SectionDivider.tsx # NEW: wave-bridge motif
│   │   ├── SpecSheet.tsx      # NEW: stats display for About section
│   │   └── index.ts        # Barrel export
│   └── layout/             # Header, Footer
│       ├── Header.tsx
│       └── Footer.tsx
├── sections/               # Page sections (landing page)
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Resources.tsx
│   └── Contact.tsx
├── lib/
│   └── utils.ts            # cn() helper
└── ...
```

---

## Accessibility Checklist

- [ ] All interactive elements have visible focus states (ring pattern)
- [ ] Color contrast meets WCAG AA (primary on white, foreground on background)
- [ ] Buttons have `cursor-pointer` on non-disabled states
- [ ] Disabled states use `opacity-50` and `pointer-events-none`
- [ ] Icons are decorative (`aria-hidden="true"`) or have labels
- [ ] Sections have `id` attributes for anchor navigation
- [ ] All form inputs have associated `<label>` elements with `htmlFor`
- [ ] Required fields marked with visual indicator and semantic meaning
- [ ] Error messages displayed below invalid fields with clear, actionable text
