# Check Task - Progress Tracker

**Objective**: Mark tasks as complete in phase task documents and update progress.

## Process

1. **Identify the task file**: `docs/phases/phaseN/PHASEN_TASKS.md`
2. **Find the task**: By number (e.g., 2.3), description, or partial match
3. **Update checkbox**: Change `- [ ]` to `- [x]`
4. **Update progress stats** if they exist in the file

## Checkbox Syntax

```markdown
- [ ] Incomplete task
- [x] Completed task
```

## After Marking Complete

1. Check if all sub-tasks in a group are done — mark parent if so
2. Check if all tasks in the phase are done — suggest updating roadmap
3. Confirm what was marked and show remaining tasks

**Output**: Updated task file with completion status.
