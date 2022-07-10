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
      
      async currentUser() {
        console.log("currentUser")
        const auth = getAuth()

        return await new Promise(async (resolve, reject) => {
          onAuthStateChanged(auth, (user) => {
            if (!user) {
              console.log("!user")
              resolve()
            } else {
              console.log("user")
              resolve(user)
              this.setUser(user)
            }
            console.log("on auth state changed end")
          })
          console.log("end promise")
        })
      },
      
      setUser(payload) {
        console.log("setUser")
        this.user = payload
      },
      
      cleanUser() {
        this.user = null
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
  