import { useAuthStore } from '@/stores/auth'

export default function useAuth() {
  const store = useAuthStore()

  const form = reactive({
    email: '',
    password: '',
  })

  const onClickToSignup = () => {
    store
      .onSignupWithEmail(form)
      .then(() => {
        console.log('then')
      })
      .catch((error) => {
        console.log('error')
        console.log(error)
      })
  }

  const onClickToSignin = () => {
    store
      .onSigninWithEmail(form)
      .then(() => {
        console.log('then')
      })
      .catch((error) => {
        console.log('error')
        console.log(error)
      })
  }

  const onClickToSignout = () => {
    store
      .onSignout()
      .then(() => {
        console.log('then')
      })
      .catch((error) => {
        console.log('error')
        console.log(error)
      })
  }

  return {
    form,
    onClickToSignup,
    onClickToSignin,
    onClickToSignout,
  }
}
