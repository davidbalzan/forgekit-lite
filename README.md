# ForgeKit Lite

A production-ready monorepo starter with an AI workflow layer. Clone it, run 5 slash commands, and build with an AI assistant that never loses context between sessions.

**Works with Claude Code, Cursor, and VS Code Copilot.**

---

## Why ForgeKit Lite?

AI coding assistants forget everything between sessions. You end up re-explaining your project, your progress, and your next steps every time.

ForgeKit Lite solves this with 5 slash commands that read and write structured markdown files. Your AI assistant always knows where you left off, what's done, and what's next — without you repeating yourself.

---

## Quick Start

```bash
git clone https://github.com/davidbalzan/forgekit-lite.git
cd forgekit-lite
pnpm install
cp .env.example .env
pnpm dev
```

- **Frontend** → http://localhost:5173
- **API** → http://localhost:3000/api/health

### Prerequisites

- [Node.js](https://nodejs.org/) 22+
- [pnpm](https://pnpm.io/) 10+

---

## The 5 Commands

| Command | What It Does | When to Use |
| --- | --- | --- |
| `/kickstart` | Walks you through project setup. Generates roadmap, phase structure, and focus doc. | Once, at the start |
| `/plan-phase` | Analyzes your codebase and creates a detailed task breakdown for a phase. | When starting each phase |
| `/start-session` | Reads your docs and tells you where you left off and what to do next. | Every coding session |
| `/check-task` | Marks tasks complete in your phase doc and updates progress. | After completing work |
| `/update-focus` | Records what you did, what's next, and any blockers. | End of each session |

### The Workflow

```
/kickstart          Set up project docs (once)
     ↓
/plan-phase         Create tasks for Phase 1
     ↓
/start-session  →  Code  →  /check-task  →  /update-focus
     ↑                                            ↓
     └────────────── next session ────────────────┘
```

1. **`/kickstart "My Project"`** — Answer a few questions, get a roadmap and phase structure
2. **`/plan-phase 1 "Foundation"`** — Get tasks with checkboxes and priorities
3. **`/start-session`** — AI loads context: current phase, progress, blockers, next steps
4. **Code** — Build features, fix bugs, ship
5. **`/check-task 1.3`** — Mark task 1.3 as done
6. **`/update-focus "Finished auth, starting dashboard"`** — Save session progress

---

## Project Structure

```
forgekit-lite/
├── apps/
│   ├── web/                # React 19 + Vite 6 + Tailwind CSS 4
│   └── api/                # Hono 4 API server
├── packages/
│   ├── shared/             # Types, constants, utilities
│   └── ui/                 # React component library
├── docs/
│   ├── COMMANDS.md         # Command reference
│   ├── templates/          # Doc templates for /kickstart
│   └── phases/             # Phase-based task tracking
├── .claude/skills/         # Claude Code commands
├── .cursor/commands/       # Cursor commands
├── .vscode/prompts/        # VS Code Copilot prompts
└── CURRENT_FOCUS.md        # Active work context
```

## Tech Stack

| Layer | Technology | Version |
| --- | --- | --- |
| Frontend | React | 19 |
| Build | Vite | 6 |
| Styling | Tailwind CSS | 4 |
| Backend | Hono | 4 |
| Runtime | Node.js | 22+ |
| Language | TypeScript | 5 |
| Package Manager | pnpm | 10 |
| Monorepo | Turborepo | 2 |

## Scripts

```bash
pnpm dev          # Start all apps (web + api)
pnpm build        # Build for production
pnpm lint         # ESLint across all workspaces
pnpm typecheck    # TypeScript type checking
pnpm test         # Run tests via Vitest
pnpm format       # Format with Prettier
pnpm clean        # Clean build artifacts
```

---

## Multi-IDE Support

The same 5 commands work across three IDEs:

| IDE | Location | How to Invoke |
| --- | --- | --- |
| **Claude Code** | `.claude/skills/` | Type `/commandname` in terminal |
| **Cursor** | `.cursor/commands/` | Type `/` in Agent chat |
| **VS Code Copilot** | `.vscode/prompts/` | Copilot Chat → paperclip → Prompt |

---

## Full Version

ForgeKit Lite includes the 5 essential commands. The full [ForgeKit](https://github.com/davidbalzan/forgeKit) adds:

- 6 additional commands (`/create-prd`, `/log-decision`, `/phase-status`, `/remember`, `/distill`, `/cleanup`)
- Knowledge base for persistent learnings across sessions
- Extended templates (PRD, architecture guide, design system, tech stack)

---

## License

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) — Free to use and adapt with attribution. No commercial redistribution.
