# Cape Bridge Website — Project Log

## Constitution
> Copied from CLAUDE.md. See parent CLAUDE.md for the full version.
> Key rules: Blueprint/architectural aesthetic. No generic AI/SaaS patterns.
> Engineered, precise, intentional. ALL buttons use navy (light bg) or white (dark bg). Construction orange is accent only — NEVER on buttons.
> "Your path, properly built" tagline throughout.

## Close Step Checklist (MANDATORY before clearing context)
```
a) TEST    → Run website-testing skill Levels 1-3 minimum (build, visual QA, a11y)
b) LOG     → Update project-log.md (mark ✅, summary, next prompt, move to completed)
c) SKILLS  → If implementation DIFFERS from spec, update skills (BOTH child AND parent folders)
d) CONTEXT → Update claude-app-context.md (project level + parent level)
e) REPORT  → Tell user: "Ready to clear. Next prompt is in project-log.md"
```
> See `.claude/skills/project-management/SKILL.md` for full details.

## Project Overview
- **What:** Cape Bridge landing page — single-page marketing site for a data/tech/AI consultancy
- **Repo:** `capebridge-website/` (sub-folder of `capebridge/`)
- **Tech stack:** React, TypeScript, Tailwind CSS, Vite (confirm on first session)
- **Design:** Full visual redesign from generic AI/SaaS look → blueprint/architectural aesthetic
- **Design spec:** `.claude/skills/design-system/SKILL.md`
- **Sections:** Header, Hero, Services, About, Resources, Contact, Footer

## Implementation Plan

13 steps, executed sequentially. Each step is a single Claude Code session.

| Step | Description | Status | Date |
|------|-------------|--------|------|
| 1 | Colour tokens, typography, CTA styles, animation keyframes in index.css | ✅ Complete | 2026-02-06 |
| 2 | Logo.tsx (SVG + hover), brand asset copy, Header.tsx redesign | ✅ Complete | 2026-02-06 |
| 3 | SectionDivider.tsx (wave-bridge motif SVG) | ✅ Complete | 2026-02-06 |
| 4 | BlueprintBackground.tsx (static hero bg — grid, marks, gradient) | ✅ Complete | 2026-02-06 |
| 5 | Hero animation phases 1-3 (stroke draw + collision flash) | ✅ Complete | 2026-02-06 |
| 6 | Hero animation phases 4-5 (settle into background) | ✅ Complete | 2026-02-06 |
| 7 | Hero content, CTAs, tagline, trust indicators, layout integration | ✅ Complete | 2026-02-06 |
| 8 | Services section — capability blueprint cards, corner markers, grid | ✅ Complete | 2026-02-06 |
| 9 | About section — SpecSheet.tsx, differentiator cards, layout | ✅ Complete | 2026-02-06 |
| 10 | Resources section — document-style cards, margin lines, tags | ✅ Complete | 2026-02-06 |
| 11 | Contact section — blueprint grid bg, form styling, logo/tagline | ✅ Complete | 2026-02-06 |
| 12 | Footer — brand block, nav columns, ruler bar, full redesign | ✅ Complete | 2026-02-06 |
| 13 | Final polish — dividers, micro-interactions audit, cleanup, responsive, a11y | ✅ Complete | 2026-02-06 |

---

## Next Prompt

> **All 13 steps complete. Ready to commit.**
>
> Review the changes with `git diff` and `git status`, then commit with:
> `feat: visual redesign — blueprint/architectural aesthetic`
>
> After committing, push to `main` for Vercel deploy.

---

## Step Summaries

### Step 1 — Colour Tokens, Typography & CTA Base Styles (2026-02-06)

**Added to `src/styles/index.css`:**

| Category | Items |
|----------|-------|
| Colour tokens | `--navy`, `--teal`, `--blueprint-blue`, `--construction-orange` |
| Tracking vars | `--tracking-tight`, `--tracking-snug`, `--tracking-wide`, `--tracking-tagline`, `--tracking-button` |
| Timing vars | `--duration-fast` (150ms), `--duration-base` (250ms), `--duration-slow` (300ms) |
| Tailwind mappings | `--color-navy`, `--color-teal`, `--color-blueprint`, `--color-cta` |
| Button classes | `.btn-primary`, `.btn-secondary`, `.btn-dark-bg` |
| Keyframes | `underline-draw`, `fade-in`, `arrow-slide-in` |
| Utility classes | `.animate-underline-draw`, `.animate-fade-in`, `.animate-arrow-slide` |

**Verification:** `npm run build` passes, dev server starts.

---

