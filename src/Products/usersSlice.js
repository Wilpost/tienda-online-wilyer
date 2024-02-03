import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_STATE = {
  usersRegisters: [],
  userLogged: false,
  dataUserLogged: {},
  viewModaLogged: false
}

const initialState = (() => {
  const usersPersists = localStorage.getItem('users__account__state')

  return usersPersists ? JSON.parse(usersPersists) : DEFAULT_STATE
})()

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.usersRegisters.push(action.payload)
    },
    setUserLogged: (state, action) => {
      state.userLogged = action.payload
    },
    viewModal: (state, action) => {
      state.viewModaLogged = action.payload
    },
    setDataUserLogged: (state, action) => {
      state.dataUserLogged = action.payload
    }
  }
})

export default usersSlice.reducer
export const { registerUser, setUserLogged, viewModal, setDataUserLogged } =
  usersSlice.actions
