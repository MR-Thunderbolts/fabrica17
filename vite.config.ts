import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({ compiler: 'svelte', autoInstall: true })
	],
	build: {
		target: 'esnext',
		minify: true,
		cssMinify: true,
		rollupOptions: {
			output: {
				manualChunks: undefined
			},
			treeshake: {
				moduleSideEffects: false,
				propertyReadSideEffects: false
			}
		}
	}
});