### Step 2 — Logo SVG Component & Header Redesign (2026-02-06)

**Created `src/components/ui/Logo.tsx`:**

| Feature | Implementation |
|---------|----------------|
| SVG icon | Wave path (navy) + bridge path (teal), inline SVG |
| Hover animation | Wave `translateX(-2px)`, bridge `translateX(+2px)`, 300ms ease-out |
| Props | `size` (default 36), `variant` ("default" \| "white"), `className` |
| Text | "Cape" (navy, 600) + "Bridge" (teal, 500), scales with size |

**Modified `src/components/layout/Header.tsx`:**

| Change | Details |
|--------|---------|
| Logo | Replaced text wordmark with `<Logo />`, shrinks 36→32px on scroll |
| Nav links | Added `.nav-link` class with `::after` underline-draw hover |
| CTA | Changed to `<button className="btn-primary">` |
| Mobile | Removed rounded hover bg, updated hamburger hover color |

**Added to `src/styles/index.css`:**

| Class | Purpose |
|-------|---------|
| `.nav-link::after` | Orange underline, `scaleX(0)→scaleX(1)` on hover, center origin |

**Files:**
- Created: `public/capebridge_logo_v2.png`, `src/components/ui/Logo.tsx`
- Modified: `src/components/ui/index.ts`, `src/components/layout/Header.tsx`, `src/styles/index.css`

**Verification:** `npm run build` passes.

---

### Step 3 — Section Divider Component (2026-02-06)

**Created `src/components/ui/SectionDivider.tsx`:**

| Feature | Implementation |
|---------|----------------|
| SVG motif | Full-width wave-bridge path using quadratic Bézier curves |
| Path structure | Straight line → wave dip (Q 480,50) → bridge rise (Q 720,10) → straight line |
| `viewBox` | `0 0 1200 60` with `preserveAspectRatio="none"` for responsive scaling |
| Stroke | `var(--navy)` at 12% opacity, 1.5px width, rounded caps/joins |
| Height | `h-12` (48px) default via Tailwind |
| Props | `className` for additional styling |
| Accessibility | `aria-hidden="true"` (decorative element) |

**Files:**
- Created: `src/components/ui/SectionDivider.tsx`
- Modified: `src/components/ui/index.ts`

**Verification:** `npm run build` passes.

---

### Step 4 — Blueprint Background Component (2026-02-06)

**Created `src/components/ui/BlueprintBackground.tsx`:**

| Feature | Implementation |
|---------|----------------|
| Grid pattern | SVG `<pattern>` — 40px desktop, 80px mobile (50% density) at 3% opacity |
| Diagonal segments | 10 deterministic `<line>` elements at 5-8% opacity; mobile shows 5 at scaled positions |
| Construction marks | 12 marks (6 crosses, 6 circles) at 10-12% opacity; mobile shows 6 at scaled positions |
| Radial gradient | Center white/2% → edges black/3% vignette effect |
| Reduced motion | Uses `motion-reduce:animate-fade-in` for 0.5s fade |
| Positioning | `position: absolute; inset: 0; overflow: hidden` |
| Accessibility | `aria-hidden="true"` (decorative element) |
| Props | `className` for additional styling |

**Files:**
- Created: `src/components/ui/BlueprintBackground.tsx`
- Modified: `src/components/ui/index.ts`

**Verification:** `npm run build` passes.

---

### Step 5 — Hero Animation Phases 1-3 (2026-02-06)

**Created `src/components/ui/HeroAnimation.tsx`:**

| Feature | Implementation |
|---------|----------------|
| SVG overlay | `position: absolute`, `pointer-events: none`, `z-10`, `viewBox="0 0 1200 600"` |
| Wave path | Navy stroke, 5px width, `stroke-dashoffset` animation 0→600 over 1.2s |
| Bridge path | Teal stroke, 5px width, draws right-to-left (path reversed for draw direction) |
| Path scaling | Paths directly scaled from Logo.tsx: 16x scale factor with offset x+200, y-50 |
| Trailing glow | `feGaussianBlur` filter with stdDeviation=6, merged with source graphic |
| Collision flash | `<circle>` at intersection (~665, 245), radial gradient, scale pulse at 1.2s |
| Reduced motion | React state + `matchMedia` listener, returns `null` when enabled |

**Added to `src/styles/index.css`:**

