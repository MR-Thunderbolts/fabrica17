# TESTING.md — Fábrica17

> **Status:** Active
> **Last Updated:** 2026-04-22

## Validation & Performance Checks

Before marking any task as complete, AI Agents must run the following validation commands to ensure the integrity of the component library.

### 1. Type Checking & Svelte Sync
```bash
bun run check
```
*Requirement:* Must return 0 errors.

### 2. Library Build (Packaging)
```bash
bun run build:lib
```
*Requirement:* Must successfully generate the `/dist` folder via `@sveltejs/package` without missing dependency warnings.

### 3. Demo App SSG Build
```bash
bun run build
```
*Requirement:* Must compile the static site output. The AI must monitor the bundle size outputs reported by Vite.

### 4. Code Quality Gates (Grep)
The agent must verify that legacy code hasn't slipped in:
```bash
# Must return 0 results
grep -r "\$:" src/
grep -r "<slot" src/
grep -r "on:" src/
```
