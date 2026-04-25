# STYLE.md — Atomic Design Rules

> **Status:** Active

## 1. Atomic Design Architecture

All components reside within `src/lib/` and must adhere strictly to the Atomic Design hierarchy.

- **Atoms (`src/lib/atoms/`)**: The smallest, indivisible units (Buttons, Links, Icons).
- **Molecules (`src/lib/molecules/`)**: Composed of two or more atoms.
- **Organisms (`src/lib/organisms/`)**: Major page sections composed of molecules and atoms (Navbars, Heroes).
- **Templates (`src/lib/templates/`)**: Page-level layout shells.

**Rule of Composition:** Organisms must be built by importing Molecules and Atoms. Do NOT write raw HTML/CSS inside an Organism for an element that already exists as an Atom in the library.

## 2. Semantic Nomenclature

Components must be named using Semantic Variant notation: `Purpose.Variant.svelte`.

### Examples of Correct Naming:
- `Button.Primary.svelte`
- `Hero.Split.svelte`

### ❌ Prohibited Abstract Naming:
- `Card.svelte` (Too generic — use `Card.Pricing.svelte`)
- `HeroSection.svelte` (Redundant, it's already in the `organisms/` folder)