| Keyframes/Styles | Purpose |
|------------------|---------|
| `@keyframes draw-wave` | `stroke-dashoffset: 600 → 0` |
| `@keyframes draw-bridge` | `stroke-dashoffset: 550 → 0` |
| `@keyframes collision-flash` | Scale 0.5→1.3→1, opacity 0→0.7→0.4 |
| Tablet media query | Slower animation (1.6s), delayed collision flash |
| Mobile media query | Thinner strokes (3px), faster animation (1s), smaller flash radius |

**Modified `src/sections/Hero.tsx`:**
- Added `<HeroAnimation />` component between DataVizBackground and content
- Imports from `@/components/ui`

**Additional fix — Header CTA button:**
- Changed from raw `<button className="btn-primary">` to `<Button>` component
- Applied `bg-navy text-white` for consistent styling with logo's dark stroke
- Same rounded shape as hero CTAs (`size="lg"`)

**Key learnings:**
- SVG path draw direction is controlled by path point order; reverse points to reverse draw direction
- Direct mathematical scaling of logo paths (16x + offset) ensures visual consistency
- `prefers-reduced-motion` best handled with React state + matchMedia listener (not just CSS)

**Files:**
- Created: `src/components/ui/HeroAnimation.tsx`
- Modified: `src/components/ui/index.ts`, `src/sections/Hero.tsx`, `src/styles/index.css`, `src/components/layout/Header.tsx`

**Verification:** `npm run build` passes, animation plays correctly on desktop/tablet/mobile.

---

### Step 6 — Hero Animation Settle Phase (2026-02-06)

**Modified `src/components/ui/HeroAnimation.tsx`:**

| Feature | Implementation |
|---------|----------------|
| Phase management | React state: `"drawing"` → `"settling"` → `"settled"` |
| Phase 4 (1.8-2.3s) | Paths fade from 100% → 15% opacity, collision flash fades out |
| Settled state | Paths remain at 15% opacity as permanent background |
| Glow removal | Filter removed during settling, thinner stroke (3px) when settled |
| Timing | Desktop: settle at 1.8s, Mobile: settle at 1.5s |

**Added to `src/styles/index.css`:**

| Keyframes | Purpose |
|-----------|---------|
| `settle-opacity` | Fade paths from 100% → 15% over 0.5s |
| `flash-fadeout` | Fade collision flash from 40% → 0% |

**Design decision:** User preferred simple settle (paths stay in place at 15% opacity) over fragment dissolution/drift animation. Cleaner, more intentional look.

**Files:**
- Modified: `src/components/ui/HeroAnimation.tsx`, `src/styles/index.css`

**Verification:** `npm run build` passes, animation draws then settles smoothly.

---

### Step 7 — Hero Content, CTAs, Tagline & Layout (2026-02-06)

**Modified `src/sections/Hero.tsx`:**

| Change | Details |
|--------|---------|
| Background | Replaced `DataVizBackground` with `BlueprintBackground` |
| Eyebrow | "Your path, properly built" as eyebrow — navy, `text-xs`, `font-medium`, `tracking-[0.05em]`, NOT uppercase |
| Headline | Added `font-bold`, `tracking-[-0.02em]`; teal span uses `text-teal` |
| Primary CTA | Navy bg, white text, `cursor-pointer`, arrow icon (not btn-primary/orange) |
| Secondary CTA | Changed to `<button className="btn-secondary">` |
| Mobile CTAs | `w-full sm:w-auto` for full-width stacking |
| Trust indicators | Removed grey placeholder boxes entirely |

**Also modified `src/sections/About.tsx`:**
- "Let's Talk" CTA: Changed to navy bg, white text, `cursor-pointer` (consistent with hero)

**Modified `src/App.tsx`:**

| Change | Details |
|--------|---------|
| Import | Added `SectionDivider` from `./components/ui` |
| Layout | Added `<SectionDivider />` between Hero and Services |

**Files:**
- Modified: `src/sections/Hero.tsx`, `src/App.tsx`

**Verification:** `npm run build` passes, visual QA at all breakpoints.

---

### Step 8 — Services Section Blueprint Cards (2026-02-06)

**Modified `src/sections/Services.tsx`:**

| Change | Details |
|--------|---------|
| Header | "What We Build" + "End-to-end solutions, engineered for results." |
| Cards | `rounded-[2px]`, `border border-blueprint/30`, `bg-background`, `p-6` |
| Corner markers | 4 L-shaped `<span>` elements per card, `border-blueprint/70`, 10px size |
| Icons | Lucide line-art, `strokeWidth={1.5}`, navy, top-left (no filled circle bg) |
| Connector line | `h-px w-5 bg-blueprint/40` between icon and title |
| Title | `text-lg font-semibold text-navy`, left-aligned |
| Hover | `hover:border-blueprint hover:bg-blueprint/[0.02]`, 250ms ease-out |
| Measurement line | Decorative dimension line at bottom, `opacity-0 → group-hover:opacity-100` |
| Grid | `gap-5 md:grid-cols-2 lg:grid-cols-3` |
| Bottom CTA | "Discuss Your Project" — navy bg style (matches header/hero), NOT `.btn-primary` |

