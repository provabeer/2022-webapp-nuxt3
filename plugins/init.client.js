import { defineNuxtPlugin } from "#app"
import { useAuthStore } from "@/stores/auth"

export default defineNuxtPlugin((nuxtApp) => {
    const store = useAuthStore()
    store.currentUser()
})