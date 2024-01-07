import './App.css'
import { Navbar } from './Components/Navbar'
import { fetchProducts } from './Services/fetchProducts'
import { UseProductsControl } from './Hooks/ProductsControl'
import { useEffect, useRef } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { SearchProduct } from './Components/SearchProduct'
import { ProductsLists } from './Components/ProductsList'
import { ProductDetail } from './Components/ProductDetail'
import { ShoppingCard } from './Components/ShoppingCard'

function App() {
  const {
    data = [],
    isFetching,
    isLoading,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery({
    queryKey: ['produts'],
    initialPageParam: 0,
    queryFn: ({ pageParam }) => fetchProducts(pageParam),
    getNextPageParam: async lastPages => lastPages.nextCursor
  })

  const { addProductList } = UseProductsControl()
  const productsRes = useRef([])
  console.log(data, hasNextPage)

  useEffect(() => {
    const { pages = [] } = data
    const dataPage = pages.flatMap(pages => pages.products)

    productsRes.current = dataPage
    addProductList(dataPage)
  }, [isFetching])

  return (
    <>
      <Navbar />
      <main className='flex h-full w-full flex-col justify-center items-center p-3 gap-2'>
        <div className='w-full h-full flex justify-center'>
          <div className='w-full h-full gap-4 flex flex-col justify-center items-center'>
            <header className='h-full mt-[90px] flex flex-col gap-3 items-center justify-center'>
              <h1 className='font-semibold text-xl'>Exclusive Products</h1>
              <SearchProduct products={productsRes} />
            </header>
            {!isLoading && <ProductsLists />}
          </div>
          <ProductDetail />
          <ShoppingCard />
        </div>
        {!hasNextPage && !isFetching && <span>No hay más resultados</span>}
        {isFetching && <h2>Loading...</h2>}

        {hasNextPage && !isFetching && (
          <button
            className='bg-buttonColor p-2 mt-5 mr-12 rounded-lg text-white'
            onClick={() => fetchNextPage()}>
            Cargar más productos
          </button>
        )}
      </main>
    </>
  )
}

export default App
