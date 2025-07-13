---
name: check-task
description: Mark a task as complete in the phase tasks file and update progress
disable-model-invocation: true
argument-hint: "<task number or description>"
---

# Check Task - Progress Tracker

Mark tasks as complete in phase task files and update progress metrics.

## Instructions

1. **Identify the current phase** from CURRENT_FOCUS.md or docs/PRODUCTION_ROADMAP.md
2. **Read the phase tasks file** (docs/phases/phaseN/PHASEN_TASKS.md)
3. **Find the task** specified in $ARGUMENTS
4. **Update the checkbox** from `[ ]` to `[x]`
5. **Update progress metrics** if they exist in the file
6. **Report completion** to the user

## Task Identification

The user may specify a task by:

- Task number (e.g., "1.3" for Task 1, sub-step 3)
- Task description (e.g., "implement auth middleware")
- Partial match (search for the task)

## Checkbox Format

```markdown
Before: - [ ] Implement user authentication
After: - [x] Implement user authentication
```

## After Marking Complete

1. Check if all sub-tasks in a group are done — if so, mark the parent task
2. Check if all tasks in the phase are done — if so, suggest updating the roadmap
3. Confirm what was marked complete and show remaining tasks

Task to mark complete: $ARGUMENTS
