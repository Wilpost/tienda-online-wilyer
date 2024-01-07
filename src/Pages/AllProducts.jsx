import { ProductDetail } from '../Components/ProductDetail'
import { ProductsLists } from '../Components/ProductsList'
import { SearchProduct } from '../Components/SearchProduct'
import { ShoppingCard } from '../Components/ShoppingCard'
import PropType from 'prop-types'

export function AllProducts({ productsRes, isLoading }) {
  return (
    <>
      <main className='flex h-full w-full flex-col justify-center items-center p-3 gap-2'>
        <div className='w-full h-full flex justify-center'>
          <div className='w-full h-full gap-4 flex flex-col justify-center items-center'>
            <header className='h-full mt-[90px] flex flex-col gap-3 items-center justify-center'>
              <h1 className='font-semibold text-xl'>Exclusive Products</h1>
              <SearchProduct products={productsRes} />
            </header>
            {isLoading && <h2>Loading...</h2>}
            {!isLoading && <ProductsLists />}
          </div>
          <ProductDetail />
          <ShoppingCard />
        </div>
      </main>
    </>
  )
}

AllProducts.propTypes = {
  productsRes: PropType.array,
  isLoading: PropType.bool
}
