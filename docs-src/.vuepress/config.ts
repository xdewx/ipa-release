/*
 * @Author: leoking
 * @Date: 2023-07-24 13:08:00
 * @LastEditTime: 2023-07-29 19:15:02
 * @LastEditors: leoking
 * @Description: 
 */
import { defineUserConfig } from 'vuepress'
import { tocPlugin } from '@vuepress/plugin-toc'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'IPA',
    description: 'Intelligent Personal Assistance',
    base: "/docs/",
    dest: "${sourceDir}/../docs/",
    plugins: [tocPlugin({}), autoCatalogPlugin({
        level: 2,
    })],
    theme: defaultTheme({
        navbar: [
            {
                text: '文档',
                link: '/',
            },
            {
                text: '官网',
                link: 'https://ipa.leoking.xyz',
            },
        ],
        contributors: false
    }),
    markdown: {
        toc: false
    },
    head: [
        ["script", { "src": "../../assets/bd_analytics.js" }]
    ]
})