<script lang="ts">
	import { page } from '$app/state';
</script>

<main style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; text-align: center; font-family: var(--font-body);">
	<h1 style="font-size: 8rem; font-weight: 900; margin: 0; opacity: 0.2;">{page.status}</h1>
	<p style="font-size: 1.5rem; color: var(--color-text-muted); margin-bottom: 2rem;">{page.error?.message || 'An unexpected error occurred'}</p>
	<a href="/" style="padding: 1rem 2rem; background: var(--color-primary); color: var(--color-primary-foreground); text-decoration: none; border-radius: var(--radius-md);">Back to Home</a>
</main>
