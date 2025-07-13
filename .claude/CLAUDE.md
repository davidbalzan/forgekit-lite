# ForgeKit Lite - Project Instructions

## Overview

ForgeKit Lite is a production monorepo starter with an AI workflow layer for structured development.

## Key Files

- `CURRENT_FOCUS.md` — Active work context (read this first)
- `docs/PRODUCTION_ROADMAP.md` — Phase overview and progress
- `docs/phases/phaseN/PHASEN_TASKS.md` — Detailed task breakdowns

## Available Skills

| Skill            | Purpose                               |
| ---------------- | ------------------------------------- |
| `/kickstart`     | Initialize project documentation      |
| `/start-session` | Load project context at session start |
| `/plan-phase`    | Generate phase task breakdown         |
| `/check-task`    | Mark tasks as complete                |
| `/update-focus`  | Update current work status            |

## Workflow

```
/kickstart → /plan-phase → /start-session → Code → /check-task → /update-focus
```

## Tech Stack

- **Frontend**: React 19, Vite 6, Tailwind CSS 4
- **Backend**: Hono 4, Node.js 22+
- **Infrastructure**: pnpm, Turborepo, TypeScript 5

## Commands

```bash
pnpm dev          # Start dev servers
pnpm build        # Production build
pnpm typecheck    # Type checking
pnpm lint         # Linting
pnpm test         # Run tests
```
