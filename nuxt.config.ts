// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#'
      },
      link: [
        { rel: "icon", type: "image/svg", href: "/favicon.svg" },
        { rel: "shortcut icon", type: "image/ico", href: "/favicon.ico" },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { hid: 'description', name: 'description', content: 'こだわりのメニューを食べ比べ、来場者の投票でナンバーワンを決める、お祭りのように楽しく、真剣な食イベント！' },
        { name: 'format-detection', content: 'telephone=no' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { 'http-equiv': 'content-language', content: 'ja' },
        { hid: 'og:site_name', property: 'og:site_name', content: '米１グランプリ松江2024｜お米で地方から日本を元気に！' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://bei1.jp/' },
        { hid: 'og:title', property: 'og:title', content: '米１グランプリ松江2024｜お米で地方から日本を元気に！' },
        { hid: 'og:description', property: 'og:description', content: 'こだわりのメニューを食べ比べ、来場者の投票でナンバーワンを決める、お祭りのように楽しく、真剣な食イベント！' },
        { hid: 'og:image', property: 'og:image', content: 'https://bei1.jp/images/ogp.jpg' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', property: 'twitter:site', content: '@' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      spaceUid: process.env.NEWT_SPACE_UID,
      cdnApiToken: process.env.NEWT_CDN_API_TOKEN
    }
  },
  css: ["@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/defines.scss";',
        },
      },
    }
  },
  plugins: [
    { src: '~/plugins/google-analytics.client.js', mode: 'client' }
  ],
})
