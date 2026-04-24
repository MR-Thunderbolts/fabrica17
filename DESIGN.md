# DESIGN.md — Fábrica17 Token Specification

> This file is the **single source of truth** for all design tokens in the system.
> It defines the token API (names, categories, defaults) that both the code library and Figma library must implement.
>
> **Base values are NEUTRAL** (grays, system fonts). Brand-specific overrides are applied as CSS custom property overrides by the consuming project or extracted from Figma by the AI agent.

---

## Token Architecture

```
Primitives (raw values)
    ↓ referenced by
Semantic (meaningful names)
    ↓ referenced by
Component (specific UI elements)
```

---

## 1. Colors

### Primitive Palette (Neutral Base)

| Token | CSS Variable | Default Value |
|---|---|---|
| Gray 50 | `--color-gray-50` | `#FAFAFA` |
| Gray 100 | `--color-gray-100` | `#F5F5F5` |
| Gray 200 | `--color-gray-200` | `#E5E5E5` |
| Gray 300 | `--color-gray-300` | `#D4D4D4` |
| Gray 400 | `--color-gray-400` | `#A3A3A3` |
| Gray 500 | `--color-gray-500` | `#737373` |
| Gray 600 | `--color-gray-600` | `#525252` |
| Gray 700 | `--color-gray-700` | `#404040` |
| Gray 800 | `--color-gray-800` | `#262626` |
| Gray 900 | `--color-gray-900` | `#171717` |
| White | `--color-white` | `#FFFFFF` |
| Black | `--color-black` | `#000000` |

### Semantic Colors

| Token | CSS Variable | Default (Neutral) | Example Override (Client Brand) |
|---|---|---|---|
| Primary | `--color-primary` | `var(--color-gray-800)` | `#2D5A27` |
| Primary Dark | `--color-primary-dark` | `var(--color-gray-900)` | `#154212` |
| Secondary | `--color-secondary` | `var(--color-gray-500)` | `#6B8E23` |
| Tertiary | `--color-tertiary` | `var(--color-gray-400)` | `#B35D3E` |
| Accent Dark | `--color-accent-dark` | `var(--color-gray-900)` | `#672409` |
| Background | `--color-neutral-bg` | `var(--color-gray-50)` | `#F5F2ED` |
| Background Warm | `--color-neutral-warm` | `var(--color-white)` | `#FCF9F4` |
| Text Primary | `--color-text-primary` | `var(--color-gray-900)` | `#1C1C19` |
| Text Body | `--color-text-body` | `var(--color-gray-700)` | `#42493E` |
| Text Muted | `--color-text-muted` | `var(--color-gray-500)` | `#57534E` |
| Border Light | `--color-border-light` | `var(--color-gray-200)` | `#E7E5E4` |
| Border Warm | `--color-border-warm` | `var(--color-gray-200)` | `#E5E2DD` |
| Border Sage | `--color-border-sage` | `rgba(0,0,0,0.1)` | `rgba(194,201,187,0.3)` |
| Badge BG | `--color-badge-bg` | `var(--color-gray-100)` | `rgba(200,241,122,0.5)` |
| Badge Border | `--color-badge-border` | `var(--color-gray-300)` | `rgba(73,104,0,0.2)` |
| Badge Text | `--color-badge-text` | `var(--color-gray-600)` | `#496800` |

---

## 2. Typography

### Font Families

| Token | CSS Variable | Default (Neutral) | Example Override |
|---|---|---|---|
| Headline | `--font-headline` | `system-ui, -apple-system, sans-serif` | `'Noto Serif', Georgia, serif` |
| Body | `--font-body` | `system-ui, -apple-system, sans-serif` | `'Manrope', system-ui, sans-serif` |
| Nav | `--font-nav` | `system-ui, -apple-system, sans-serif` | `'Noto Serif', Georgia, serif` |

### Font Sizes (Scale)

| Token | CSS Variable | Value |
|---|---|---|
| XS | `--text-xs` | `0.75rem` (12px) |
| SM | `--text-sm` | `0.875rem` (14px) |
| Base | `--text-base` | `1rem` (16px) |
| LG | `--text-lg` | `1.125rem` (18px) |
| XL | `--text-xl` | `1.25rem` (20px) |
| 2XL | `--text-2xl` | `1.5rem` (24px) |
| 4XL | `--text-4xl` | `2.5rem` (40px) |
| 5XL | `--text-5xl` | `3rem` (48px) |
| 6XL | `--text-6xl` | `4.5rem` (72px) |

---

## 3. Spacing (Scale)

| Token | CSS Variable | Value |
|---|---|---|
| 1 | `--space-1` | `0.25rem` (4px) |
| 2 | `--space-2` | `0.5rem` (8px) |
| 3 | `--space-3` | `0.75rem` (12px) |
| 4 | `--space-4` | `1rem` (16px) |
| 5 | `--space-5` | `1.25rem` (20px) |
| 6 | `--space-6` | `1.5rem` (24px) |
| 8 | `--space-8` | `2rem` (32px) |
| 10 | `--space-10` | `2.5rem` (40px) |
| 12 | `--space-12` | `3rem` (48px) |
| 16 | `--space-16` | `4rem` (64px) |
| 20 | `--space-20` | `5rem` (80px) |
| 24 | `--space-24` | `6rem` (96px) |

