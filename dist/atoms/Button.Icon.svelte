<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href = '#',
		label = '',
		children,
		onclick
	}: {
		href?: string;
		label?: string;
		children: Snippet;
		onclick?: (e: MouseEvent) => void;
	} = $props();
</script>

{#if href && href !== '#'}
	<a {href} class="button-icon" aria-label={label} {onclick}>
		{@render children()}
	</a>
{:else}
	<button class="button-icon" aria-label={label} {onclick}>
		{@render children()}
	</button>
{/if}

<style>
	.button-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-2);
		background: transparent;
		border: none;
		border-radius: var(--radius-lg);
		color: var(--color-text-muted);
		cursor: pointer;
		transition: color var(--transition-fast), background-color var(--transition-fast);
		text-decoration: none;
	}

	.button-icon:hover {
		color: var(--color-primary);
		background-color: rgba(45, 90, 39, 0.06);
	}
</style>
