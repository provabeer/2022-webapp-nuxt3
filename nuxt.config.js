import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: [
    "@pinia/nuxt",
  ],
  modules: [
    "@unocss/nuxt",
  ],
  experimental: {
    viteMode: true,
  }
})
