const nav = require('./nav')
const menuVuePress = require('./menu/vuepress.js')
const menuOther = require('./menu/other.js')
module.exports = {
	title: '大前端杂记', // 设置网站标题
	description: '记录工作中遇到问题及处理方案,以及一些插件文档', // 网站的描述
	base: '/front-end-docs/', // 部署站点的基础路径
	head: [
		['link', {
			rel: 'icon',
			href: '/images/logo.png'
		}]
	],
	plugin: [
		'@vuepress/back-to-top',
		'@vuepress/nprogress'
	],
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		logo: '/images/hero.png',
		displayAllHeaders: false,
		nav: nav,
		sidebar: {
			'/front-end/vue/': [{
				title: 'vue笔记',
				children: [{
						title: 'vue11111',
						path: '/front-end/vue/vue01.md'
					},
					{
						title: 'vue22222',
						path: '/front-end/vue/vue01.md'
					}
				]
			}],
			'/front-end/react/': [{
				title: 'react笔记',
				children: [{
						title: 'react1111',
						path: '/front-end/react/react01.md'
					},
					{
						title: 'react2222',
						path: '/front-end/react/react01.md'
					}
				]
			}],
			'/front-end/vuepress/': menuVuePress, // vuepress
			'/front-end/other/': menuOther  // 杂记
		},
		sidebarDepth: 2,
		lastUpdated: 'Last Updated'
	},
}
