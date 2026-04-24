<script lang="ts">
	import StatIndicator from '$lib/molecules/Stat.Indicator.svelte';
	import DividerVertical from '$lib/atoms/Divider.Vertical.svelte';

	let {
		stats = [
			{ value: '10k+', label: 'ACRES PROTECTED' },
			{ value: '25', label: 'YEARS EXPERIENCE' }
		]
	}: {
		stats?: Array<{ value: string; label: string }>;
	} = $props();
</script>

<div class="trust-bar">
	{#each stats as stat, i}
		{#if i > 0}
			<DividerVertical />
		{/if}
		<StatIndicator value={stat.value} label={stat.label} />
	{/each}
</div>

<style>
	.trust-bar {
		display: flex;
		align-items: center;
		gap: var(--space-8);
		padding-top: var(--space-8);
		margin-top: var(--space-16);
		border-top: 1px solid var(--color-border-sage);
	}
</style>
