<script lang="ts">
	import type { Snippet } from 'svelte';

	import ButtonPrimary from '../atoms/Button.Primary.svelte';
	import ButtonSecondary from '../atoms/Button.Secondary.svelte';
	import IconArrow from '~icons/material-symbols/arrow-forward';

	let {
		primaryLabel,
		primaryHref = '#',
		secondaryLabel,
		secondaryHref = '#',
		showArrow = true
	}: {
		primaryLabel: string;
		primaryHref?: string;
		secondaryLabel: string;
		secondaryHref?: string;
		showArrow?: boolean;
	} = $props();
</script>

<div class="cta-group">
	<ButtonPrimary href={primaryHref}>
		{#snippet children()}
			{primaryLabel}
		{/snippet}
		{#snippet icon()}
			{#if showArrow}
				<IconArrow width="14" height="14" style="color: white" />
			{/if}
		{/snippet}
	</ButtonPrimary>

	<ButtonSecondary href={secondaryHref}>
		{#snippet children()}
			{secondaryLabel}
		{/snippet}
	</ButtonSecondary>
</div>

<style>
	.cta-group {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		flex-wrap: wrap;
	}
</style>
