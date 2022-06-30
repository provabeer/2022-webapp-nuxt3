import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDJdFHLH_jGQFcBN2hS47NvXgc1tWKFUd4',
    authDomain: 'provabeer.firebaseapp.com',
    databaseURL: 'https://provabeer.firebaseio.com',
    projectId: 'provabeer',
    storageBucket: 'provabeer.appspot.com',
    messagingSenderId: '890053780568',
    appId: '1:890053780568:web:5d326a6dd553710062d62d',
  }

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)

  console.log("plugin firebase")

  return {
    provide: {
      firebaseApp: app,
      firebaseAuth: auth,
      firebaseDb: db,
    },
  }
})
