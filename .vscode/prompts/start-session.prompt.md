---
mode: ask
description: Load project context from ForgeKit docs at the start of a session
---

# Start Session - Context Loader

Load context from project documentation to understand current state.

## Instructions

1. **Read CURRENT_FOCUS.md** — active work context
2. **Read docs/PRODUCTION_ROADMAP.md** — phase status and progress
3. **Read the active phase README** — current phase goals
4. **Read the active phase TASKS file** — task breakdown

## Output Format

```markdown
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
