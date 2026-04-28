import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true,
			customCollections: {
				'factory': FileSystemIconLoader(
					'./factory/assets/icons/regular',
					svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')
				)
			}
		})
	],
	resolve: {
		alias: {
			'$root': resolve(__dirname, './')
		}
	},
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
