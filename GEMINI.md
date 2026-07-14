# Gemini Agent Instructions

**All agent instructions for this repository live in [`AGENTS.md`](./AGENTS.md).**

Read `AGENTS.md` in full before starting any task. It contains:

1. Critical Next.js 16 warnings (this codebase differs from your training data).
2. Project context and known gotchas.
3. A **Self-Correcting Rules Engine**: a "Learned Rules" section you must scan before
   every task and **append to immediately** whenever the user corrects you or you make
   a mistake caused by a wrong assumption. Follow the rule format defined there.

Do not duplicate rules in this file — `AGENTS.md` is the single source of truth for
every agent (Claude, Gemini, Codex, etc.).
