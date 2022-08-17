import { useCookie } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
  const userOnCookie = useCookie('user')

  if (!userOnCookie.value) {
    return navigateTo('login')
  }
})
