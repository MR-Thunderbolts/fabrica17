type $$ComponentProps = {
    brand?: string;
    leftLinks?: Array<{
        label: string;
        href: string;
        active?: boolean;
    }>;
    rightLinks?: Array<{
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
