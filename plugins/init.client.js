import { useAuthStore } from '@/stores/auth'
import { useCookie } from '#app'

export default defineNuxtPlugin(async () => {
  const store = useAuthStore()
  const userOnCookie = useCookie('user')

  if (userOnCookie.value) {
    await store.currentUser()
  }
})
