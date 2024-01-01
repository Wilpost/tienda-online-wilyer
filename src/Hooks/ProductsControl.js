import {
  addProductToCard,
  addProductToDetail,
  addProductsToList,
  removeProductToCard,
  setLikeProduct,
  setViewProductDetail,
  setViewShoppingCard
} from '../Products/productsSlice'
import { useAppDispatch, useAppSelector } from './store'

export function UseProductsControl() {
  const dispatch = useAppDispatch()
  const {
    productsList,
    shoppingCardList,
    viewShoppingCard,
    viewProductDetail,
    productDetail,
    likeProduct
  } = useAppSelector(state => {
    return state.products
  })

  const addProductList = data => {
    dispatch(addProductsToList(data))
  }

  const removeProductCard = item => {
    dispatch(removeProductToCard(item))
  }

  const toggleViewShoppingCard = value => {
    dispatch(setViewShoppingCard(value))
  }

  const toggleViewProductDetail = value => {
    dispatch(setViewProductDetail(value))
  }

  const addToProductToCard = product => {
    dispatch(addProductToCard(product))
  }

  const addProductToDetailProduct = prd => {
    dispatch(addProductToDetail(prd))
  }

  const toggleLikeProduct = value => {
    dispatch(setLikeProduct(value))
  }

  return {
    addProductToDetailProduct,
    addToProductToCard,
    toggleViewProductDetail,
    toggleViewShoppingCard,
    removeProductCard,
    addProductList,
    toggleLikeProduct,
    productsList,
    likeProduct,
    shoppingCardList,
    viewShoppingCard,
    viewProductDetail,
    productDetail
  }
}