**Modified `src/App.tsx`:**
- Added `<SectionDivider />` between Services and About

**Design decision:** User clarified that ALL CTAs use navy (light bg) or white (dark bg) — construction orange is NEVER used on buttons. Updated CTA strategy in both child and parent design-system skills.

**Files:**
- Modified: `src/sections/Services.tsx`, `src/App.tsx`

**Verification:** `npm run build` passes, visual QA confirmed by user.

---

### Step 9 — About Section + SpecSheet (2026-02-06)

**Created `src/components/ui/SpecSheet.tsx`:**

| Feature | Implementation |
|---------|----------------|
| Header bar | Navy bg, white text "Cape Bridge — At a Glance", `py-3 px-4` |
| Stats list | Vertical list with dotted leader lines (`border-b border-dotted`) |
| Border | `border border-blueprint/40`, `rounded-[2px]` |
| Props | `title` (default: "Cape Bridge — At a Glance"), `stats: Array<{label, value}>` |

**Modified `src/sections/About.tsx`:**

| Change | Details |
|--------|---------|
| Tagline | "Your path, properly built" woven into intro paragraph (navy, `font-medium`) |
| Differentiator cards | Left border only (`border-l-2 border-navy`), inline icons (`strokeWidth={1.5}`), no circles |
| Stats | Replaced 4-box grid with `<SpecSheet />` component |
| Layout | Desktop: two columns; Mobile: single column, SpecSheet below content |
| CTA | "Let's Talk" navy bg style (unchanged, already correct) |

**Files:**
- Created: `src/components/ui/SpecSheet.tsx`
- Modified: `src/components/ui/index.ts`, `src/sections/About.tsx`

**Verification:** `npm run build` passes, visual QA confirmed by user.

---

### Step 10 — Resources Section Document Cards (2026-02-06)

**Modified `src/sections/Resources.tsx`:**

| Change | Details |
|--------|---------|
| Card component | Replaced `<Card>` with custom `DocumentCard` — inline, document-style layout |
| Shape | `min-h-[280px]`, `rounded-[2px]`, `border border-blueprint/30`, `bg-background` |
| File tab | Top-right corner triangle using CSS border trick (`border-t-blueprint/15`) |
| Tag | `[GUIDE]` in brackets, `font-mono text-[0.65rem] tracking-wide text-blueprint/70`, top-right |
| Left margin | `border-r border-blueprint/20` with 4 horizontal tick marks at intervals (lined paper) |
| Icon | Lucide `Cloud`, `strokeWidth={1.5}`, navy, no circle background |
| Connector line | `h-px w-5 bg-blueprint/40` between icon and title |
| Title | `text-lg font-semibold text-navy`, left-aligned |
| Description | `text-sm leading-relaxed text-muted-foreground` |
| Bottom row | "Read guide" text + `ArrowUpRight` icon |
| Hover | `-translate-y-0.5` (2px lift), `shadow-md`, margin darkens (`blueprint/20→50`), 250ms ease-out |
| Subtitle | Changed to "Technical resources and reference guides" |

**Modified `src/App.tsx`:**
- Added `<SectionDivider />` between About and Resources
- Added `<SectionDivider />` between Resources and Contact

**Files:**
- Modified: `src/sections/Resources.tsx`, `src/App.tsx`

**Verification:** `npm run build` passes, visual QA approved by user.

---

### Step 11 — Contact Section Blueprint Redesign (2026-02-06)

**Modified `src/sections/Contact.tsx`:**

| Change | Details |
|--------|---------|
| Blueprint grid | Inline `BlueprintGrid` component: white SVG `<pattern>` at 5% opacity on dark `bg-primary` |
| Logo + tagline | `<Logo variant="white" size={28} />` + "Your path, properly built" at `text-white/70`, left-aligned |
| Form labels | `text-xs font-medium uppercase tracking-[0.05em] text-white/70` (technical document style) |
| Form inputs | `rounded-none`, `bg-white/5`, `border-white/20`. Focus: `border-white` + `ring-1 ring-white/30` |
| Submit button | White bg + navy text (dark-bg CTA pattern), `w-full sm:w-auto`, "Send Message →" |
| Info column | Removed rounded icon containers, inline icons `strokeWidth={1.5}`, `h-px bg-white/10` separator |
| Success state | Logo + tagline at top, `CheckCircle` line-art, white bg + navy text reset button |

