# ForgeKit Lite

A clean production monorepo starter with a simple AI workflow layer.
Clone it, run five slash commands, and suddenly your AI assistant actually remembers what you're building.

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Hono](https://img.shields.io/badge/Hono-4-orange)](https://hono.dev/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2-blueviolet)](https://turbo.build/)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

**Works with Claude Code · Cursor · VS Code Copilot**

---

## Why ForgeKit Lite?

AI coding assistants are powerful... until they forget everything between sessions.

You end up repeating the same context over and over: what the project is about, where you left off, what the next steps are.

ForgeKit Lite fixes that with five simple slash commands that read and write plain Markdown files. Your assistant always knows the current phase, what's done, what's next, and why — without you having to re-explain.

It's lightweight, practical, and designed to stay out of your way.

---

## Quick Start

```bash
git clone https://github.com/davidbalzan/forgekit-lite.git
cd forgekit-lite
pnpm install
cp .env.example .env
pnpm dev
```

- Frontend → http://localhost:5173
- API → http://localhost:3000/api/health

**Prerequisites**: [Node.js](https://nodejs.org/) 22+ and [pnpm](https://pnpm.io/) 10+.

---

## The 5 Commands

| Command | What it does | When to use |
| --- | --- | --- |
| `/kickstart` | Sets up your project docs and roadmap | Once, when starting |
| `/plan-phase` | Creates a clear task list for the current phase | At the beginning of each phase |
| `/start-session` | Loads everything you need to know right now | Start of every coding session |
| `/check-task` | Marks tasks as done and updates progress | After finishing work |
| `/update-focus` | Saves what you accomplished and what's next | End of each session |

### Simple workflow

```
/kickstart → /plan-phase → /start-session → Code → /check-task → /update-focus
                                   ↑                                    ↓
                            (next session starts here)
```

---

## Project Structure

```
forgekit-lite/
├── apps/
│   ├── web/          # React 19 + Vite + Tailwind
│   └── api/          # Hono API server
├── packages/         # Shared types & UI components
├── docs/
│   ├── phases/       # Your phase-based task tracking
│   └── templates/    # Ready-to-use doc templates
├── .claude/          # Claude Code commands
├── .cursor/          # Cursor commands
├── .vscode/          # VS Code Copilot prompts
└── CURRENT_FOCUS.md  # Keeps your AI in sync
```

---

## Tech Stack

- **Frontend**: React 19 + Vite 6 + Tailwind CSS 4
- **Backend**: Hono 4
- **Monorepo**: Turborepo 2
- **Language**: TypeScript 5
- **Package manager**: pnpm 10

---

## Scripts

```bash
pnpm dev      # Start everything
pnpm build    # Production build
pnpm lint     # Check code style
pnpm test     # Run tests
pnpm format   # Prettier
```

---

## Multi-IDE Support

The same five commands work everywhere:

- **Claude Code** — type `/command` in the terminal
- **Cursor** — type `/` in the agent chat
- **VS Code Copilot** — use the prompt library

---

## Full Version

This is the **Lite** edition (the essential five commands).

The full [ForgeKit](https://github.com/davidbalzan/forgeKit) adds extra commands, a persistent knowledge base, and more advanced templates.

---

## License

[MIT](./LICENSE)

---

Built by [David Balzan](https://davidbalzan.com) — a coder who's been building things for over 25 years and still loves the craft.
