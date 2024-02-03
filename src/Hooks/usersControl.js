import {
  registerUser,
  setDataUserLogged,
  setUserLogged,
  viewModal
} from '../Products/usersSlice'
import { useAppDispatch, useAppSelector } from './store'

export function useUserControl() {
  const dispatch = useAppDispatch()
  const { usersRegisters, userLogged, viewModaLogged } = useAppSelector(
    state => state.users
  )

  const addUserAccount = value => {
    dispatch(registerUser(value))
  }

  const isLoggedTheUser = value => {
    dispatch(setUserLogged(value))
  }

  const setViewModalLogged = val => {
    dispatch(viewModal(val))
  }

  const addUserLogged = data => {
    dispatch(setDataUserLogged(data))
  }

  return {
    addUserAccount,
    isLoggedTheUser,
    setViewModalLogged,
    addUserLogged,
    userLogged,
    viewModaLogged,
    usersRegisters
  }
}
