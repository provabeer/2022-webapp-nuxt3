import { createNuxtPersistedState } from 'pinia-plugin-persistedstate'
import { defineNuxtPlugin, useCookie } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  console.log("persisted client")

  nuxtApp.$pinia.use(createNuxtPersistedState(useCookie))
})