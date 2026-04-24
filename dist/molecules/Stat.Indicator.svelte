<script lang="ts">
	let {
		value,
		label
	}: {
		value: string;
		label: string;
	} = $props();
</script>

<div class="stat">
	<span class="stat__value">{value}</span>
	<span class="stat__label">{label}</span>
</div>

<style>
	.stat {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.stat__value {
		font-family: var(--font-headline);
		font-size: var(--text-2xl);
		font-weight: 400;
		line-height: 1.333;
		color: var(--color-text-primary);
	}

	.stat__label {
		font-family: var(--font-body);
		font-size: var(--text-xs);
		font-weight: 400;
		letter-spacing: 0.6px;
		text-transform: uppercase;
		line-height: 1.333;
		color: var(--color-text-body);
	}
</style>
