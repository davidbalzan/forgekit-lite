---
mode: edit
description: Initialize a new project with ForgeKit Lite documentation structure
---

# Kickstart - Project Initialization

Initialize a new project with a lightweight documentation structure.

## Instructions

### Stage 1: Project Basics

Gather: project name, type (web app, API, CLI, etc.), brief description.

### Stage 2: Tech Stack

Ask about frontend, backend, and infrastructure choices.

### Stage 3: Project Phases

Ask about MVP scope. Suggest a 3-phase structure.

Generate using `docs/templates/`:

- `docs/PRODUCTION_ROADMAP.md` — from `PRODUCTION_ROADMAP_TEMPLATE.md`
- `docs/phases/phase1/README.md` — from `PHASE_README_TEMPLATE.md`

### Stage 4: Initialize Focus

Create `CURRENT_FOCUS.md` at project root pointing to Phase 1.

### Stage 5: Summary

List created files and suggest next steps:

1. Use `plan-phase` to create Phase 1 task breakdown
2. Use `start-session` to begin development

## Output Files

| File                           | Source Template                  | Purpose               |
| ------------------------------ | -------------------------------- | --------------------- |
| `docs/PRODUCTION_ROADMAP.md`   | `PRODUCTION_ROADMAP_TEMPLATE.md` | Phase overview        |
| `docs/phases/phase1/README.md` | `PHASE_README_TEMPLATE.md`       | First phase overview  |
| `CURRENT_FOCUS.md`             | (generated)                      | Active work reference |
