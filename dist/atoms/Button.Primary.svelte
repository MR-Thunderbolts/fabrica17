<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href = '#',
		variant = 'primary',
		children,
		icon,
		onclick
	}: {
		href?: string;
		variant?: 'primary';
		children: Snippet;
		icon?: Snippet;
		onclick?: (e: MouseEvent) => void;
	} = $props();
</script>

{#if href && href !== '#'}
	<a {href} class="button-primary" {onclick}>
		{@render children()}
		{#if icon}
			<span class="button-primary__icon">{@render icon()}</span>
		{/if}
	</a>
{:else}
	<button class="button-primary" {onclick}>
		{@render children()}
		{#if icon}
			<span class="button-primary__icon">{@render icon()}</span>
		{/if}
	</button>
{/if}

<style>
	.button-primary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		padding: var(--space-4) var(--space-8);
		background-color: var(--color-primary);
		color: var(--color-white);
		font-family: var(--font-body);
		font-size: var(--text-base);
		font-weight: 600;
		line-height: 1.5;
		text-align: center;
		border-radius: var(--radius-sm);
		text-decoration: none;
		border: none;
		cursor: pointer;
		transition: background-color var(--transition-fast), box-shadow var(--transition-fast);
	}

	.button-primary:hover {
		background-color: var(--color-primary-dark);
		box-shadow: var(--shadow-primary);
	}

	.button-primary:active {
		transform: translateY(1px);
	}

	.button-primary__icon {
		display: inline-flex;
		align-items: center;
	}
</style>
