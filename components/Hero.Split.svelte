<script lang="ts">
	/**
	 * @component Hero.Split
	 * @description Svelte 5 Organism dividing the viewport into an image (left) and content (right).
	 * Adheres to Green Coding (async lazy loading) and Svelte 5 strict patterns (Runes, Snippets).
	 * 
	 * @prop {string} badgeLabel - Text for the top tag.
	 * @prop {import('svelte').Snippet} [badgeIcon] - Optional snippet to replace the default globe icon.
	 * @prop {() => void} [onPrimaryClick] - Pure callback replacing Svelte 4's createEventDispatcher.
	 */

	import BadgeTag from '$lib/atoms/Badge.Tag.svelte';
	// Nota: Reemplazar o abstraer IconGlobe según la configuración de Green Coding del proyecto
	import IconGlobe from '~icons/material-symbols/public';
	import HeadingHero from '$lib/molecules/Heading.Hero.svelte';
	import CTAGroup from '$lib/molecules/CTA.Group.svelte';
	import CaptionOverlay from '$lib/molecules/Caption.Overlay.svelte';
	import TrustBarStats from '$lib/organisms/TrustBar.Stats.svelte';

	let {
		badgeLabel = 'COMPANY NAME',
		headline = 'Building',
		headlineAccent = 'Modern',
		headlineEnd = 'Solutions.',
		subheading = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		primaryCta = 'Primary Action',
		primaryHref = '#primary',
		onPrimaryClick = () => {},
		secondaryCta = 'Secondary Action',
		secondaryHref = '#secondary',
		heroImage = 'https://placehold.co/800x1200',
		heroAlt = 'Generic placeholder image',
		captionTitle = 'Innovation Focus',
		captionDesc = 'Building modern solutions for future generations through sustainable practices.',
		stats = [
			{ value: '00', label: 'METRIC ONE' },
			{ value: '00', label: 'METRIC TWO' }
		],
		badgeIcon
	}: {
		badgeLabel?: string;
		headline?: string;
		headlineAccent?: string;
		headlineEnd?: string;
		subheading?: string;
		primaryCta?: string;
		primaryHref?: string;
		onPrimaryClick?: () => void;
		secondaryCta?: string;
		secondaryHref?: string;
		heroImage?: string;
		heroAlt?: string;
		captionTitle?: string;
		captionDesc?: string;
		stats?: Array<{ value: string; label: string }>;
		badgeIcon?: import('svelte').Snippet;
	} = $props();
</script>

<section class="hero-split" aria-labelledby="hero-split-heading">
	<div class="hero-split__container">
		<!-- Left: Dramatic Imagery -->
		<div class="hero-split__left">
			<img
				src={heroImage}
				alt={heroAlt}
				class="hero-split__image"
				loading="lazy"
				decoding="async"
			/>
			<div class="hero-split__overlay" aria-hidden="true"></div>
			<div class="hero-split__caption">
				<CaptionOverlay title={captionTitle} description={captionDesc} />
			</div>
		</div>

		<!-- Right: Typography & CTA -->
		<div class="hero-split__right">
			<!-- Badge -->
			<div class="hero-split__badge">
				<BadgeTag label={badgeLabel}>
					{#snippet icon()}
						{#if badgeIcon}
							{@render badgeIcon()}
						{:else}
							<IconGlobe width="16" height="16" style="color: var(--color-badge-text); margin-right: 2px;" />
						{/if}
					{/snippet}
				</BadgeTag>
			</div>

			<!-- Headline -->
			<HeadingHero align="left">
				{#snippet children()}
					<h1 id="hero-split-heading">
						{headline}<br />
						<span class="accent">{headlineAccent}</span><br />
						{headlineEnd}
					</h1>
				{/snippet}
			</HeadingHero>

			<!-- Subheading -->
			<p class="hero-split__sub">{subheading}</p>

			<!-- CTAs -->
			<div class="hero-split__ctas">
				<CTAGroup
					primaryLabel={primaryCta}
					{primaryHref}
					secondaryLabel={secondaryCta}
					{secondaryHref}
				/>
			</div>

			<!-- Trust Indicators -->
			<TrustBarStats {stats} />
		</div>
	</div>
</section>

<style>
	.hero-split {
		background-color: var(--color-neutral-warm);
		padding: 25.5px 0;
	}

	.hero-split__container {
		display: flex;
		align-items: center;
		gap: var(--space-24);
		max-width: 1280px;
		margin: 0 auto;
		padding: var(--space-24) var(--space-8);
	}

	/* Left Column */
	.hero-split__left {
		position: relative;
		flex: 1;
		min-width: 0;
		height: 700px;
		overflow: hidden;
	}

	.hero-split__image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-split__overlay {
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.1);
	}

	.hero-split__caption {
		position: absolute;
		bottom: var(--space-8);
		left: var(--space-8);
		right: var(--space-8);
		opacity: 0;
		transform: translateY(8px);
		transition: opacity var(--transition-slow), transform var(--transition-slow);
	}

	.hero-split__left:hover .hero-split__caption {
		opacity: 1;
		transform: translateY(0);
	}

	/* Right Column */
	.hero-split__right {
		flex: 1;
		min-width: 0;
		max-width: 576px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		--heading-size: clamp(2.25rem, 3.8vw, 3.5rem);
	}

	.hero-split__badge {
		margin-bottom: var(--space-8);
	}

	.hero-split__sub {
		max-width: 448px;
		margin-top: var(--space-6);
		font-family: var(--font-body);
		font-size: var(--text-lg);
		font-weight: 400;
		line-height: 1.625;
		color: var(--color-text-body);
	}

	.hero-split__ctas {
		margin-top: var(--space-8);
	}

	@media (max-width: 1024px) {
		.hero-split__container {
			flex-direction: column;
			gap: var(--space-12);
			padding: var(--space-12) var(--space-6);
		}

		.hero-split__left {
			width: 100%;
			height: 400px;
		}

		.hero-split__right {
			max-width: 100%;
		}

		.hero-split__caption {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
