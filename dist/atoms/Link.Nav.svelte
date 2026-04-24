<script lang="ts">
	let {
		href = '#',
		label,
		active = false
	}: {
		href?: string;
		label: string;
		active?: boolean;
	} = $props();
</script>

<a {href} class="link-nav" class:link-nav--active={active}>
	{label}
</a>

<style>
	.link-nav {
		font-family: var(--font-nav);
		font-size: var(--text-lg);
		font-weight: 400;
		font-style: normal;
		line-height: 1.556;
		letter-spacing: -0.45px;
		color: var(--color-text-muted);
		text-decoration: none;
		padding-bottom: 4px;
		border-bottom: 2px solid transparent;
		transition: color var(--transition-fast), border-color var(--transition-fast);
	}

	.link-nav:hover {
		color: var(--color-primary);
	}

	.link-nav--active {
		color: var(--color-primary);
		font-weight: 700;
		border-bottom-color: var(--color-primary);
	}
</style>
