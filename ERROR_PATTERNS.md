# ERROR_PATTERNS.md — Fábrica17

> **Status:** Active
> **Last Updated:** 2026-04-22

## STRICT PROHIBITIONS: SVELTE 4 LEGACY SYNTAX

Fábrica17 is built exclusively in **Svelte 5 using Runes**. AI Agents must NEVER generate the following legacy syntax patterns.

### ❌ Prohibited: `$:` Reactive Statements
**DO NOT USE:** `$: double = count * 2;`
**USE INSTEAD:** `let double = $derived(count * 2);`

### ❌ Prohibited: `export let` for Props
**DO NOT USE:** `export let title;`
**USE INSTEAD:** `let { title } = $props();`

### ❌ Prohibited: `<slot>` and Named Slots
**DO NOT USE:** `<slot />` or `<slot name="header" />`
**USE INSTEAD:** Svelte 5 Snippets: `{@render children()}` and `{#snippet header()}`

### ❌ Prohibited: `on:event` Directives
**DO NOT USE:** `on:click={handleClick}`
**USE INSTEAD:** Native event attributes: `onclick={handleClick}`

### ❌ Prohibited: `createEventDispatcher`
**DO NOT USE:** `const dispatch = createEventDispatcher(); dispatch('customEvent');`
**USE INSTEAD:** Pass callbacks as props: `let { onCustomEvent } = $props(); onCustomEvent();`

### ❌ Prohibited: Svelte Stores for Local State
**DO NOT USE:** `import { writable } from 'svelte/store'; const localState = writable(0);`
**USE INSTEAD:** `$state()` runes: `let localState = $state(0);`

### ❌ Prohibited: Inline Hardcoded Styles
**DO NOT USE:** `<div style="padding: 16px; color: #2D5A27">`
**USE INSTEAD:** Token variables: `<div style="padding: var(--space-4); color: var(--color-primary)">`
