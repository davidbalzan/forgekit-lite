# Plan Phase - Task Document Generator

**Objective**: Generate a phase task document with detailed, actionable tasks.

## Stage 1: Discovery

1. Read existing phase documentation
2. Review `docs/PRODUCTION_ROADMAP.md` for phase objectives

## Stage 2: Technical Analysis

1. Explore relevant codebase areas
2. Identify existing patterns and constraints

## Stage 3: Task Planning

1. Break into 4-6 major tasks
2. Each task gets 3-7 sub-steps with checkboxes
3. Assign priorities (CRITICAL/HIGH/MEDIUM/LOW)
4. Define dependencies between tasks

### Task Format

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

## Stage 4: Success Criteria

Define functional, technical, and quality success criteria.

**Output**:

1. `docs/phases/phaseN/README.md` — Phase overview
2. `docs/phases/phaseN/PHASEN_TASKS.md` — Detailed task breakdown
3. Update `docs/PRODUCTION_ROADMAP.md` with new phase
