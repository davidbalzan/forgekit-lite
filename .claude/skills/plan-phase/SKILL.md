---
name: plan-phase
description: Generate a new phase task document using the project template
disable-model-invocation: true
argument-hint: "<phase number> <phase name>"
---

# Plan Phase - Task Document Generator

Generate a phase task document with detailed, actionable tasks.

## Instructions

### Stage 1: Discovery

- Read existing phase documentation
- Review docs/PRODUCTION_ROADMAP.md for phase objectives
- Understand the phase goals and context

### Stage 2: Technical Analysis

- Explore relevant codebase areas
- Identify existing patterns to follow
- Check technology requirements and constraints

### Stage 3: Task Planning

- Break into 4-6 major tasks
- Each task gets 3-7 sub-steps with checkboxes
- Assign priorities (CRITICAL/HIGH/MEDIUM/LOW)
- Define dependencies between tasks

### Stage 4: Success Criteria

- Define functional success criteria
- Define technical success criteria
- Define quality success criteria

## Task Format

```markdown
### Task N: [Task Name]

**Priority**: [CRITICAL/HIGH/MEDIUM/LOW]
**Package**: [client/server/shared]
**Dependencies**: [Task numbers or "None"]

#### Sub-tasks

- [ ] N.1 [First sub-task]
- [ ] N.2 [Second sub-task]
- [ ] N.3 [Third sub-task]

#### Deliverables

- [What this task produces]
```

## Output

Use `docs/phases/templates/TASK_TEMPLATE.md` as the base format.

Create files:

- `docs/phases/phaseN/README.md` — Phase overview (from PHASE_README_TEMPLATE.md)
- `docs/phases/phaseN/PHASEN_TASKS.md` — Detailed tasks

Update `docs/PRODUCTION_ROADMAP.md` to include the new phase.

Phase to plan: $ARGUMENTS
