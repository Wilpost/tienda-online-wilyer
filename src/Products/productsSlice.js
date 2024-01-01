import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_STATE = {
  productsList: [],
  shoppingCardList: [],
  viewShoppingCard: false,
  viewProductDetail: false,
  productDetail: {}
}

const initialState = (() => {
  const dataStorage = localStorage.getItem('products__state')

  return dataStorage ? JSON.parse(dataStorage) : DEFAULT_STATE
})()

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductsToList: (state, action) => {
      const products = action.payload.map(item => {
        return { ...item, like: false }
      })

      state.productsList = products
    },
    addProductToCard: (state, action) => {
      const productsExistToCard = state.shoppingCardList.some(item => {
        return item.title.includes(action.payload.title)
      })

      productsExistToCard
        ? (state.shoppingCardList = [...state.shoppingCardList])
        : state.shoppingCardList.push(action.payload)
    },
    removeProductToCard: (state, action) => {
      const deletedProduct = state.shoppingCardList.filter(item => {
        return item.id !== action.payload
      })
      state.shoppingCardList = [...deletedProduct]
    },
    setViewShoppingCard: (state, action) => {
      state.viewShoppingCard = action.payload
    },
    setViewProductDetail: (state, action) => {
      state.viewProductDetail = action.payload
    },
    addProductToDetail: (state, action) => {
      state.productDetail = action.payload
    },
    setLikeProduct: (state, action) => {
      const { payload } = action

      const productsWithLike = state.productsList.map(item => {
        if (item.id === payload.id) {
          if (item.like) {
            item.like = false
          } else {
            item.like = true
          }
        }
        return item
      })

      state.productsList = productsWithLike
    }
  }
})

export default productSlice.reducer
export const {
  addProductsToList,
  addProductToCard,
  removeProductToCard,
  setViewShoppingCard,
  setViewProductDetail,
  addProductToDetail,
  setLikeProduct
} = productSlice.actions
