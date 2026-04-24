<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href = '#',
		variant = 'secondary',
		children,
		onclick
	}: {
		href?: string;
		variant?: 'secondary';
		children: Snippet;
		onclick?: (e: MouseEvent) => void;
	} = $props();
</script>

{#if href && href !== '#'}
	<a {href} class="button-secondary" {onclick}>
		{@render children()}
	</a>
{:else}
	<button class="button-secondary" {onclick}>
		{@render children()}
	</button>
{/if}

<style>
	.button-secondary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: calc(var(--space-4) + 1px) calc(var(--space-8) + 1px);
		background-color: transparent;
		color: var(--color-primary);
		font-family: var(--font-body);
		font-size: var(--text-base);
		font-weight: 500;
		line-height: 1.5;
		text-align: center;
		border: 1px solid var(--color-text-muted);
		border-radius: var(--radius-sm);
		text-decoration: none;
		cursor: pointer;
		transition: border-color var(--transition-fast), background-color var(--transition-fast);
	}

	.button-secondary:hover {
		border-color: var(--color-primary);
		background-color: rgba(45, 90, 39, 0.04);
	}

	.button-secondary:active {
		transform: translateY(1px);
	}
</style>
