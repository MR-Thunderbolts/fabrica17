// Type declarations for unplugin-icons
// Allows: import IconName from '~icons/material-symbols/home'
declare module '~icons/*' {
	import type { Component, SVGProps } from 'svelte';
	const component: Component<SVGProps<SVGSVGElement>>;
	export default component;
}
