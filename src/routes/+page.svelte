<script lang="ts">
	import {
		Navbar,
		Section,
		Heading,
		Button,
		Media,
		Icon,
		Card,
	} from "$root/factory/src/lib/components";

	// Icons (Local Factory Collection)
	import IconAperture from "~icons/factory/aperture";
	import IconGlobe from "~icons/factory/globe";
	import IconMagnifyingGlass from "~icons/factory/magnifying-glass";
	import IconCpu from "~icons/factory/cpu";
	import IconMousePointer from "~icons/factory/cursor";
	import IconMaximize from "~icons/factory/corners-out";
	import IconTwitter from "~icons/factory/twitter-logo";
	import IconInstagram from "~icons/factory/instagram-logo";
	import IconLinkedin from "~icons/factory/linkedin-logo";
	import IconGithub from "~icons/factory/github-logo";
	import IconMail from "~icons/factory/envelope";
	import IconChevronRight from "~icons/factory/caret-right";
	import IconImage from "~icons/factory/image";
	import IconFacebook from "~icons/factory/facebook-logo";
	import IconYoutube from "~icons/factory/youtube-logo";
	import IconChevronDown from "~icons/factory/caret-down";
	import IconWrench from "~icons/factory/wrench";
	import IconFunction from "~icons/factory/function";
	import IconMinus from "~icons/factory/minus";
	import IconDesktop from "~icons/factory/desktop";
</script>

<svelte:head>
	<title>Ciclo17 — Built for the Future</title>
</svelte:head>

<Navbar.Root>
	<Navbar.Brand>
		<div class="logo">Logo</div>
	</Navbar.Brand>

	<Navbar.Links
		links={[
			{ label: "Nosotros", href: "#nosotros" },
			{ label: "Blog", href: "#blog" },
			{ label: "Sustentabilidad", href: "#sustentabilidad" },
		]}
	>
		<div class="nav-dropdown nav-link">
			Digital <Icon icon={IconChevronDown} size="16" />
		</div>
	</Navbar.Links>

	<Navbar.Actions>
		<Button variant="primary">Contacto</Button>
	</Navbar.Actions>
</Navbar.Root>

