# Cape Bridge Website — Current State

_Last updated: 2026-02-06 — Pre-implementation (Step 0 of 13)_
_Project: Landing page for Cape Bridge, a data/tech/AI consultancy_
_Repo: capebridge-website/ (sub-folder, separate GitHub repo)_
_Tech stack: React, TypeScript, Tailwind CSS, Vite_

## What This Project Is
Single-page marketing site for Cape Bridge consultancy. Currently has a working site with a generic AI/SaaS aesthetic (floating blobs, rounded cards, soft gradients). Being redesigned with a blueprint/architectural visual language — engineered, precise, construction-themed.

## Current State
- **Progress:** 0 of 13 implementation steps complete
- **What's working:** Existing site renders and builds. All sections exist (Header, Hero, Services, About, Resources, Contact, Footer)
- **What's not yet built:** All visual redesign work. New components: Logo.tsx, BlueprintBackground.tsx, SectionDivider.tsx, SpecSheet.tsx. Hero animation. All section restyling.
- **Build status:** ✅ Clean (existing code)

## What Was Just Done
- Full visual redesign specification created (design-system skill)
- 13-step implementation plan created (project-log.md)
- Project management paradigm established (project-management skill)
- No code changes yet

## What's Next — Step 1: Colour Tokens, Typography & CTA Base Styles
Add CSS custom properties for new colours (navy, teal, blueprint blue, construction orange), typography hierarchy variables, CTA button classes (.btn-primary, .btn-secondary, .btn-dark-bg), animation timing variables, and reusable keyframes to index.css. Additive changes only — nothing should break.

## Key Decisions Made
- Construction orange `oklch(0.70 0.18 55)` chosen for CTAs (construction/safety signage metaphor)
- Pure SVG + CSS for hero animation (no JS runtime cost, ~15KB budget)
- Blueprint/architectural aesthetic across all sections
- "Your path, properly built" tagline appears in hero, about, contact, footer

## Known Issues
- Trust indicators in hero are grey placeholders — will remove or replace with real logos
- DataVizBackground component exists and needs to be replaced by BlueprintBackground (Step 4/13)
- Need to confirm exact tech stack on first Claude Code session

## Architecture Notes
- Design system is a shared skill — applies to all Cape Bridge repos
- Logo component will have "default" and "white" variants for light/dark backgrounds
- Hero animation has 5 phases over 3 seconds, with mobile and reduced-motion fallbacks
- SectionDivider is reusable between all major sections
