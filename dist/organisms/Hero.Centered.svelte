<script lang="ts">
	import EyebrowDecorated from '../molecules/Eyebrow.Decorated.svelte';
	import HeadingHero from '../molecules/Heading.Hero.svelte';
	import CTAGroup from '../molecules/CTA.Group.svelte';

	let {
		eyebrow = 'ACME CORP',
		headline = 'Modern Solutions for\nthe Future',
		subheading = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		primaryCta = 'Primary Action',
		primaryHref = '#primary',
		secondaryCta = 'Secondary Action',
		secondaryHref = '#secondary',
		heroImage = 'https://placehold.co/1024x768',
		heroAlt = 'Generic placeholder image'
	}: {
		eyebrow?: string;
		headline?: string;
		subheading?: string;
		primaryCta?: string;
		primaryHref?: string;
		secondaryCta?: string;
		secondaryHref?: string;
		heroImage?: string;
		heroAlt?: string;
	} = $props();

	let headlineLines = $derived(headline.split('\n'));
</script>

<section class="hero-centered" aria-labelledby="hero-heading">
	<!-- Decorative gradient blur background -->
	<div class="hero-centered__bg-decor" aria-hidden="true">
		<div class="hero-centered__gradient"></div>
	</div>

	<div class="hero-centered__container">
		<!-- Eyebrow -->
		<div class="hero-centered__eyebrow">
			<EyebrowDecorated label={eyebrow} />
		</div>

		<!-- Headline -->
		<HeadingHero align="center">
			{#snippet children()}
				<h1 id="hero-heading">
					{#each headlineLines as line, i}
						{#if i > 0}<br />{/if}
						{line}
					{/each}
				</h1>
			{/snippet}
		</HeadingHero>

		<!-- Subheading -->
		<p class="hero-centered__sub">{subheading}</p>

		<!-- CTAs -->
		<div class="hero-centered__ctas">
			<CTAGroup
				primaryLabel={primaryCta}
				{primaryHref}
				secondaryLabel={secondaryCta}
				{secondaryHref}
			/>
		</div>

		<!-- Featured Image -->
		<div class="hero-centered__image-wrap">
			<img
				src={heroImage}
				alt={heroAlt}
				class="hero-centered__image"
				loading="lazy"
				decoding="async"
			/>
		</div>
	</div>
</section>

<style>
	.hero-centered {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 132px var(--space-12) 100px;
		overflow: hidden;
		background: linear-gradient(90deg, var(--color-neutral-warm), var(--color-neutral-warm));
	}

	.hero-centered__bg-decor {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.1;
		pointer-events: none;
	}

	.hero-centered__gradient {
		width: 800px;
		height: 800px;
		border-radius: var(--radius-lg);
		background: linear-gradient(45deg, var(--color-primary) 0%, #C8F17A 100%);
		filter: blur(32px);
	}

	.hero-centered__container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 896px;
		width: 100%;
	}

	.hero-centered__eyebrow {
		margin-bottom: var(--space-6);
	}

	.hero-centered__sub {
		max-width: 672px;
		margin-top: var(--space-8);
		font-family: var(--font-body);
		font-size: var(--text-xl);
		font-weight: 400;
		line-height: 1.4;
		text-align: center;
		color: var(--color-text-body);
	}

	.hero-centered__ctas {
		margin-top: var(--space-12);
	}

	.hero-centered__image-wrap {
		margin-top: var(--space-20);
		width: 100%;
		max-width: 1024px;
		border: 1px solid var(--color-border-warm);
		border-radius: var(--radius-md);
		overflow: hidden;
		box-shadow: var(--shadow-sm);
		background-color: transparent;
	}

	.hero-centered__image {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.hero-centered {
			padding: var(--space-20) var(--space-6) var(--space-12);
		}

		.hero-centered__sub {
			font-size: var(--text-base);
		}

		.hero-centered__gradient {
			width: 400px;
			height: 400px;
		}
	}
</style>
