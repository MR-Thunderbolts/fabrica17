import type { Snippet } from 'svelte';
type $$ComponentProps = {
    href?: string;
    variant?: 'primary';
    children: Snippet;
    icon?: Snippet;
    onclick?: (e: MouseEvent) => void;
};
declare const Button: import("svelte").Component<$$ComponentProps, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