<main class="main-content">
	<!-- HERO (HEADER / 110 /) -->
	<Section.Root id="home" padding="large">
		{#snippet content()}
			<div class="hero-layout">
				<div class="hero-content">
					<div class="hero-title-area">
						<Heading level="h2">Build websites that matter</Heading>
					</div>
					<div class="hero-text-area">
						<p class="hero-subtext">
							Fast, sustainable, and built for everyone. We create
							sites that perform without compromise.
						</p>
						<div class="hero-actions">
							<Button variant="primary">Start now</Button>
							<Button variant="secondary">Learn more</Button>
						</div>
					</div>
				</div>
				<div class="hero-visual">
					<div class="hero-images-flex">
						<Media class="img-hero-main">
							<div class="placeholder-icon">
								<Icon icon={IconImage} size="48" />
							</div>
						</Media>
						<Media class="img-hero-sub">
							<div class="placeholder-icon">
								<Icon icon={IconImage} size="48" />
							</div>
						</Media>
					</div>
				</div>
			</div>
		{/snippet}
	</Section.Root>

	<!-- FEATURES (LAYOUT / 237 /) -->
	<Section.Root id="nosotros" class="section-white" padding="large">
		{#snippet content()}
			<div class="features-header">
				<p class="tagline">Essentials</p>
				<Heading
					level="h2"
					subheading="We build on a foundation of speed, sustainability, and inclusion. Every decision we make serves these three commitments."
					class="centered-heading"
				>
					Three pillars that define our work
				</Heading>
			</div>

			<div class="features-grid">
				<div class="feature-item">
					<div class="icon-wrapper">
						<Icon
							icon={IconAperture}
							size={48}
							class="icon-pillar"
						/>
					</div>
					<div class="feature-text">
						<Heading level="h4" class="centered-heading"
							>Sustainable digital</Heading
						>
						<p>
							Websites that reduce environmental impact with every
							page load.
						</p>
					</div>
				</div>
				<div class="feature-item">
					<div class="icon-wrapper">
						<Icon
							icon={IconMagnifyingGlass}
							size={48}
							class="icon-pillar"
						/>
					</div>
					<div class="feature-text">
						<Heading level="h4" class="centered-heading"
							>Fast loading</Heading
						>
						<p>
							Performance that keeps visitors engaged and search
							engines satisfied.
						</p>
					</div>
				</div>
				<div class="feature-item">
					<div class="icon-wrapper">
						<Icon icon={IconGlobe} size={48} class="icon-pillar" />
					</div>
					<div class="feature-text">
						<Heading level="h4" class="centered-heading"
							>Web accessibility</Heading
						>
						<p>
							Design that works for everyone, regardless of
							ability or device.
						</p>
					</div>
				</div>
			</div>

			<div class="features-actions">
				<Button variant="secondary">Explore</Button>
				<Button variant="secondary" class="btn-arrow">
					Arrow <Icon icon={IconChevronRight} size="16" />
				</Button>
			</div>
		{/snippet}
	</Section.Root>

	<!-- TOOLS (LAYOUT / 220 /) -->
	<Section.Root id="blog" padding="large">
		{#snippet content()}
			<div class="tools-layout">
				<div class="tools-visual">
					<Media class="img-tools">
						<div class="placeholder-icon">
							<Icon icon={IconImage} size="64" />
						</div>
					</Media>
				</div>
				<div class="tools-content">
					<div class="tools-grid">
						<div class="tool-item">
							<Icon icon={IconWrench} size={48} class="icon-pillar" />
							<div class="tool-text">
								<Heading level="h5">Understand your needs</Heading>
								<p>We listen first, then build with purpose and clarity.</p>
							</div>
						</div>
						<div class="tool-item">
							<Icon icon={IconFunction} size={48} class="icon-pillar" />
							<div class="tool-text">
								<Heading level="h5">Design lean</Heading>
								<p>Every element serves a function, nothing more, nothing less.</p>
							</div>
						</div>
						<div class="tool-item">
							<Icon icon={IconMinus} size={48} class="icon-pillar" />
							<div class="tool-text">
								<Heading level="h5">Optimize ruthlessly</Heading>
								<p>Code, images, and assets trimmed to their essential core.</p>
							</div>
						</div>
						<div class="tool-item">
							<Icon icon={IconDesktop} size={48} class="icon-pillar" />
							<div class="tool-text">
								<Heading level="h5">Launch and measure</Heading>
								<p>Monitor performance and impact, then refine what matters most.</p>
							</div>
						</div>
					</div>
					<div class="tools-actions">
						<Button variant="secondary">Review</Button>
						<Button variant="secondary" class="btn-arrow">
							Arrow <Icon icon={IconChevronRight} size="16" />
						</Button>
					</div>
				</div>
			</div>
		{/snippet}
	</Section.Root>

	<!-- FOOTER (FOOTER / 9 /) -->
	<Section.Root class="section-white" padding="medium">
		{#snippet content()}
			<Card variant="filled" class="footer-card">
				<div class="footer-main-layout">
					<div class="newsletter-col">
						<div class="footer-logo">Logo</div>
						<p class="footer-tagline">
							Get updates on new tools and sustainable web
							practices.
						</p>
						<div class="newsletter-actions">
							<div class="newsletter-form">
								<input
									type="email"
									placeholder="Your email address"
									class="email-input"
								/>
								<Button variant="secondary">Subscribe</Button>
							</div>
							<p class="privacy-note">
								We respect your privacy and keep things clean
							</p>
						</div>
					</div>

					<div class="link-cols">
						<div class="link-col">
							<h6 class="footer-heading">Stay in the loop</h6>
							<div class="footer-links">
								<a href="#about">About us</a>
								<a href="#work">Our work</a>
								<a href="#contact">Contact</a>
								<a href="#careers">Careers</a>
								<a href="#press">Press kit</a>
							</div>
						</div>
						<div class="link-col">
							<h6 class="footer-heading">Resources</h6>
							<div class="footer-links">
								<a href="#blog">Blog</a>
								<a href="#sustentabilidad"
									>Sustentabilidad digital</a
								>
								<a href="#nosotros">Nosotros</a>
								<a href="#home">Home</a>
								<a href="#contact">Contact</a>
							</div>
						</div>
						<div class="link-col">
							<h6 class="footer-heading">Connect</h6>
							<div class="footer-links">
								<a href="#twitter"
									><Icon icon={IconTwitter} size="24" /> Twitter</a
								>
								<a href="#instagram"
									><Icon icon={IconInstagram} size="24" /> Instagram</a
								>
								<a href="#linkedin"
									><Icon icon={IconLinkedin} size="24" /> LinkedIn</a
								>
								<a href="#github"
									><Icon icon={IconGithub} size="24" /> GitHub</a
								>
								<a href="#email"
									><Icon icon={IconMail} size="24" /> Email</a
								>
							</div>
						</div>
					</div>
				</div>

				<div class="footer-bottom-credits">
					<div class="credits-row">
						<p>© 2025 Ciclo17. All rights reserved.</p>
						<div class="legal-links-underlined">
							<a href="#privacy">Privacy policy</a>
							<a href="#terms">Terms and conditions</a>
							<a href="#cookies">Cookie preferences</a>
						</div>
					</div>
				</div>
			</Card>
		{/snippet}
	</Section.Root>
</main>

<style>
	.main-content {
		overflow-x: hidden;
		width: 100%;
	}

	.logo {
		font-weight: 700;
		font-size: 1.5rem;
		font-family: var(--font-body);
		height: 36px;
		display: flex;
		align-items: center;
	}

	.nav-dropdown {
		display: flex;
		align-items: center;
		gap: 4px;
		cursor: pointer;
	}

	/* Hero Content Alignment */
	.hero-text-area {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.hero-subtext {
		font-size: var(--text-medium);
		line-height: 1.5;
		color: var(--color-black);
	}

	.hero-actions {
		display: flex;
		gap: 16px;
	}

	.hero-visual {
		flex: 1;
		display: flex;
		justify-content: flex-end;
		min-width: 0;
	}

	.placeholder-icon {
		background-color: #bdc1c4;
		padding: 24px;
		border-radius: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #e0e4e5;
	}

	/* Features Alignment */
	:global(.centered-heading) {
		text-align: center !important;
	}

	.feature-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		text-align: center;
	}

	.icon-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 8px;
	}

	.feature-text {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.features-actions {
		display: flex;
		justify-content: center;
		gap: 24px;
		margin-top: 80px;
	}

	/* Tools Alignment */
	.tools-visual {
		display: flex;
		min-width: 0;
	}

	.tools-content {
		flex: 1;
	}

	.tools-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 48px 24px;
	}

	.tool-item {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.tool-text {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.tools-actions {
		display: flex;
		gap: 24px;
		margin-top: 48px;
	}

	/* Footer Alignment */
	.footer-main-layout {
		display: flex;
		gap: 128px;
		margin-bottom: 32px;
		width: 100%;
	}

	.newsletter-col {
		width: 500px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.footer-logo {
		font-weight: 700;
		font-size: 1.5rem;
		height: 36px;
		display: flex;
		align-items: center;
		font-family: var(--font-body);
	}

	.footer-tagline {
		font-size: 16px;
		line-height: 1.5;
		font-family: var(--font-body);
	}

	.newsletter-actions {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.newsletter-form {
		display: flex;
		gap: 16px;
		width: 100%;
	}

	.email-input {
		flex: 1;
		background: rgba(7, 2, 2, 0.05);
		border: 1px solid transparent;
		padding: 12px;
		border-radius: 12px;
		font-family: var(--font-body);
		font-size: 16px;
	}

	.link-cols {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 40px;
		flex: 1;
	}

	.footer-heading {
		font-weight: 600;
		font-size: 16px;
		margin-bottom: 16px;
		font-family: var(--font-body);
	}

	.footer-links {
		display: flex;
		flex-direction: column;
	}

	.footer-links a {
		padding: 8px 0;
		font-size: 14px;
		display: flex;
		align-items: center;
		gap: 12px;
		color: var(--color-black);
		text-decoration: none;
		font-family: var(--font-body);
	}

	.privacy-note {
		font-size: 12px;
		color: var(--color-text-muted);
		font-family: var(--font-body);
	}

	.footer-bottom-credits {
		padding-top: 32px;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		font-family: var(--font-body);
	}

	.credits-row {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
	}

	.legal-links-underlined {
		display: flex;
		gap: 24px;
	}

	.legal-links-underlined a {
		color: var(--color-black);
		text-decoration: underline;
	}

	.btn-arrow {
		gap: 8px !important;
	}

	@media (max-width: 1300px) {
		.hero-layout {
			flex-direction: column;
			height: auto;
			gap: 48px;
		}
		.hero-visual {
			justify-content: center;
			width: 100%;
		}
		:global([data-fabrica-media]) {
			width: 100% !important;
			min-width: 0 !important;
			height: auto !important;
			min-height: 0 !important;
			aspect-ratio: 1 / 1 !important;
		}
	}

	@media (max-width: 1024px) {
		.tools-layout,
		.footer-main-layout {
			flex-direction: column;
			height: auto;
		}
		.hero-content {
			height: auto;
			gap: 48px;
			flex-basis: auto;
		}
		.hero-images-flex {
			flex-direction: column;
			align-items: center;
		}
		.tools-visual {
			flex-basis: auto;
			width: 100%;
			height: auto;
		}
		.newsletter-col {
			width: 100%;
		}
		.link-cols {
			grid-template-columns: 1fr;
		}
		.credits-row {
			flex-direction: column;
			gap: 16px;
			text-align: center;
		}
		.legal-links-underlined {
			justify-content: center;
		}
	}
</style>
