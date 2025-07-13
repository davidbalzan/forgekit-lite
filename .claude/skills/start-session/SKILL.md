---
name: start-session
description: Load project context from ForgeKit docs at the start of a session
disable-model-invocation: true
argument-hint: "[optional: specific area to focus on]"
allowed-tools: Read, Glob, Grep
---

# Start Session - Context Loader

Load context from project documentation to understand current state.

## Instructions

1. **Read CURRENT_FOCUS.md** — quick reference for active work
2. **Read docs/PRODUCTION_ROADMAP.md** — current phase and overall progress
3. **Read the active phase README** — current phase goals
4. **Read the active phase TASKS file** — specific task breakdown
5. **Summarize for the user**:
   - Current phase and task in progress
   - What's been completed recently
   - What's blocked or needs attention
   - Suggested next steps

## Key Files

- `CURRENT_FOCUS.md` — Active work context
- `docs/PRODUCTION_ROADMAP.md` — Phase overview and progress
- `docs/phases/phaseN/README.md` — Current phase overview
- `docs/phases/phaseN/PHASEN_TASKS.md` — Detailed task breakdown

## Output Format

```
## Session Context

**Active Phase**: Phase N - [Name]
**Current Task**: [Task description]
**Status**: [In Progress / Blocked / etc.]

### Recent Progress
- [What was completed]

### Blockers
- [Any blocking items, or "None"]

### Suggested Next Steps
1. [First priority]
2. [Second priority]
```

If the user provided $ARGUMENTS, focus the summary on that area.
