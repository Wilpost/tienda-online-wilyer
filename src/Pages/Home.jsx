import { LoadSkeleton } from '../Components/LoadSkeletons'
import { ProductDetail } from '../Components/ProductDetail'
import { ProductsLists } from '../Components/ProductsList'
import { SearchProduct } from '../Components/SearchProduct'
import { ShoppingCard } from '../Components/ShoppingCard'
import { UseProductsControl } from '../Hooks/ProductsControl'
import { useFecthingQuery } from '../Hooks/useFecthingQuery'

export function Home() {
  const { productsList } = UseProductsControl
  const { hasNextPage, isLoading, isFetching, fetchNextPage } =
    useFecthingQuery()

  return (
    <main className='flex h-full w-full flex-col justify-center items-center p-3 gap-2'>
      <div className='w-full h-full flex justify-center'>
        <div className='w-full h-full gap-4 flex flex-col justify-center items-center'>
          <header className='h-full mt-[90px] flex flex-col gap-3 items-center justify-center'>
            <h1 className='font-semibold text-xl'>Exclusive Products</h1>
            <SearchProduct />
          </header>
          {isLoading && <LoadSkeleton />}
          {!isLoading && <ProductsLists />}
        </div>
        <ProductDetail />
        <ShoppingCard />
      </div>
      {!hasNextPage && !isFetching && productsList.length > 0 && (
        <span>No hay más resultados</span>
      )}
      {isFetching && <LoadSkeleton />}

      {hasNextPage && !isFetching && (
        <button
          className='bg-buttonColor p-2 mt-5 mr-12 rounded-lg text-white'
          onClick={() => fetchNextPage()}>
          Cargar más productos
        </button>
      )}
    </main>
  )
}