---

## 4. Icon Sizes

| Token | CSS Variable | Value | Usage |
|---|---|---|---|
| XS | `--icon-xs` | `12px` | Inline decorative, badges |
| SM | `--icon-sm` | `16px` | Small badges, buttons compact |
| MD | `--icon-md` | `20px` | Default icon size, navbar actions |
| LG | `--icon-lg` | `24px` | Prominent icons, standalone actions |

> **Rule:** Icon containers in components should reference these token sizes. The icon component itself sets `width` and `height` to `1em` and inherits the size from the container's `font-size` or explicit token.

---

## 5. Border Radius

| Token | CSS Variable | Value |
|---|---|---|
| SM | `--radius-sm` | `4px` |
| MD | `--radius-md` | `8px` |
| LG | `--radius-lg` | `12px` |

---

## 6. Shadows

| Token | CSS Variable | Value |
|---|---|---|
| SM | `--shadow-sm` | `0px 1px 2px rgba(0,0,0,0.05)` |
| Primary | `--shadow-primary` | `0px 1px 2px rgba(0,0,0,0.15)` |

---

## 7. Transitions

| Token | CSS Variable | Value |
|---|---|---|
| Fast | `--transition-fast` | `150ms ease` |
| Base | `--transition-base` | `250ms ease` |
| Slow | `--transition-slow` | `400ms ease` |

---

## 8. Component Tokens

These tokens define component-specific measurements. They ensure consistency when the same component appears across different contexts.

### Button

| Token | CSS Variable | Default |
|---|---|---|
| Padding X | `--button-padding-x` | `var(--space-8)` |
| Padding Y | `--button-padding-y` | `var(--space-4)` |
| Radius | `--button-radius` | `var(--radius-sm)` |
| Font Size | `--button-font-size` | `var(--text-base)` |
| Font Weight | `--button-font-weight` | `600` |
| Gap | `--button-gap` | `var(--space-2)` |

### Navbar

| Token | CSS Variable | Default |
|---|---|---|
| Height | `--navbar-height` | `80px` |
| Max Width | `--navbar-max-width` | `1280px` |
| Brand Font Size | `--navbar-brand-size` | `var(--text-2xl)` |
| Link Gap | `--navbar-link-gap` | `var(--space-8)` |

### Badge

| Token | CSS Variable | Default |
|---|---|---|
| Padding X | `--badge-padding-x` | `13px` |
| Padding Y | `--badge-padding-y` | `5px` |
| Radius | `--badge-radius` | `var(--radius-lg)` |
| Icon Size | `--badge-icon-size` | `var(--icon-sm)` |
| Font Size | `--badge-font-size` | `var(--text-xs)` |
| Font Weight | `--badge-font-weight` | `600` |
| Letter Spacing | `--badge-letter-spacing` | `0.6px` |

### Hero

| Token | CSS Variable | Default |
|---|---|---|
| Max Width | `--hero-max-width` | `1280px` |
| Image Height | `--hero-image-height` | `700px` |
| Heading Size | `--heading-size` | `clamp(2.5rem, 5.6vw, 4.5rem)` |

---

## 9. Breakpoints

| Token | CSS Variable | Value | Usage |
|---|---|---|---|
| SM | `--breakpoint-sm` | `640px` | Mobile landscape |
| MD | `--breakpoint-md` | `768px` | Tablet portrait |
| LG | `--breakpoint-lg` | `1024px` | Tablet landscape / Small desktop |
| XL | `--breakpoint-xl` | `1280px` | Desktop |

> **Note:** CSS custom properties cannot be used in `@media` queries. These values are documented here for reference and used as literal values in media queries. The AI agent should read these values and apply them consistently.

---

## 10. Focus & Interactive States

| Token | CSS Variable | Default |
|---|---|---|
| Focus Ring Color | `--focus-ring-color` | `var(--color-primary)` |
| Focus Ring Width | `--focus-ring-width` | `2px` |
| Focus Ring Offset | `--focus-ring-offset` | `2px` |
| Hover Opacity | `--hover-opacity` | `0.9` |
| Active Scale | `--active-scale` | `translateY(1px)` |

---

## AI Agent Instructions

When extracting tokens from a Figma file to generate this file:

1. **Read Figma Variables** → Map `Semantic/*` collection to sections 1-7 of this file
2. **Read Component Variables** → Map `Component/*` collection to section 8
3. **Read Typography Styles** → Extract font families and map to section 2
4. **Read Color Styles** → Extract hex values and map to section 1
5. **Preserve token names** → The CSS variable names are the API contract; never rename them
6. **Only override values** → Change the "Default" column values, never the variable names

### Override File Structure
The brand-specific override file should ONLY contain the values that differ from the neutral base:

```css
/* client-brand.css — Generated from Figma by AI agent */
:root {
  --color-primary: #2D5A27;
  --color-primary-dark: #154212;
  --font-headline: 'Noto Serif', Georgia, serif;
  --font-body: 'Manrope', system-ui, sans-serif;
  /* ... only overridden tokens ... */
}
```
