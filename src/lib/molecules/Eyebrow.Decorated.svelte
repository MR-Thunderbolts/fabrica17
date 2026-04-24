<script lang="ts">
	import DividerHorizontal from '$lib/atoms/Divider.Horizontal.svelte';

	let {
		label,
		color = 'var(--color-accent-dark)'
	}: {
		label: string;
		color?: string;
	} = $props();
</script>

<div class="eyebrow">
	<DividerHorizontal {color} />
	<span class="eyebrow__label" style:color={color}>{label}</span>
	<DividerHorizontal {color} />
</div>

<style>
	.eyebrow {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.eyebrow__label {
		font-family: var(--font-body);
		font-size: var(--text-sm);
		font-weight: 700;
		letter-spacing: 1.4px;
		text-transform: uppercase;
		line-height: 1.429;
		white-space: nowrap;
	}
</style>
