import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'

const persistStateInStorage = store => next => action => {
  next(action)

  localStorage.setItem(
    'products__state',
    JSON.stringify(store.getState().products)
  )
}

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(persistStateInStorage)
})
