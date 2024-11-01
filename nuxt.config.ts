// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {

    families: {
      Roboto:true,
      'Space Grotesk':true, 
      'Ubuntu Mono':true,
    },
    display: 'swap', 
    preconnect: true, 
    prefetch: true, 
  }
});
