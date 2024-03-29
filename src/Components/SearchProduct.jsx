import { UseProductsControl } from '../Hooks/ProductsControl'
import PropType from 'prop-types'
import { useRef } from 'react'
import { useSearchProduct } from '../Hooks/useSearchProduct'

export function SearchProduct() {
  const { productsList } = UseProductsControl()
  const productsRef = useRef(productsList)
  const { changeProduct } = useSearchProduct({ productsRef })

  return (
    <form className='w-[510px] shadow-focusShadowInput flex justify-center items-center relative overflow-hidden'>
      <div className='bg-dark h-12 absolute left-0 pl-2  z-40 flex items-center justify-end p-1 rounded-l-md'>
        <img
          className='w-4 h-4 ml-1 object-cover'
          src='src/assets/lupa.png'
          alt='icono de lupa para buscar producto'
        />
      </div>
      <input
        className='peer z-30 pl-9 bg-dark transition-all p-3 outline-none text-textColor border-none rounded-md h-12 w-full'
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
