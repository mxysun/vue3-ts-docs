import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "Vue 3 + TypeScript 学习文档",
    description: "详细学习 Vue 3 和 TypeScript 的指南",
    themeConfig: {
        siteTitle: "前端学习",
        logo: "https://mxy-u.oss-cn-nanjing.aliyuncs.com/undefinedVue%203%20Deep%20Dive%20with%20Evan%20You.png",
        nav: [ // 定义了导航栏的内容
            { text:"首页", link:"/"},
            { text:"指南", link:"/guide/"},
            { text:"组件", link:"/components/"},
            { text:"API 参考", link:"/api/"},
            { text:"常见问题", link:"/questions/"},
        ],
        socialLinks: [
            { icon: "github", link:"https://github.com/vuejs/vitepress" }, // 链接到官方github仓库
        ],
        sidebar: { // 定义了侧边栏的内容 
            "/guide/": [
                {
                text: "开始",
                collapsible: true, // 是否可以折叠
                items: [
                    { text:"介绍", link: "/guide/"},
                    { text:"安装", link: "/guide/installation"},
                    { text:"基本概念", link: "/guide/concepts"},
                    ],
                },
            ],
        "/components/": [
            {
                text: "常用组件",
                items: [
                    { text:"介绍", link: "/components/"},
                    { text:"按钮 Button", link: "/components/button"},
                    { text:"表单 Form", link: "/components/form"},
                    { text:"表格 Table", link: "/components/table"},
                ],
            },
        ],
    },
    footer: {
        message: "用心学习 Vue 3 和 TypeScript!",
        copyright: "Copyright © 2024 xym",
    },
    }
})
