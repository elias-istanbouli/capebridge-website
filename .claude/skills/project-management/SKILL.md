# Project Management — Claude Code Operating Paradigm

This skill defines how Claude Code operates across all Cape Bridge projects.
Read this FIRST at the start of every session.

---

## Core Principle

**Files on disk are the only persistent memory.** Claude Code's context gets cleared/compacted regularly. Claude Desktop has no memory between chats. Everything that matters must be written to files.

---

## Session Flow

Every Claude Code session follows this exact sequence:

### 1. Orient (start of session)
```
Read these files in order:
1. CLAUDE.md                    → Project constitution and rules
2. project-log.md               → What's been done, what's next, the current step's prompt
3. Relevant skill files         → Design specs, guide specs, etc.
```
If `project-log.md` has a "## Next Prompt" section, that tells you exactly what to do.

### 2. Plan (before writing any code)
- Present a PLAN for the current step
- Show: what files will be created/modified, what changes will be made, key decisions
- **WAIT for user approval** before writing any code
- If user says "approved" or "go", proceed to implement

### 3. Implement (after approval)
- Make the changes described in the plan
- Test as you go (`npm run build`, dev server, etc.)
- Do NOT commit to git unless explicitly told to

### 4. Close Step (before clearing/compacting)
This is the most critical part. Execute ALL of these:

```
a) TEST        → Run testing levels per website-testing skill:
                  - Level 1: Build (always)
                  - Level 2: Visual QA — REQUIRES USER VERIFICATION
                    * Provide dev server URL and list of visual changes
                    * ASK USER to verify at breakpoints (375, 768, 1024, 1440)
                    * Wait for confirmation before marking complete
                    * Do NOT rubber-stamp this — user must actually check
                  - Level 3: Accessibility (keyboard nav, focus states)
                  - Before milestone commit: Levels 1-5
                  - After Contact changes: Level 6 (form E2E)
                  Document any issues found in step summary
b) LOG         → Update project-log.md:
                  - Mark current step ✅ with date
                  - Write step summary (what was done, files changed, decisions, issues)
                  - Write the NEXT PROMPT (see format below)
                  - Move current "Next Prompt" to "Completed Prompts" section
c) SKILLS      → ALWAYS check if skills need updating after each step:
                  KEY RULE: If implementation DIFFERS from spec, update the spec.
                  Ask: "Did I build something different from what the skill describes?"
                  - design-system: Did visual/animation behavior change from spec?
                  - website-testing: New testing patterns or checklist items?
                  - project-management: New workflow improvements or lessons?
                  If YES: Update the skill file to match what was actually built
                  IMPORTANT: Check BOTH child AND parent .claude/skills/ folders
                  (Cape Bridge has shared skills at parent level that may need syncing)
d) CONTEXT     → Update claude-app-context.md (project level)
                  Then update parent claude-app-context.md (add/update this project's section)
e) REPORT      → Tell the user: "Ready to clear. Next prompt is in project-log.md"
```

### 5. Clear/Compact
- User triggers `/compact` or clears context
- Next session starts at step 1 (Orient) using the files on disk

---

## File Formats

### project-log.md Format
```markdown
# [Project Name] — Project Log

## Constitution
[Copied from CLAUDE.md — first section so every session sees the rules]

## Close Step Checklist (MANDATORY before clearing context)
a) TEST    → Run website-testing skill Levels 1-3 minimum (build, visual QA, a11y)
b) LOG     → Update project-log.md (mark ✅, summary, next prompt, move to completed)
c) SKILLS  → Check if skills need updating (design-system, website-testing, etc.)
d) CONTEXT → Update claude-app-context.md (project level + parent level)
e) REPORT  → Tell user: "Ready to clear. Next prompt is in project-log.md"
> This checklist MUST be visible in every project-log.md so Claude doesn't miss it.

## Project Overview
[What this project is, what it's building, key tech stack]

## Implementation Plan
[The full step-by-step plan with status]

| Step | Description | Status | Date |
|------|-------------|--------|------|
| 1    | Description | ✅     | 2026-02-06 |
| 2    | Description | ⬜     | — |
| ...  | ...         | ...    | ... |

## Next Prompt
> **Step N: [Title]**
> [Ready-to-paste prompt for the next session. Includes what to do, 
> key context from previous steps, and any warnings/notes.]

## Step Summaries
### Step 1 — [Title] (YYYY-MM-DD)
- **Implemented:** ...
- **Files changed:** ...
- **Decisions:** ...
- **Issues/notes for future steps:** ...

### Step 2 — [Title] (YYYY-MM-DD)
...

## Completed Prompts
[Archive of prompts that have been used — for reference only]

### Step 1 Prompt (DONE ✅)
> ...
```

