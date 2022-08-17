import { useAuthStore } from '@/stores/auth'

export default function useAuth() {
  const store = useAuthStore()

  const form = reactive({
    email: 'b@b.com',
    password: '123123',
  })

  const onClickToSignup = () => {
    store
      .onSignupWithEmail(form)
      .then(() => {
        navigateTo('/')
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
        navigateTo('/')
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
        navigateTo('/')
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
