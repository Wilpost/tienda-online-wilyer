import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import usersReducer from './usersSlice'

const persistStateInStorage = store => next => action => {
  next(action)

  localStorage.setItem(
    'products__state',
    JSON.stringify(store.getState().products)
  )
}

const addUserAccount = store => next => action => {
  next(action)

  localStorage.setItem(
    'users__account__state',
    JSON.stringify(store.getState().users)
  )
}

export const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(addUserAccount, persistStateInStorage)
})