**CTA fix:** User corrected orange button to white/navy. Updated CTA strategy in BOTH child and parent design-system skills, project-log constitution, and MEMORY.md to permanently eliminate orange from all buttons.

**Files:**
- Modified: `src/sections/Contact.tsx`

**Verification:** `npm run build` passes, visual QA approved by user (after CTA color fix).

---

### Step 12 — Footer Redesign (2026-02-06)

**Modified `src/components/layout/Footer.tsx`:**

| Change | Details |
|--------|---------|
| Background | Dark navy (`bg-navy`) with `FooterGrid` inline SVG pattern at 3% opacity (white lines on dark) |
| Brand block | `<Logo variant="white" size={28} />` + tagline at 70% white + description at 60% white |
| Nav columns | "QUICK LINKS" and "RESOURCES" — `text-xs font-medium uppercase tracking-[0.05em] text-white/70` |
| Link hover | Arrow (→) slides in from left via `w-0→w-4` + `opacity-0→1` transition on `group-hover/link` |
| Bottom bar | `RulerLine` SVG: horizontal line + major ticks (6px) + minor ticks (3px) at 10-15% white opacity |
| Copyright | `text-xs text-white/50`, copyright left, ABN right |
| Responsive | Mobile: centered, `flex-col items-center`; Desktop: `md:grid-cols-4`, brand spans 2 cols |
| Accessibility | Decorative SVGs have `aria-hidden="true"`, `<footer>` landmark, external links have `rel="noopener noreferrer"` |

**Files:**
- Modified: `src/components/layout/Footer.tsx`

**Verification:** `npm run build` passes, visual QA approved by user.

---

### Step 13 — Final Polish (2026-02-06)

**Deleted `src/components/ui/DataVizBackground.tsx`:**

| Change | Details |
|--------|---------|
| File deleted | Component replaced by `BlueprintBackground` in Step 7 — was still present but unused |
| Barrel export | Removed `DataVizBackground` and `Card` exports from `src/components/ui/index.ts` |

**Modified `src/styles/index.css`:**

| Change | Details |
|--------|---------|
| Removed `.btn-primary` | Orange bg button class — unused since all CTAs switched to navy inline styles |
| Removed `.btn-dark-bg` | Orange bg dark-section button class — unused, replaced by white/navy inline styles |
| Fixed `.btn-secondary:hover` | Changed from orange fill to **navy fill** + white text (matching design system spec) |
| Removed old keyframes | `float-slow`, `float-medium`, `float-fast`, `pulse-slow`, `ping-slow` + utility classes |
| Added `prefers-reduced-motion` | Global media query: disables all animations and transitions for reduced-motion users |

**Modified `src/components/layout/Header.tsx`:**

| Change | Details |
|--------|---------|
| Mobile nav easing | Changed `ease-in-out` → `ease-out` (spec: only linear or ease-out allowed) |

**Audits completed:**
- SectionDividers: ✅ All 4 placed (Hero→Services, Services→About, About→Resources, Resources→Contact)
- Micro-interactions: ✅ All match spec table (nav underlines, logo hover, card hovers, CTAs, footer arrows, form focus)
- Tagline: ✅ Present in hero, about, contact (2x), footer
- Buttons: ✅ No orange on any button — navy (light bg) or white (dark bg) only
- No grey placeholders, no floating blobs, no pulsing dots

**Files:**
- Deleted: `src/components/ui/DataVizBackground.tsx`
- Modified: `src/styles/index.css`, `src/components/ui/index.ts`, `src/components/layout/Header.tsx`

**Verification:** `npm run build` passes, visual QA approved by user.

---

_Append after each step completion._

---

## Completed Prompts

### Step 1 Prompt (Completed 2026-02-06)
> Read `project-log.md` and the design skill at `.claude/skills/design-system/SKILL.md`. Present a PLAN for Step 1. Wait for approval before writing code.

### Step 2 Prompt (Completed 2026-02-06)
> Read `project-log.md` and `.claude/skills/design-system/SKILL.md` — focus on: Brand Logo, HEADER section, Logo Treatment.
> Present a PLAN for Step 2:
> 1. Copy the brand logo to public/
> 2. Create `src/components/ui/Logo.tsx` — inline SVG with wave + bridge paths, "Cape"/"Bridge" text, hover animation
> 3. Modify `src/components/layout/Header.tsx` — integrate Logo, nav link underline-draw hover, CTA using `.btn-primary`, scroll state

