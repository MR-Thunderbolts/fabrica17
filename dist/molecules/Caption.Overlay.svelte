<script lang="ts">
	let {
		title,
		description
	}: {
		title: string;
		description: string;
	} = $props();
</script>

<div class="caption-overlay">
	<h3 class="caption-overlay__title">{title}</h3>
	<p class="caption-overlay__desc">{description}</p>
</div>

<style>
	.caption-overlay {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: 25px;
		background-color: rgba(252, 249, 244, 0.9);
		backdrop-filter: blur(2px);
		-webkit-backdrop-filter: blur(2px);
		border: 1px solid var(--color-border-sage);
	}

	.caption-overlay__title {
		font-family: var(--font-headline);
		font-size: var(--text-lg);
		font-weight: 400;
		line-height: 1.556;
		color: var(--color-primary-dark);
	}

	.caption-overlay__desc {
		font-family: var(--font-body);
		font-size: var(--text-sm);
		font-weight: 400;
		line-height: 1.429;
		color: var(--color-text-body);
	}
</style>
