module.exports = {
	title: '大前端杂记', // 设置网站标题
	description: '记录工作中遇到问题及处理方案,以及一些插件文档', // 网站的描述
	base: '/', // 部署站点的基础路径
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
		displayAllHeaders: true,
		nav: [{
			text: '主页',
			link: '/'
		}, {
			text: '前端',
			items: [{
					text: 'vue',
					link: '/front-end/vue/vue01'
				},
				{
					text: 'react',
					link: '/front-end/react/react01'
				},
				{
					text: 'vuepress',
					link: '/front-end/vuepress/快速搭建'
				}
			]
		}],
		sidebar: {
			'/front-end/vue/': [{
				title: 'vue笔记',
				collapsable: false,
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
				collapsable: false,
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
			'/front-end/vuepress/': [{
				title: 'vuepress笔记',
				collapsable: false,
				children: [{
						title: '快速搭建',
						path: '/front-end/vuepress/快速搭建.md'
					},
					{
						title: '目录结构',
						path: '/front-end/vuepress/目录结构.md'
					},
					{
						title: '基本配置',
						path: '/front-end/vuepress/基本配置.md'
					},
					{
						title: 'Markdown详解',
						path: '/front-end/vuepress/Markdown详解.md'
					},
					{
						title: '实用插件',
						path: '/front-end/vuepress/实用插件.md'
					},
					{
						title: '部署',
						path: '/front-end/vuepress/部署.md'
					}
				]
			}]
		},
		sidebarDepth: 2,
		lastUpdated: 'Last Updated'
	},
}
