# Kickstart - Project Initialization

**Objective**: Initialize a new project with ForgeKit Lite documentation structure.

## Stage 1: Project Basics

Gather information:

1. Project name
2. Project type (Web app, API, CLI, library, etc.)
3. Brief description (one sentence)

## Stage 2: Tech Stack

Ask about key layers (skip if not applicable):

- **Frontend**: Framework, styling, state management
- **Backend**: Runtime, framework, database
- **Infrastructure**: Package manager, deployment target

## Stage 3: Project Phases

Ask about scope:

1. What's the MVP?
2. What comes after MVP?

Suggest a 3-phase structure. Generate using `docs/templates/`:

- `docs/PRODUCTION_ROADMAP.md` — from `PRODUCTION_ROADMAP_TEMPLATE.md`
- `docs/phases/phase1/README.md` — from `PHASE_README_TEMPLATE.md`

## Stage 4: Initialize Focus

Create `CURRENT_FOCUS.md` at project root pointing to Phase 1.

## Stage 5: Summary

List all created files and suggest next steps:

1. `/plan-phase` — Create Phase 1 task breakdown
2. `/start-session` — Begin development

**Output**: Project documentation structure ready for development.
