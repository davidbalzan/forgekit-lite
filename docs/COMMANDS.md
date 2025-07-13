# AI Commands Guide

How to use the 5 ForgeKit Lite workflow commands across different IDEs.

---

## Quick Reference

| Command         | Purpose                          | When to Use            |
| --------------- | -------------------------------- | ---------------------- |
| `kickstart`     | Initialize project documentation | Starting a new project |
| `plan-phase`    | Create phase task breakdown      | Starting a new phase   |
| `start-session` | Load project context             | Start of each session  |
| `check-task`    | Mark tasks complete              | After completing work  |
| `update-focus`  | Update current work status       | End of session         |

---

## Workflow

```
/kickstart  →  /plan-phase  →  /start-session  →  Code  →  /check-task  →  /update-focus
   (once)      (per phase)    (every session)                                    ↓
                                    ↑                                            │
                                    └──────────── next session ─────────────────┘
```

---

## IDE Usage

### Claude Code

```bash
/kickstart "My Project"
/plan-phase 1 "Foundation"
/start-session
/check-task 2.3
/update-focus "Completed auth, starting dashboard"
```

### Cursor

Type `/` in Agent chat (Cmd+L) to see commands. Or use `@` file references:

```
@kickstart.md - initialize my project
@start-session.md - load context
```

### VS Code Copilot

1. Open Copilot Chat (Cmd+Shift+I)
2. Click the paperclip icon or type `/`
3. Select "Prompt..." → choose the prompt

---

## Command Details

### `/kickstart`

**Purpose**: Initialize project documentation through a guided flow.

**What it creates**:

- `docs/PRODUCTION_ROADMAP.md` — Phase overview and status
- `docs/phases/phase1/README.md` — First phase overview
- `CURRENT_FOCUS.md` — Active work tracking

**Example**: `/kickstart "TaskFlow - A project management app"`

---

### `/plan-phase`

**Purpose**: Create detailed task breakdown for a development phase.

**What it creates**:

- `docs/phases/phaseN/README.md` — Phase overview
- `docs/phases/phaseN/PHASEN_TASKS.md` — Tasks with checkboxes

**Example**: `/plan-phase 2 "Authentication & Authorization"`

---

### `/start-session`

**Purpose**: Load project context and get a summary of where you left off.

**What it reads**: CURRENT_FOCUS.md, roadmap, active phase docs.

**Example**: `/start-session`

---

### `/check-task`

**Purpose**: Mark tasks complete and update progress.

**Example**: `/check-task 2.3` (marks Task 2, sub-step 3 as done)

---

### `/update-focus`

**Purpose**: Record session progress for next time.

**Example**: `/update-focus "Completed JWT middleware, starting RBAC"`

---

## File Locations

| IDE         | Location                 | File Pattern       |
| ----------- | ------------------------ | ------------------ |
| Claude Code | `.claude/skills/[name]/` | `SKILL.md`         |
| Cursor      | `.cursor/commands/`      | `[name].md`        |
| VS Code     | `.vscode/prompts/`       | `[name].prompt.md` |
