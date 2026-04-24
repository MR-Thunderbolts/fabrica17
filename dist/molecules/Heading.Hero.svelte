<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		align = 'center',
		children
	}: {
		align?: 'left' | 'center';
		children: Snippet;
	} = $props();
</script>

<div class="heading-hero" class:heading-hero--left={align === 'left'}>
	{@render children()}
</div>

<style>
	.heading-hero {
		font-family: var(--font-headline);
		font-size: var(--heading-size, clamp(2.5rem, 5.6vw, 4.5rem));
		font-weight: 400;
		line-height: 1;
		letter-spacing: -1.8px;
		color: var(--color-primary);
		text-align: center;
	}

	.heading-hero--left {
		text-align: left;
		color: var(--color-text-primary);
	}

	.heading-hero :global(.accent) {
		font-style: italic;
		color: var(--color-primary-dark);
	}

	@media (max-width: 768px) {
		.heading-hero {
			font-size: var(--text-4xl);
			letter-spacing: -0.8px;
		}
	}
</style>
