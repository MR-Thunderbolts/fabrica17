<script lang="ts">
	import LinkNav from '$lib/atoms/Link.Nav.svelte';
	import ButtonPrimary from '$lib/atoms/Button.Primary.svelte';
	import ButtonIcon from '$lib/atoms/Button.Icon.svelte';
	import IconAccount from '~icons/material-symbols/person-outline';

	let {
		brand = 'Acme Corp',
		links = [
			{ label: 'Link 1', href: '#link-1', active: true },
			{ label: 'Link 2', href: '#link-2' },
			{ label: 'Link 3', href: '#link-3' },
			{ label: 'Link 4', href: '#link-4' },
			{ label: 'Link 5', href: '#link-5' }
		],
		ctaLabel = 'Action',
		ctaHref = '#action'
	}: {
		brand?: string;
		links?: Array<{ label: string; href: string; active?: boolean }>;
		ctaLabel?: string;
		ctaHref?: string;
	} = $props();
</script>

<header class="navbar">
	<div class="navbar__container">
		<a href="/" class="navbar__brand">{brand}</a>

		<nav class="navbar__links" aria-label="Main navigation">
			{#each links as link}
				<LinkNav label={link.label} href={link.href} active={link.active ?? false} />
			{/each}
		</nav>

		<div class="navbar__actions">
			<ButtonPrimary href={ctaHref}>
				{#snippet children()}
					{ctaLabel}
				{/snippet}
			</ButtonPrimary>

			<ButtonIcon label="Account">
				{#snippet children()}
					<IconAccount width="20" height="20" style="color: var(--color-text-muted)" />
				{/snippet}
			</ButtonIcon>
		</div>
	</div>
</header>

<style>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 100;
		width: 100%;
		background-color: var(--color-neutral-bg);
		border-bottom: 1px solid var(--color-border-light);
	}

	.navbar__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1280px;
		height: 80px;
		margin: 0 auto;
		padding: 0 var(--space-8);
	}

	.navbar__brand {
		font-family: var(--font-nav);
		font-size: var(--text-2xl);
		font-weight: 700;
		font-style: normal;
		letter-spacing: -0.6px;
		color: var(--color-primary);
		text-decoration: none;
		line-height: 1.333;
	}

	.navbar__links {
		display: flex;
		align-items: center;
		gap: var(--space-8);
	}

	.navbar__actions {
		display: flex;
		align-items: center;
		gap: var(--space-6);
	}

	@media (max-width: 768px) {
		.navbar__links {
			display: none;
		}
	}
</style>
