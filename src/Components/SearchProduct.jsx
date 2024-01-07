import { UseProductsControl } from '../Hooks/ProductsControl'
import PropType from 'prop-types'

export function SearchProduct({ products }) {
  const { addProductList } = UseProductsControl()

  const changeProduct = e => {
    const data = e.target.value

    const productsFilterBySearch = products.filter(item => {
      return item.title.toLowerCase().includes(data.toLowerCase())
    })

    addProductList(productsFilterBySearch)
  }

  return (
    <form className='w-[580px] flex justify-center items-center relative overflow-hidden'>
      <div className='bg-white h-12 absolute left-2 pl-2 border-gray border-[1px] border-r-transparent z-50 flex items-center justify-end p-1 rounded-l-md'>
        <img
          className='w-4 h-4'
          src='src/assets/lupa.png'
          alt='icono de lupa para buscar producto'
        />
      </div>
      <input
        className='peer shadow-scaleDown z-40 bg-white transition-all p-3 outline-none focus:shadow-focusShadowInput border-[1px] border-gray rounded-md h-12 w-[510px]'
        type='text'
        placeholder='Search product'
        onChange={e => changeProduct(e)}
      />
    </form>
  )
}

SearchProduct.propTypes = {
  products: PropType.array
}
