type $$ComponentProps = {
    brand?: string;
    links?: Array<{
        label: string;
        href: string;
        active?: boolean;
    }>;
    ctaLabel?: string;
    ctaHref?: string;
};
declare const Navbar: import("svelte").Component<$$ComponentProps, {}, "">;
type Navbar = ReturnType<typeof Navbar>;
export default Navbar;
