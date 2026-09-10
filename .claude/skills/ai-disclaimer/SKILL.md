---
name: ai-disclaimer
description: Write the "AI disclaimer" section for an OsmAnd PR description - a numbered summary of the user's requests in order and what was done for each. Use when asked for an AI disclaimer, PR disclaimer, or a summary of the session for a PR.
---

# AI disclaimer for a PR

OsmAnd PRs produced with an AI agent end with an `## AI disclaimer` section (reference: osmandapp/web#1975). It tells the reviewer how the change came about: which tool, who drove it, and the requests it worked from, in order.

## Output

A markdown file `AI-disclaimer-<issue or PR number>.md` delivered in the chat, for pasting into the PR description. Do not write it into the repo. English, plain prose, no bold, no tables.

## Format

```md
## AI disclaimer

Written with <tool> (<model>), driven by [@<github handle>](https://github.com/<github handle>). Summary of the requests it worked from, in order:

1. <request 1, paraphrased>. <What was done or found because of it, one or two sentences with concrete file/function/commit names.>
2. <request 2>. <...>
3. ...

<Closing line: what was verified and by whom, what the agent did not do.>
```

- Tool and model: name what actually ran the session (e.g. `Claude (Cowork, Claude Fable 5.1)`, `Claude Code (Claude Opus 5)`), not a guess.
- Driver: the user's GitHub handle. The author's handle is `alisa911` unless told otherwise.

## Rules for the list

1. One item per user request, in the order they were made. Paraphrase the request in English; keep the user's intent, including pushback ("Are you sure about the fix?", "Why doesn't any test fail?") - those are part of the process and reviewers want to see them.
2. After the request, say what came out of it: the finding, the decision, the change. Name files, functions, ids, commits. This is where agent decisions belong - inside the item that triggered them, not in a separate "Decided by the agent" section. Do not add such a section.
3. Merge trivial follow-ups into one item ("Commit name, then a shorter one"). Drop chit-chat entirely.
4. When a request exposed a second bug or a wrong assumption, say so in that item, including that the agent asked before touching code if it did.
5. Never invent requests, numbers or test results. Numbers in the disclaimer are measurements from real runs; if the user ran the test, say the test was run by the author.
6. Closing line states what the agent did not do: no commits made by the agent, tests run by the author, etc.

## Length

Usually 5-8 items, each 1-3 sentences. The whole section should fit on one screen.
