---
mode: edit
description: Generate a new phase task document using the project template
---

# Plan Phase - Task Document Generator

Generate a phase task document with detailed, actionable tasks.

## Instructions

### Stage 1: Discovery

- Read existing phase documentation
- Review docs/PRODUCTION_ROADMAP.md for phase objectives

### Stage 2: Technical Analysis

- Explore relevant codebase areas
- Identify existing patterns and constraints

### Stage 3: Task Planning

- Break into 4-6 major tasks
- Each task gets 3-7 sub-steps with checkboxes
- Assign priorities (CRITICAL/HIGH/MEDIUM/LOW)
- Define dependencies between tasks

### Stage 4: Success Criteria

- Define functional, technical, and quality success criteria

## Task Format

```markdown
### Task N: [Task Name]

**Priority**: [CRITICAL/HIGH/MEDIUM/LOW]
**Package**: [client/server/shared]
**Dependencies**: [Task numbers or "None"]

#### Sub-tasks

- [ ] N.1 [First sub-task]
- [ ] N.2 [Second sub-task]
```

## Output

1. `docs/phases/phaseN/README.md` — Phase overview
2. `docs/phases/phaseN/PHASEN_TASKS.md` — Detailed tasks
3. Update `docs/PRODUCTION_ROADMAP.md`
