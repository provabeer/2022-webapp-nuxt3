import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  experimental: {
    viteMode: true
  }
})