### Step 3 Prompt (Completed 2026-02-06)
> Read `project-log.md` and `.claude/skills/design-system/SKILL.md` — focus on: Section Transitions — Wave/Bridge Dividers, Step 3 Detail.
> Present a PLAN for Step 3:
> 1. Create `src/components/ui/SectionDivider.tsx` — full-width SVG with wave-bridge motif

### Step 4 Prompt (Completed 2026-02-06)
> Read `project-log.md` and `.claude/skills/design-system/SKILL.md` — focus on: Hero Final Background Pattern, Step 4 Detail.
> Present a PLAN for Step 4:
> 1. Create `src/components/ui/BlueprintBackground.tsx` — static hero background with grid, construction marks, and gradient

### Step 5 Prompt (Completed 2026-02-06)
> Read `project-log.md` and `.claude/skills/design-system/SKILL.md` — focus on: HERO — "Drawing Hand" Animation, Step 5 Detail.
> Present a PLAN for Step 5:
> 1. Modify `src/sections/Hero.tsx` — add SVG overlay with wave + bridge stroke-draw animation
> 2. Add keyframes to `src/styles/index.css` — `draw-wave`, `draw-bridge`, `collision-flash`
> Key constraints: SVG stroke-dashoffset animation, feGaussianBlur glow, collision flash, responsive timing, prefers-reduced-motion support.

### Step 6 Prompt (Completed 2026-02-06)
> Read `project-log.md` and `.claude/skills/design-system/SKILL.md` — focus on: Step 6 Detail.
> Present a PLAN for Step 6:
> 1. Modify `src/components/ui/HeroAnimation.tsx` — add settle animation after strokes complete
> 2. Add keyframes to `src/styles/index.css` — settle-opacity, flash-fadeout
> Final implementation: Simple settle (paths fade to 15% opacity and stay) instead of fragment dissolution.

### Step 7 Prompt (Completed 2026-02-06)
> Read `project-log.md` and `.claude/skills/design-system/SKILL.md` — focus on: Hero Content, Step 7 Detail.
> Present a PLAN for Step 7:
> 1. Modify `src/sections/Hero.tsx` — update content, CTAs, tagline, remove trust indicators
> 2. Add `<SectionDivider />` between Hero and Services

### Step 8 Prompt (Completed 2026-02-06)
> Read `project-log.md` and `.claude/skills/design-system/SKILL.md` — focus on: SERVICES section, Step 8 Detail.
> Present a PLAN for Step 8:
> 1. Modify `src/sections/Services.tsx` — redesign cards with blueprint aesthetic
> Also fixed CTA strategy: section CTAs use navy bg (not construction orange). Updated both child and parent design-system skills.

### Step 9 Prompt (Completed 2026-02-06)
> Read `project-log.md` and `.claude/skills/design-system/SKILL.md` — focus on: ABOUT section, Step 9 Detail.
> Present a PLAN for Step 9:
> 1. Create `src/components/ui/SpecSheet.tsx` — header bar, stats with dotted leaders, blueprint border
> 2. Modify `src/sections/About.tsx` — "Why Cape Bridge", differentiator cards, SpecSheet, layout

### Step 10 Prompt (Completed 2026-02-06)
> Read `project-log.md` and `.claude/skills/design-system/SKILL.md` — focus on: RESOURCES section, Step 10 Detail.
> Present a PLAN for Step 10:
> 1. Modify `src/sections/Resources.tsx` — document-style cards with tab/fold, margin lines, bracket tags
> Added SectionDividers above and below Resources in App.tsx.

### Step 11 Prompt (Completed 2026-02-06)
> Read `project-log.md` and `.claude/skills/design-system/SKILL.md` — focus on: CONTACT section, Step 11 Detail.
> Present a PLAN for Step 11:
> 1. Modify `src/sections/Contact.tsx` — dark bg + blueprint grid, logo + tagline, form styling, submit button, info column
> CTA fix: changed orange submit to white/navy. Updated both child and parent design-system skills to permanently remove orange from all buttons.

### Step 12 Prompt (Completed 2026-02-06)
> Read `project-log.md` and `.claude/skills/design-system/SKILL.md` — focus on: FOOTER section, Step 12 Detail.
> Present a PLAN for Step 12:
> 1. Modify `src/components/layout/Footer.tsx` — full redesign with blueprint aesthetic
> Dark navy bg, blueprint grid at 3%, Logo 28px + tagline, uppercase tracked nav headers, arrow-hover links, ruler bar with ticks, copyright/ABN.

