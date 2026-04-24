# STYLE.md — Fábrica17

> **Status:** Active
> **Last Updated:** 2026-04-22

## 1. Atomic Design Architecture

All components reside within `src/lib/` and must adhere strictly to the Atomic Design hierarchy. An AI Agent must never skip a level of composition.

- **Atoms (`src/lib/atoms/`)**: The smallest, indivisible units (Buttons, Links, Icons, Badges).
- **Molecules (`src/lib/molecules/`)**: Composed of two or more atoms (CTA Groups, Heading blocks, Caption Overlays).
- **Organisms (`src/lib/organisms/`)**: Major page sections composed of molecules and atoms (Navbars, Heroes, Footers).
- **Templates (`src/lib/templates/`)**: Page-level layout shells that define the grid/structure but contain no data.

**Rule of Composition:** Organisms must be built by importing Molecules and Atoms. Do NOT write raw HTML/CSS inside an Organism for an element that already exists as an Atom in the library.

## 2. Semantic Nomenclature

Components must be named using Semantic Variant notation: `Purpose.Variant.svelte`.

### Examples of Correct Naming:
- `Button.Primary.svelte`
- `Navbar.Centered.svelte`
- `Hero.Split.svelte`
- `Icon.ArrowForward.svelte`

### ❌ Prohibited Abstract Naming:
- `Card.svelte` (Too generic — use `Card.Pricing.svelte`)
- `Component1.svelte`
- `Section.svelte`
- `HeroSection.svelte` (Redundant, it's already in the `organisms/` folder)
