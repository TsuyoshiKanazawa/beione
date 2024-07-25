// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      link: [
        { rel: "icon", type: "image/svg", href: "/favicon.svg" },
      ],
      meta: [
        { property: 'og:title', content: '米１グランプリ松江2024｜お米で地方から日本を元気に！' },
        { name: 'description', content: 'こだわりのメニューを食べ比べ、来場者の投票でナンバーワンを決める、お祭りのように楽しく、真剣な食イベント！' },
        { property: 'og:description', content: 'こだわりのメニューを食べ比べ、来場者の投票でナンバーワンを決める、お祭りのように楽しく、真剣な食イベント！' },
        { property: 'og:image', content: 'https://bei1.jp/images/ogp.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://bei1.jp/images/ogp.jpg' }
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
