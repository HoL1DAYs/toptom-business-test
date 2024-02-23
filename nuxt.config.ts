// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  modules: [
    '@pinia/nuxt'
  ],
  devServer: {
    proxy: "https://qqfnjewfbgdqnkqncqefberqlfjnjqefnqervnklqfewf.toptom.kz"
  },
  runtimeConfig: {
    turnstile: {
      secretKey: '0x4AAAAAAAJs1mlCddUvC8fIATuSaAqI-Fc'
    },

    public: {
      apiBase: 'https://qqfnjewfbgdqnkqncqefberqlfjnjqefnqervnklqfewf.toptom.kz/',
    }
  },
})
