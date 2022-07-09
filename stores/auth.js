import { defineStore } from 'pinia'

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),

  persist: true,

  actions: {
    async onSigninWithEmail({ email, password }) {
      const auth = getAuth()
      const response = await signInWithEmailAndPassword(auth, email, password)
      this.setUser(response.user)
    },

    async onSignupWithEmail({ email, password }) {
      const auth = getAuth()
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      this.setUser(response.user)
    },

    async onSignout() {
      const auth = getAuth()
      await signOut(auth)
      this.cleanUser()
    },

    async currentUser() {
      const auth = getAuth()

      return await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
          if (!user) {
            reject(undefined)
          } else {
            resolve(user)
            this.setUser(user)
          }
        })
      })
    },

    setUser(payload) {
      this.user = payload
    },

    cleanUser() {
      this.user = ''
    },
  },

  getters: {
    userData(state) {
      return state.user
    },

    loggedin(state) {
      return !!state.user
    }
  },
})
