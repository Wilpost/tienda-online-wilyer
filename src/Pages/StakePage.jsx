import { Suspense } from 'react'
import { LoadSkeleton } from '../Components/LoadSkeletons'
import { SearchProduct } from '../Components/SearchProduct'
import { ProductDetail } from '../Components/ProductDetail'
import { ShoppingCard } from '../Components/ShoppingCard'
import { ProductsLists } from '../Components/ProductsList'
import { useFecthingQuery } from '../Hooks/useFecthingQuery'
import { UseProductsControl } from '../Hooks/ProductsControl'

export const StakePage = () => {
  const { productsList } = UseProductsControl()
  const { hasNextPage, isFetching, fetchNextPage } = useFecthingQuery()

  const productElectronics = productsList.filter(
    product => product.category.name === 'skate'
  )

  return (
    <main className='flex h-full w-full flex-col justify-center items-center p-3 gap-2'>
      <div className='w-[500px] h-[400px] bg-zinc-500 opacity-20 blur-[200px] fixed top-0 left-2/2' />
      <div className='w-full h-full flex justify-center'>
        <div className='w-full h-full gap-4 flex flex-col justify-center items-center'>
          <header className='h-full mt-[90px] flex flex-col gap-3 items-center justify-center'>
            <h1 className='font-normal text-textColor text-3xl z-50'>
              Exclusive Products
            </h1>
            <SearchProduct />
          </header>
          <Suspense fallback={<LoadSkeleton />}>
            <ProductsLists productsList={productElectronics} />
          </Suspense>
        </div>
        <ProductDetail />
        <ShoppingCard />
      </div>
      {!hasNextPage && !isFetching && productsList.length > 0 && (
        <span className='font-normal text-xl text-textColor text-center w-full'>
          No hay más resultados
        </span>
      )}
      {isFetching && <LoadSkeleton />}

      {hasNextPage && !isFetching && (
        <button
          className='bg-buttonColor p-2 mt-5 rounded-lg text-white'
          onClick={() => fetchNextPage()}
        >
          Cargar más productos
        </button>
      )}
    </main>
  )
}
