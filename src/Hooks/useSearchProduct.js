import { UseProductsControl } from './ProductsControl'

export function useSearchProduct({ productsRef }) {
  const { addProductList, productsList } = UseProductsControl()

  const changeProduct = e => {
    const data = e.target.value
    console.log({ productsList, pr: productsRef.current })

    const productsFilterBySearch = productsRef.current.filter(item => {
      return item.title.toLowerCase().includes(data.toLowerCase())
    })

    addProductList(productsFilterBySearch)
  }

  return { changeProduct }
}
