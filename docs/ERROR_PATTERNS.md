# ERROR_PATTERNS.md — Svelte 5 Strict Rules

> **Status:** Active

## STRICT PROHIBITIONS: SVELTE 4 LEGACY SYNTAX

The codebase is built exclusively in **Svelte 5 using Runes**. AI Agents must NEVER generate legacy syntax.

### ❌ Prohibited: `$` Reactive Statements
**DO NOT USE:** `$: double = count * 2;`
**USE INSTEAD:** `let double = $derived(count * 2);`

### ❌ Prohibited: `export let` for Props
**DO NOT USE:** `export let title;`
**USE INSTEAD:** `let { title } = $props();`

### ❌ Prohibited: `<slot>` and Named Slots
**DO NOT USE:** `<slot />`
**USE INSTEAD:** Svelte 5 Snippets: `{@render children()}` and `{#snippet header()}`

### ❌ Prohibited: `on:event` Directives
**DO NOT USE:** `on:click={handleClick}`
**USE INSTEAD:** `onclick={handleClick}`

### ❌ Prohibited: `createEventDispatcher`
**DO NOT USE:** `createEventDispatcher()`
**USE INSTEAD:** Pass callbacks as props: `let { onCustomEvent } = $props();`

### ❌ Prohibited: Svelte Stores for Local State
**DO NOT USE:** `writable()` for local state
**USE INSTEAD:** `$state()` runes: `let localState = $state(0);`
