import { useAuthStore } from '@/stores/auth'
import { useCookie } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore()
  const userOnCookie = useCookie('user')

  console.log('middleware begin', store.loggedin)

  if (userOnCookie.value) {
    console.log('middleware inside if store loggedin')
    return navigateTo('/')
  }
})

// import { defineNuxtMiddleware } from '@nuxtjs/composition-api'

// export default defineNuxtMiddleware(ctx => {
// 	if(ctx.store.getters['users/isLoggedIn']) {
// 		return ctx.redirect({ name: 'index' })
// 	}
// })
