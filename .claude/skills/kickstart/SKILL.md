---
name: kickstart
description: Initialize a new project with ForgeKit Lite documentation structure
disable-model-invocation: true
argument-hint: "<project name>"
---

# Kickstart - Project Initialization

Initialize a new project with a lightweight documentation structure for AI-assisted development.

## Instructions

Follow this guided flow to set up a new project.

### Stage 1: Project Basics

Gather information:

1. **Project name** — What's the project called?
2. **Project type** — Web app, API, CLI, library, etc.
3. **Brief description** — One sentence about what it does

### Stage 2: Tech Stack

Ask about the key layers (skip if not applicable):

- **Frontend**: Framework, styling, state management
- **Backend**: Runtime, framework, database
- **Infrastructure**: Package manager, deployment target

### Stage 3: Project Phases

Ask about scope:

1. What's the MVP?
2. What comes after MVP?

Suggest a 3-phase structure based on project type:

```
Phase 1: Foundation (Setup, Core Infrastructure)
Phase 2: Core Features (Main Functionality)
Phase 3: Polish (UX, Performance, Launch)
```

Generate using templates in `docs/templates/`:

- `docs/PRODUCTION_ROADMAP.md` — from `PRODUCTION_ROADMAP_TEMPLATE.md`
- `docs/phases/phase1/README.md` — from `PHASE_README_TEMPLATE.md`

### Stage 4: Initialize Focus

Create `CURRENT_FOCUS.md` at project root pointing to Phase 1.

### Stage 5: Summary

Show what was created and suggest next steps:

```
## Project Initialized: [Project Name]

### Files Created
- docs/PRODUCTION_ROADMAP.md
- docs/phases/phase1/README.md
- CURRENT_FOCUS.md

### Next Steps
1. Run `/plan-phase 1 [Phase Name]` to create detailed tasks
2. Run `/start-session` to begin development
```

## Output Files

| File                           | Source Template                  | Purpose                          |
| ------------------------------ | -------------------------------- | -------------------------------- |
| `docs/PRODUCTION_ROADMAP.md`   | `PRODUCTION_ROADMAP_TEMPLATE.md` | Phase overview and current state |
| `docs/phases/phase1/README.md` | `PHASE_README_TEMPLATE.md`       | First phase overview             |
| `CURRENT_FOCUS.md`             | (generated)                      | Active work quick reference      |

## Related Skills

After kickstart, use these in order:

1. `/plan-phase 1 [name]` — Create Phase 1 task breakdown
2. `/start-session` — Begin your first coding session

## Project to initialize: $ARGUMENTS
