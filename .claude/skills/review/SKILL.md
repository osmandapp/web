---
name: review
description: Review a diff, a branch or a PR - a static line-by-line pass over the diff plus reproduction in the running app, findings reported in chat only. Use for any review request ("отревьюй", "посмотри диф", "проверь мои правки", review of a PR or of the agent's own changes), and before saying "done" about own changes.
---

# Review

Complements `/code-review`, does not replace it: run that skill for its checks, then add the two passes below. Findings from both go into one list.

## Two passes, one does not replace the other

**1. Static pass over the diff, line by line.** Read the diff as a reviewer who cannot run anything (this is what Copilot does well and what reproduction misses). For every changed hunk ask:

- who else writes the same state? list every writer, not only the one in the diff;
- what can run between an `await` and the write that follows it? a newer request, a newer effect, a cleanup;
- which other paths do the same job? a second effect, a second caller, a fallback branch - a fix applied to one of them is not a fix;
- what happens on the early return, the error branch, the aborted branch? which flags stay set;
- does a guard cover every exit, or only the happy one?

**2. Reproduction pass in the running app.** Reproduce the defect before the fix and re-check after it. Force the case if it is not reachable by hand (hold a promise, stub a value) instead of declaring it untestable.

The static pass catches what a scenario never hits; reproduction catches what the diff does not show. Skipping either one is how a regression ships.

Apply both to own changes too: before the words "готово" / "done", re-read own diff as if someone else wrote it.

## Reporting

Say plainly which findings are proven by code, which are reproduced, and which are guesses.

When reviewing someone else's review (Copilot, a colleague), check each finding against the current code before agreeing: some are written against an older revision and are already fixed.

## Never publish

Findings go into the chat only. No inline comments, no PR comment, no review, no `--comment`, no `gh pr comment` / `gh pr review`. The author decides what goes into the PR, finding by finding.
