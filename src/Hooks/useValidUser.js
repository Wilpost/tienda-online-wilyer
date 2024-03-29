import { auth, authStateChanged } from '../lib/firebase/firebase'
import { useUserControl } from './usersControl'

export const useValidUser = () => {
  const { isLoggedTheUser } = useUserControl()
  function loginValidate() {
    authStateChanged(auth, user => {
      if (user) {
        isLoggedTheUser(true)
      } else {
        isLoggedTheUser(false)
      }
    })
  }

  return { loginValidate }
}
