import { defineStore } from 'pinia'
import { useCookie } from '#app'

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),

  actions: {
    async onSigninWithEmail({ email, password }) {
      const { $firebaseAuth } = useNuxtApp()
      const auth = $firebaseAuth

      const response = await signInWithEmailAndPassword(auth, email, password)
      this.setUser(response.user)
    },

    async onSignupWithEmail({ email, password }) {
      const { $firebaseAuth } = useNuxtApp()
      const auth = $firebaseAuth

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      this.setUser(response.user)
    },

    async onSignout() {
      const { $firebaseAuth } = useNuxtApp()
      const auth = $firebaseAuth

      await signOut(auth)
      this.cleanUser()
    },

    async currentUser() {
      const { $firebaseAuth } = useNuxtApp()
      const auth = $firebaseAuth

      return await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            resolve()
            this.setUser(user)
          } else {
            reject()
            this.cleanUser()
          }
        })
      })
    },

    setUser(payload) {
      const userCookie = useCookie('user')
      userCookie.value = payload
      this.user = payload
    },

    cleanUser() {
      const userCookie = useCookie('user')
      userCookie.value = null
      this.user = null
    },
  },

  getters: {
    userData(state) {
      return state.user
    },

    loggedin(state) {
      return !!state.user
    },
  },
})
