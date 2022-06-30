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

    currentUser() {
      const auth = getAuth()
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log("user", user)
            resolve(user)
            this.setUser(user)
          } else {
            console.log("no user")
            resolve(undefined)
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