### Step 13 Prompt (Completed 2026-02-06)
> Read `project-log.md` and `.claude/skills/design-system/SKILL.md` — focus on: Step 13 Detail, Micro-Interactions table, Quality Checklist.
> Present a PLAN for Step 13. Wait for approval before writing code.
> Deleted DataVizBackground, removed unused orange button classes, fixed `.btn-secondary` hover to navy, added global `prefers-reduced-motion`, fixed `ease-in-out` to `ease-out` in Header.

---

_Move prompts here once the step is done._

---

## Step Detail Reference

Below are the detailed specs for each step. Claude Code should read the relevant step 
before planning. These come from the design skill but are expanded with implementation details.

### Step 1 Detail: Colour Tokens, Typography & CTA Base Styles

**Add to `capebridge-website/src/styles/index.css`:**

**Colour tokens (CSS custom properties):**
- `--navy: oklch(0.25 0.06 250)`
- `--teal: oklch(0.65 0.15 195)`
- `--blueprint-blue: oklch(0.55 0.12 240)`
- `--construction-orange: oklch(0.70 0.18 55)`
- Verify existing: `--primary`, `--background`, `--foreground`, `--muted-foreground`, `--border`

**Typography variables:**
- Tracking for each hierarchy level (H1: -0.02em, H2: -0.01em, eyebrow: 0.05em, tagline: 0.03em, button: 0.02em)

**CTA button classes:**
- `.btn-primary` — construction orange bg, white text, max 2px radius, 1px navy border. Hover: darken bg, border 2px
- `.btn-secondary` — ghost: transparent bg, navy border, navy text → orange bg + white text on hover
- `.btn-dark-bg` — for dark sections: white bg + navy text OR orange bg + white text

**Timing variables:**
- `--duration-fast: 150ms`, `--duration-base: 250ms`, `--duration-slow: 300ms`
- `--ease-out: ease-out`

**Animation keyframes:**
- `underline-draw` — for nav link hover (scaleX 0→1)
- `fade-in` — generic opacity 0→1
- `arrow-slide-in` — for footer link hover (translateX)

**Test:** `npm run build` passes, dev server renders, no existing components broken.

---

### Step 2 Detail: Logo SVG Component & Header Redesign

**Copy brand asset first:** `copy brand\capebridge_logo_v2.png capebridge-website\public\capebridge_logo_v2.png`

**Create `src/components/ui/Logo.tsx`:**
- Inline SVG: wave + bridge mark paths
- "Cape" (navy, 600) + "Bridge" (teal, 500) text beside icon
- Hover: wave `translateX(-2px)`, bridge `translateX(2px)`, 0.3s ease-out
- Props: `size` (default 36), `variant` ("default" | "white")

**Modify `src/components/layout/Header.tsx`:**
- Replace text wordmark with `<Logo />`
- Nav links: `::after` pseudo, `scaleX(0)→scaleX(1)` on hover
- Active section: orange dot or underline
- CTA: "Get in Touch" using `.btn-primary`
- Scroll: logo 36→32px, shadow, tighter tracking
- Mobile hamburger: update styling

**Test:** All breakpoints (375, 768, 1024, 1440), hover states, scroll state, mobile nav.

---

### Step 3 Detail: Section Divider Component

**Create `src/components/ui/SectionDivider.tsx`:**
- Full-width SVG: straight line → wave curve → bridge crossing at center → straight line
- Navy at 10-15% opacity, ~1.5px stroke
- `viewBox` + `preserveAspectRatio` for responsive scaling
- ~40-60px height, accepts `className` prop

**Test:** Drop between two sections, check all breakpoints.

---

### Step 4 Detail: BlueprintBackground (Static Hero Background)

**Create `src/components/ui/BlueprintBackground.tsx`:**
- SVG `<pattern>` grid (40px spacing) at ~3% opacity
- Scattered diagonal segments (~5-8% opacity, deterministic positions)
- Construction marks: crosses + circles at ~10-15 intersections
- Radial gradient: center lighter, edges darker
- `prefers-reduced-motion`: 0.5s fade-in
- Mobile (<640px): 80px spacing (50% density)
- `position: absolute; inset: 0`

**Test:** Renders in full-screen div, correct density, mobile half-density, reduced-motion fade.

---

### Step 5 Detail: Hero Animation Phases 1-3

