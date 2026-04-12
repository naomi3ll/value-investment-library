// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: ['./src/styles/custom.css'],
			expressiveCode: {
				themes: ['dracula', 'github-light'],
				styleOverrides: {
					borderRadius: '12px',
					borderColor: 'var(--sl-color-gray-5)',
				},
			},
			title: '理性与复利',
			description: '价值投资经典原典与深度研究',
			defaultLocale: 'zh-cn',
			head: [
				{ tag: 'link', rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/naomi-yin/value-investment-library' },
			],
sidebar: [
				{
					label: '巴菲特',
					autogenerate: { directory: 'buffett' },
				},
				{
					label: '芒格',
					autogenerate: { directory: 'munger' },
				},
				{
					label: '格雷厄姆',
					autogenerate: { directory: 'graham' },
				},
				{
					label: '关于',
					link: '/about/',
				},
			],
		}),
	],
});
