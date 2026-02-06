---
name: website-testing
description: Testing protocol for Cape Bridge websites. Use after implementing features and before marking steps complete.
---

# Website Testing Skill

Testing protocol for Cape Bridge marketing sites. Focus on what matters: visuals, accessibility, performance, and critical user flows.

---

## Testing Hierarchy

Run these checks in order. Stop and fix issues before proceeding to the next level.

### Level 1: Build & Type Safety (Every Change)
```bash
npm run build          # Must pass with no errors
npm run dev            # Dev server starts, no console errors
```

### Level 2: Visual QA (Every UI Change)

**Breakpoint sweep** — check at these widths:
- 375px (mobile)
- 768px (tablet)
- 1024px (desktop)
- 1440px (large desktop)

**Checklist:**
- [ ] No horizontal overflow
- [ ] Text is readable (no truncation, overlap)
- [ ] Images/icons display correctly
- [ ] Spacing looks intentional
- [ ] Animations play correctly (if applicable)
- [ ] Hover states work on desktop
- [ ] Touch targets adequate on mobile (min 44x44px)

### Level 3: Accessibility (Every UI Change)

**Keyboard navigation:**
- [ ] Tab order is logical
- [ ] All interactive elements are reachable
- [ ] Focus states are visible
- [ ] Escape closes modals/menus

**Screen reader (spot check):**
- [ ] Headings create logical outline
- [ ] Images have alt text (or are decorative with aria-hidden)
- [ ] Links/buttons have descriptive text
- [ ] Form inputs have labels

**Automated:**
```bash
# If axe-core or similar installed:
npx axe <url>
# Or use browser DevTools Lighthouse accessibility audit
```

### Level 4: Performance (After Major Changes)

Run Lighthouse in Chrome DevTools (Incognito mode):
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

**Core Web Vitals targets:**
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

### Level 5: Cross-Browser (Before Milestone Commits)

Test in:
- [ ] Chrome (primary)
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile Safari / Chrome (real device or emulator)

### Level 6: Form E2E (After Contact Section Changes)

**Manual test:**
1. Fill form with valid data → Submit → Success state shows
2. Submit with empty required fields → Validation errors display
3. Submit with invalid email → Email validation error shows

**Optional automation (future):**
```bash
# If Playwright/Cypress installed:
npx playwright test
```

---

## When to Run What

| Trigger | Tests to Run |
|---------|--------------|
| Any code change | Level 1 (build) |
| UI component change | Levels 1-2 |
| New section/feature | Levels 1-3 |
| Before step completion | Levels 1-3 |
| Before milestone commit | Levels 1-5 |
| After Contact section changes | Level 6 |

---

## Quick Reference for Claude Code

When closing a step, run at minimum:

```bash
# Level 1
npm run build
```

### Level 2 — Visual QA (REQUIRES USER)

**IMPORTANT:** Claude cannot visually verify UI changes. For any step involving visual changes:

1. Start dev server and provide the URL to the user
2. List the specific changes made that need visual verification
3. **ASK THE USER** to check the changes at key breakpoints (375px, 768px, 1024px, 1440px)
4. Wait for user confirmation before marking testing complete

**Do NOT** mark Visual QA as complete without user verification. Simply noting "Visual QA checklist items" is insufficient.

Example prompt to user:
> "Please verify these visual changes at localhost:5178:
> - [ ] Hero CTA is navy (not orange)
> - [ ] Tagline appears as eyebrow text
> - [ ] Hover states show pointer cursor
> Let me know if anything looks off."

### Level 3 — Accessibility

- Tab through the page, verify focus states visible
- Check heading hierarchy in DevTools

Report any issues found in the step summary.

---

## Tools (Optional, Add Later)

These are NOT required now but could be added if the project grows:

| Tool | Purpose | When to Add |
|------|---------|-------------|
| Playwright | E2E tests for form, navigation | If form logic becomes complex |
| axe-core | Automated a11y scanning | If a11y issues keep recurring |
| Percy/Chromatic | Visual regression | If design changes frequently break things |

For a landing page, manual testing with this checklist is sufficient.