### claude-app-context.md Format (project level)
```markdown
# [Project Name] — Current State

_Last updated: YYYY-MM-DD after Step N_

## What This Project Is
[1-2 sentences]

## Current State
- Steps completed: 1-N of M
- What's working: ...
- What's not yet built: ...

## What Was Just Done (Step N)
[2-3 sentences about the most recent step]

## What's Next (Step N+1)
[2-3 sentences about the next step]

## Key Decisions Made So Far
- [Decision 1]
- [Decision 2]

## Known Issues
- [Issue 1]
```

### claude-app-context.md Format (main/parent level)
```markdown
# Cape Bridge — Project Context

_Last updated: YYYY-MM-DD_

## Active Projects

### capebridge-website (Landing Page)
- Status: Step N of M complete
- Current: [what's being worked on]
- Next: [what's coming]
- Key decisions: ...

### cloud-architecture-guide
- Status: ...
- ...

## Cross-Project Notes
- [Anything that affects multiple projects]
```

---

## Sub-Project Initialisation

When creating a new sub-project folder:

```
1. Create the sub-folder (e.g., capebridge-website/)
2. Copy from parent:
   - CLAUDE.md → sub-folder/CLAUDE.md (add project-specific section at top)
   - .claude/skills/ → sub-folder/.claude/skills/ (all skills)
   - Any brand assets needed → sub-folder/public/ (or appropriate location)
3. Create in sub-folder:
   - project-log.md (using format above, paste constitution as first section)
   - claude-app-context.md (initial state)
4. Init the repo, scaffold the project
5. First commit: "chore: project scaffold with skills and constitution"
```

---

## Skill Propagation Rules

Skills flow in TWO directions:

**Down (parent → child):** At project init, and when parent skills are updated
```
copy .claude\skills\* → sub-folder\.claude\skills\*
```

**Up (child → parent):** When something reusable is learned during a step
```
copy sub-folder\.claude\skills\[skill] → .claude\skills\[skill]
```

Only propagate UP if the learning is genuinely cross-project (e.g., a better button pattern, a new tool technique). Project-specific details stay in the project.

---

## Commit Strategy

- Do NOT commit during implementation steps (work in progress may be broken between steps)
- Commit at logical milestones:
  - After project init/scaffold
  - After a major feature is complete (e.g., all 13 design steps done)
  - When explicitly told to commit
- Before committing: update parent claude-app-context.md and propagate skills up
- Commit message format: `feat: [description]` / `fix: [description]` / `chore: [description]`

---

## Useful Prompts

These are starter prompts for common situations. Copy and adapt as needed.

### Starting a new session (after clear/compact)
```
Read project-log.md and the Next Prompt section. Orient yourself, 
then present a plan for the next step. Wait for my approval before coding.
```

### Starting a brand new sub-project
```
I'm creating a new sub-project called [name] under the capebridge/ root.
Follow the Sub-Project Initialisation steps in the project-management skill.
Copy constitution, skills, and brand assets. Create project-log.md and 
claude-app-context.md. Then present a plan for the first implementation step.
```

### Resuming after a long break
```
I've been away. Read project-log.md and claude-app-context.md to understand 
where we are. Summarise the current state and what's next. Don't write any 
code yet.
```

### End of a major milestone (ready to commit)
```
We've completed [milestone]. Before committing:
1. Run final build check
2. Update project-log.md with final summary
3. Update claude-app-context.md (project level)
4. Propagate any reusable skills up to parent .claude/skills/
5. Update parent claude-app-context.md
6. Then commit with message: "feat: [description]"
```

### Asking Claude Desktop for help
```
[Paste contents of claude-app-context.md]
Given this project state, I need help with [question].
```
