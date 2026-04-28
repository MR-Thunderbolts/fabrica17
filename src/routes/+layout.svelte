<script lang="ts">
	import { settings } from '$root/utils/settings.svelte';
	import '$root/src/app.css';

	let { children } = $props();

	// Apply theme to <html> element for CSS selectors to work
	$effect(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.setAttribute('data-theme', settings.theme);
		}
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;600;700&family=Roboto+Serif:opsz,wght@8..144,400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

{@render children()}
