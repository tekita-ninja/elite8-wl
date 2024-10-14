// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      charset: "utf-8",
      title: "Elite Eight",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "robots",
          content: "noindex",
        },
        {
          name: "og:title",
          content: "Elite Eight"
        },
        {
          name: "description",
          content: "Your waitlist at eite eight"
        },
        {
          name: "og:image",
          content: "android-icon-192x192"
        },
        {
          name: "og:image:type",
          content: "image/png"
        },
        {
          name: "og:image:width",
          content: "512"
        },
        {
          name: "og:image:height",
          content: "512"
        },
        {
          name: "og:description",
          content: "Your waitlist at eite eight"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:site",
          content: "@mempool"
        },
        {
          name: "twitter:creator",
          content: "@mempool"
        },
        {
          name: "twitter:title",
          content: "Elite Eight"
        },
        {
          name: "twitter:description",
          content: "Your waitlist at eite eight"
        },
        {
          name: "twitter:image",
          content: "android-icon-192x192"
        },
        {
          name: "twitter:domain",
          content: "bellspool.io"
        },
      ],
    },
  },
  ssr:false,
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/icon']
})