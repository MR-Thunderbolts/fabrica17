<script lang="ts">
	import LinkNav from "$lib/atoms/Link.Nav.svelte";
	import ButtonIcon from "$lib/atoms/Button.Icon.svelte";
	import ButtonPrimary from "$lib/atoms/Button.Primary.svelte";
	import IconAccount from '~icons/material-symbols/person-outline';

	let {
		brand = "Acme Corp",
		leftLinks = [
			{ label: "Link 1", href: "#link-1", active: true },
			{ label: "Link 2", href: "#link-2" },
			{ label: "Link 3", href: "#link-3" },
		],
		rightLinks = [
			{ label: "Link 4", href: "#link-4" },
			{ label: "Link 5", href: "#link-5" },
		],
		ctaLabel = "Action",
		ctaHref = "#action",
	}: {
		brand?: string;
		leftLinks?: Array<{ label: string; href: string; active?: boolean }>;
		rightLinks?: Array<{ label: string; href: string; active?: boolean }>;
		ctaLabel?: string;
		ctaHref?: string;
	} = $props();
</script>

<header class="navbar-c">
	<div class="navbar-c__container">
		<nav class="navbar-c__left" aria-label="Primary navigation">
			{#each leftLinks as link}
				<LinkNav
					label={link.label}
					href={link.href}
					active={link.active ?? false}
				/>
			{/each}
		</nav>

		<a href="/" class="navbar-c__brand">{brand}</a>

		<div class="navbar-c__right">
			<nav
				class="navbar-c__right-links"
				aria-label="Secondary navigation"
			>
				{#each rightLinks as link}
					<LinkNav
						label={link.label}
						href={link.href}
						active={link.active ?? false}
					/>
				{/each}
			</nav>

			<div class="navbar-c__right-actions">
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
	</div>
</header>

<style>
	.navbar-c {
		position: sticky;
		top: 0;
		z-index: 100;
		width: 100%;
		background-color: var(--color-neutral-bg);
		border-bottom: 1px solid var(--color-border-light);
	}

	.navbar-c__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1280px;
		height: 80px;
		margin: 0 auto;
		padding: 0 var(--space-8);
	}

	.navbar-c__left {
		display: flex;
		align-items: center;
		gap: var(--space-8);
		flex: 1;
	}

	.navbar-c__brand {
		font-family: var(--font-nav);
		font-size: var(--text-2xl);
		font-weight: 700;
		font-style: normal;
		letter-spacing: -0.6px;
		color: var(--color-primary);
		text-decoration: none;
		line-height: 1.333;
		padding: 0 var(--space-4);
	}

	.navbar-c__right {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: var(--space-8);
		flex: 1;
	}

	.navbar-c__right-links {
		display: flex;
		align-items: center;
		gap: var(--space-8);
	}

	.navbar-c__right-actions {
		display: flex;
		align-items: center;
		gap: var(--space-4);
	}

	@media (max-width: 768px) {
		.navbar-c__left,
		.navbar-c__right-links {
			display: none;
		}
	}
</style>
