import { build } from 'vite';
import { resolve } from 'path';
import Sitemap from 'vite-plugin-sitemap';

export default {
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				card: resolve(__dirname, 'card.html'),
				policy: resolve(__dirname, 'policies.html'),
			},
		},
	},
	plugins: [Sitemap()],
};