**Modify `src/sections/Hero.tsx`:**
- SVG overlay: position absolute, pointer-events none
- Wave path: `stroke-dashoffset` animation, navy, 4-6px, 0-1.2s
- Bridge path: same technique, teal, right-to-left, 0-1.2s (simultaneous)
- Trailing glow: SVG `feGaussianBlur` filter
- Collision flash: `<circle>` at intersection, opacity pulse, 0.3s, delay 1.2s
- Strokes hold at full opacity 1.5-1.8s

**Add keyframes to `index.css`:** `draw-wave`, `draw-bridge`, `collision-flash`

**Responsive:** Tablet 2s total, mobile 1.5s + 3px strokes, reduced-motion: hide layer.

---

### Step 6 Detail: Hero Animation Phases 4-5

**Modify `src/sections/Hero.tsx`:**
- Phase 4 (1.8-2.5s): ~15-20 fragments, each with random drift (20-50px), rotation, opacity 1→0.08
- Phase 5 (2.5-3s): fragments settle, match BlueprintBackground diagonal segments
- Animation layer fades to opacity 0 at 3s
- Mobile: straight fade (no drift)

**Test:** Full sequence 0-3s, no visual pop at transition, nothing moves after 3s.

---

### Step 7 Detail: Hero Content & Layout

**Modify `src/sections/Hero.tsx`:**
- Eyebrow: "Your path, properly built" (tagline as eyebrow, text-xs, font-medium, tracking-[0.05em], navy, NOT uppercase)
- Headline: teal span uses `text-teal`
- Primary CTA: "Get in Touch" — navy bg, white text, `cursor-pointer`, arrow icon
- Secondary CTA: "Explore Services" `.btn-secondary`
- Remove grey placeholder trust indicators
- Z-index: BlueprintBackground → animation → content
- `<SectionDivider />` between Hero and Services
- Mobile: CTAs stack full-width (`w-full sm:w-auto`)

---

### Step 8 Detail: Services Section

**Modify `src/sections/Services.tsx`:**
- Header: "What We Build" + "End-to-end solutions, engineered for results."
- Cards: 2px radius, blueprint blue border 30%, corner markers (L-shapes), line-art icons top-left, label connector line, left-aligned text
- Hover: border 30→100%, measurement line, ~2% blue tint. 250ms ease-out. No scale.
- Grid: 3→2→1, graph-paper lines between cards
- Bottom CTA: "Discuss Your Project" — navy bg style (not `.btn-primary`/orange)
- SectionDividers above and below

---

### Step 9 Detail: About Section + SpecSheet

**Create `src/components/ui/SpecSheet.tsx`:**
- Header bar: "Cape Bridge — At a Glance" (navy bg, white text)
- Stats with dotted leader lines
- Blueprint blue border, sharp corners

**Modify `src/sections/About.tsx`:**
- SectionDivider at top, "Why Cape Bridge", tagline in copy
- Differentiator cards: left border only (2px navy), line-art icons, no circles
- CTA: "Let's Talk" `.btn-secondary`
- Responsive: single column, SpecSheet below

---

### Step 10 Detail: Resources Section

**Modify `src/sections/Resources.tsx`:**
- Document-style cards: taller ratio, tab/fold at top, left margin with ticks
- Tags: "[GUIDE]" brackets, not pills
- Hover: 2px lift, shadow, margin darkens
- SectionDivider below

---

### Step 11 Detail: Contact Section

**Modify `src/sections/Contact.tsx`:**
- Dark bg + blueprint grid (white lines, 5% opacity)
- `<Logo variant="white" size={28} />` + tagline at 70% white
- Form: sharp borders, tracked labels, focus: white border + inner glow
- Submit: white bg + navy text (dark-bg CTA pattern), full-width mobile, "Send Message →"
- Info: line-art icons, separator lines
- Success: logo + tagline

---

### Step 12 Detail: Footer

**Modify `src/components/layout/Footer.tsx`:**
- Brand: Logo 28px + tagline + description
- Nav: uppercase tracked headers, arrow hover on links
- Bottom bar: ruler line with ticks, copyright/ABN
- Background: darker, optional grid 3%

---

### Step 13 Detail: Final Polish

- Verify all SectionDividers placed
- Audit all micro-interactions against spec table
- Timing: 150-300ms, ease-out/linear only
- Movement: ≤4px, ≤1.02 scale
- Remove DataVizBackground, old styles, grey placeholders
- Responsive sweep: 375, 768, 1024, 1440
- `prefers-reduced-motion` sweep
- Tagline audit: hero, about, contact, footer
- Quality Checklist (all items)
- Performance: Lighthouse, LCP, layout shifts
- **COMMIT:** `feat: visual redesign — blueprint/architectural aesthetic`
