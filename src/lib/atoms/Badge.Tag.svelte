<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		label,
		icon
	}: {
		label: string;
		icon?: Snippet;
	} = $props();
</script>

<span class="badge-tag">
	{#if icon}
		<span class="badge-tag__icon">{@render icon()}</span>
	{/if}
	<span class="badge-tag__label">{label}</span>
</span>

<style>
	.badge-tag {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		padding: 5px 13px;
		background-color: var(--color-badge-bg);
		border: 1px solid var(--color-badge-border);
		border-radius: var(--radius-lg);
	}

	.badge-tag__icon {
		display: inline-flex;
		align-items: center;
	}

	.badge-tag__label {
		font-family: var(--font-body);
		font-size: var(--text-xs);
		font-weight: 600;
		letter-spacing: 0.6px;
		text-transform: uppercase;
		color: var(--color-badge-text);
		line-height: 1.333;
	}
</style>
