# ARCHITECTURE.md — Fábrica17

> **Status:** Active
> **Last Updated:** 2026-04-22

## Overview

Fábrica17 is a Svelte 5 component library and a static site generation (SSG) template designed for maximum energy efficiency (Green Coding) and high performance.

## Core Stack

- **Framework:** SvelteKit (Svelte 5, Runes Mode)
- **Runtime & Package Manager:** Bun (`bun install`, `bun run build`)
- **Rendering:** Static Site Generation via `@sveltejs/adapter-static`
- **Bundler:** Vite
- **Styling:** Vanilla CSS Custom Properties (Tokens)

## Green Coding & Performance Directives

We adhere to strict performance and resource utilization budgets to minimize the carbon footprint of our sites:

### 1. Bundle Budgets
- **JavaScript:** < 50KB gzipped total per page.
- **CSS:** < 10KB gzipped total.
- **Tree-shaking:** Vite must aggressively tree-shake unused library code.

### 2. Media Optimization
- **Format:** Always use modern formats like `WebP` or `AVIF`.
- **Loading:** All `<img>` tags below the fold MUST have `loading="lazy"` and `decoding="async"`.
- **Responsive:** Use `<picture>` with `srcset` to serve viewport-appropriate sizes.

### 3. CSS Custom Properties for Theming
- Theming MUST NOT rely on JavaScript runtime evaluation.
- All dynamic brand adaptations (colors, fonts, radii) happen exclusively via CSS variables (`--color-primary`) injected at the `:root` level (`demo-brand.css` overriding `tokens.css`).

### 4. Zero External HTTP Requests (Strict Green Coding Opt-In)
By default, the base template uses Google Fonts (CDN) and Material Symbols (via `unplugin-icons`) for maximum flexibility during prototyping.
**Strict Green Coding Opt-In:** If the designer provides local assets, all icons must be inlined as SVG components (`<IconArrowForward />`) and all fonts must be self-hosted. When this protocol is active, no external HTTP requests to CDNs or font foundries are permitted.

## Component Library Publishing

Fábrica17 is distributed as a package:
- **Build tool:** `@sveltejs/package`
- **Output:** `/dist`
- **Exports:** Defined via barrel exports in `src/lib/index.ts`.
