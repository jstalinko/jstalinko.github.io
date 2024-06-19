// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    
    head: {
      title : "JUSTALINKO - All You can {H}ate ",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "JUSTALINKO - All You can {H}ate ",
        },
        {
          name: "author",
          content: "@alinkomnsby",
        },
        {
          name: "twitter:image",
          content: "/jst.png",
        },
        {
          name: "og:image",
          content: "/jst.png",
        }
      ],
      link: [
        { rel: "shortcut icon", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Pixelify+Sans:wght@400..700&display=swap",
        },
        {
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
        },
      ],
    },
  },
  modules: [
    "@nuxt/content",
    "@vite-pwa/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/turnstile",
  ],



  tailwindcss: {
    exposeConfig: true
  },

  devtools: { enabled: true },

  
  runtimeConfig: {
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      secretKey: '0x4AAAAAAAc05_oBvjpbyWj9',
    },
    public:{
      baseUrl: 'http://localhost:3000',
    },
    POST_PASSWORD: "password"
  },
});