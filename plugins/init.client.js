import { defineNuxtPlugin } from '#app'
import { useAuthStore } from '@/stores/auth'
import { useCookie } from '#app'

export default defineNuxtPlugin(async () => {
  console.log('init client begin')

  const store = useAuthStore()
  const userOnCookie = useCookie('user')

  if (userOnCookie.value) {
    console.log('tem user cookie')

    await store.currentUser()
  }

  console.log('init client end')
})
