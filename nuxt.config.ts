// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon", "nuxt-gtag"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Gerardo Garcia: Frontend Developer based in Los Angeles",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },

  nitro: {
    compressPublicAssets: true,
  },
  gtag: {
    id: "G-833G02BN7R",
  },
});
