# GIT.md — Fábrica17

> **Status:** Active
> **Last Updated:** 2026-04-22

## Commit Conventions

We enforce strict **Conventional Commits** to maintain a readable history and automate library versioning. AI Agents must strictly adhere to this format when proposing or executing commits.

### Format
`type(scope): subject`

### Allowed Types
- **`feat:`** A new component or feature.
- **`fix:`** A bug fix in an existing component.
- **`docs:`** Changes to `DESIGN.md`, `AGENTS.md`, or other `.md` context files.
- **`style:`** Design token updates, formatting, or missing semicolons (does not affect code logic).
- **`refactor:`** Code changes that neither fix a bug nor add a feature (e.g. migrating to new Runes syntax).
- **`perf:`** A code change that improves performance (e.g. optimizing SVGs).
- **`chore:`** Package manager updates, configuration changes.

### Examples
- `feat(organisms): add Navbar.Centered component`
- `fix(atoms): remove hardcoded width from Badge.Tag`
- `docs(context): split AGENTS.md into progressive disclosure architecture`
