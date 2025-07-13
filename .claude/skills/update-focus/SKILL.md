---
name: update-focus
description: Update CURRENT_FOCUS.md with session progress
disable-model-invocation: true
argument-hint: "[summary of what was accomplished]"
---

# Update Focus - Session Progress Recorder

Update `CURRENT_FOCUS.md` to capture session progress for future context.

## Instructions

1. **Read CURRENT_FOCUS.md** to understand existing state
2. **Gather session progress** from conversation context or $ARGUMENTS
3. **Update the file** with:
   - Phase and task (if changed)
   - Quick Context: Done, Next, Blockers
   - Last Updated date

## Format

```markdown
## Current Focus

**Phase**: Phase N - [Phase Name]
**Task**: [Current task description]
**Branch**: `main` or feature branch
**Last Updated**: YYYY-MM-DD

### Quick Context

- **Done**: [Recent completions]
- **Next**: [Upcoming work]
- **Blockers**: [Any blockers, or "None"]
```

## Guidelines

- Keep entries concise and scannable
- Date format: YYYY-MM-DD
- Only update the Current Focus section

Session summary to record: $ARGUMENTS
