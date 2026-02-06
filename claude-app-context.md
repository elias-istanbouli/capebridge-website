# Cape Bridge Website — Current State

_Last updated: 2026-02-06 after Step 13_

## What This Project Is

**Cape Bridge** is an Australian Data, Tech & AI Consultancy. This is their single-page marketing website at `capebridge.com.au`.

The site has undergone a full visual redesign from a generic AI/SaaS look to a distinctive **blueprint/architectural aesthetic** — engineered, precise, construction-themed. Think technical drawings, not corporate stock photos.

**Tech stack:** React 19, TypeScript, Tailwind CSS v4 (CSS-first config), Vite 7, deployed on Vercel.

## Brand Identity

**Design philosophy:** Professional but approachable. Data-driven aesthetic with subtle nods to technical drawings, structured grids, and precision. Visitors should feel they're dealing with experts who build things properly.

**Tagline:** "Your path, properly built" — appears in hero, about, contact, footer.

**Color palette:**
| Token | Value | Purpose |
|-------|-------|---------|
| `--navy` | `oklch(0.25 0.06 250)` | Primary brand color, headings, logo wave stroke |
| `--teal` | `oklch(0.65 0.15 195)` | Secondary brand, accents, logo bridge stroke |
| `--blueprint-blue` | `oklch(0.55 0.12 240)` | Background grids, construction marks, card borders |
| `--construction-orange` | `oklch(0.70 0.18 55)` | Accent ONLY (nav underlines, highlights) — NEVER on buttons |

**Logo:** SVG with two crossing paths — a wave (navy) and a bridge (teal). On hover, they subtly shift apart. Text: "Cape" (navy, semibold) + "Bridge" (teal, medium).

**Typography:** Clean sans-serif, tight tracking on headlines, wider tracking on eyebrows and taglines. No Inter/Roboto/Arial.

**Buttons:** ALL buttons use navy bg + white text (light backgrounds) or white bg + navy text (dark backgrounds). Construction orange is NEVER used on any button. Secondary = ghost with navy border → navy fill on hover.

## Current State

- **Progress:** All 13 implementation steps complete — ready to commit
- **What's working:** Color tokens, typography, CTA buttons (navy/white only), Logo component, Header (nav underline-draw, scroll state, navy CTA), SectionDivider (wave-bridge motif between all sections), BlueprintBackground, HeroAnimation (stroke-draw + collision flash + settle to 15% opacity), Hero content/layout, Services section (blueprint cards with corner markers), About section (SpecSheet, differentiator cards with left border), Resources section (document-style cards with tab/fold, margin ticks, bracket tags), Contact section (blueprint grid overlay, logo + tagline, sharp form inputs, white/navy submit CTA, line-art info icons), Footer (dark navy bg, blueprint grid, logo + tagline, ruler bar, arrow-hover nav links)
- **Final polish done:** DataVizBackground deleted, old animations removed, `.btn-secondary` hover fixed (navy not orange), `prefers-reduced-motion` global rule added, `ease-in-out` → `ease-out` in Header
- **Build status:** ✅ Clean
- **Not yet done:** Git commit and Vercel deploy

## What Was Just Done (Step 13)

Final polish and cleanup:
- Deleted `DataVizBackground.tsx` and its old float/pulse/ping keyframes
- Removed unused `.btn-primary` and `.btn-dark-bg` orange button classes
- Fixed `.btn-secondary:hover` from orange to navy (matching spec)
- Added global `prefers-reduced-motion` media query (disables all animations/transitions)
- Fixed `ease-in-out` → `ease-out` in Header mobile menu
- Removed `Card` and `DataVizBackground` exports from barrel file
- Audited: all 4 section dividers placed, all micro-interactions match spec, tagline in 4 locations, no orange on any button

## Key Decisions Made

- Blueprint/architectural aesthetic (not generic AI/SaaS)
- Pure SVG + CSS for hero animation (~15KB budget, no JS animation libraries)
- **ALL buttons use navy (light bg) or white (dark bg) — construction orange is NEVER used on buttons**
- Header CTA uses navy (navigational)
- Logo uses inline SVG paths for hover animation control
- Nav underline draws from center, 80% width
- BlueprintBackground uses deterministic positions (not random) for consistency
- HeroAnimation paths scaled from Logo.tsx mathematically
- Hero animation settles to 15% opacity (user preferred over fragment dissolution)
- Service cards use blueprint borders + corner markers (crop mark aesthetic)
- SpecSheet uses dotted leader lines for technical datasheet feel
- Differentiator cards use left border only (not full card border)
- Resource cards use document-style shape with lined-paper margin and bracket tags
- Contact form uses white/navy CTA on dark background (not orange)

## Known Issues

None.

## File Structure

```
src/
├── components/
│   ├── ui/           # Button, Logo, SectionDivider, BlueprintBackground, HeroAnimation, SpecSheet, SectionWrapper
│   └── layout/       # Header, Footer
├── sections/         # Hero, Services, About, Resources, Contact
├── styles/           # index.css (Tailwind + custom tokens + keyframes)
└── lib/              # utils.ts (cn helper)
```

## Where to Find Detailed Specs

For Claude Code sessions, detailed specs are in skill files:
- **Design system:** `.claude/skills/design-system/SKILL.md`
- **Testing protocol:** `.claude/skills/website-testing/SKILL.md`
- **Project management:** `.claude/skills/project-management/SKILL.md`
- **Implementation plan:** `project-log.md` (step details, prompts, summaries)
