import { defineNuxtPlugin } from "#app"
import { useAuthStore } from "@/stores/auth"

export default defineNuxtPlugin(() => {
    console.log("init client")
    const store = useAuthStore()
    store.currentUser()
})