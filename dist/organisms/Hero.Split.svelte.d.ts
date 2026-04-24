type $$ComponentProps = {
    badgeLabel?: string;
    headline?: string;
    headlineAccent?: string;
    headlineEnd?: string;
    subheading?: string;
    primaryCta?: string;
    primaryHref?: string;
    secondaryCta?: string;
    secondaryHref?: string;
    heroImage?: string;
    heroAlt?: string;
    captionTitle?: string;
    captionDesc?: string;
    stats?: Array<{
        value: string;
        label: string;
    }>;
    badgeIcon?: import('svelte').Snippet;
};
declare const Hero: import("svelte").Component<$$ComponentProps, {}, "">;
type Hero = ReturnType<typeof Hero>;
export default Hero;
