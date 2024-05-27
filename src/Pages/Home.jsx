import { Suspense, useEffect, useRef } from 'react'
import { LoadSkeleton } from '../Components/LoadSkeletons'
import { ProductDetail } from '../Components/ProductDetail'
import { ProductsLists } from '../Components/ProductsList'
import { SearchProduct } from '../Components/SearchProduct'
import { ShoppingCard } from '../Components/ShoppingCard'
import { UseProductsControl } from '../Hooks/ProductsControl'
import { useFecthingQuery } from '../Hooks/useFecthingQuery'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { useIntersectionObserver } from 'usehooks-ts'

export const Home = () => {
  const bannerAds = useRef()

  const { isIntersecting, ref } = useIntersectionObserver({
    root: bannerAds.current,
    threshold: 0.2
  })
  const { productsList } = UseProductsControl()
  const { hasNextPage, isFetching, fetchNextPage } = useFecthingQuery()

  function shangeBannerImageAds(action) {
    if (action === 'NEXT') {
      console.log('next')
      bannerAds.current.scroll(900, 0)
    } else {
      bannerAds.current.scroll(-900, 0)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      bannerAds.current.scroll(bannerAds.current.scrollLeft + 900, 0)
    }, 4000)
  }, [])

  return (
    <main className='flex h-full w-full flex-col justify-center items-center py-3 gap-2'>
      <div className='w-[500px] h-[400px] bg-zinc-500 opacity-20 blur-[200px] fixed top-0 left-2/2' />
      <div
        ref={bannerAds}
        style={{ scrollSnapType: 'x mandatory' }}
        className='w-full group h-[273px] scroll-smooth z-[999999] gap-1 relative flex overflow-hidden -mb-20 mt-[60px]'
      >
        <button
          onClick={() => shangeBannerImageAds('BACK')}
          className='group-hover:opacity-100 transition opacity-0 duration-500 w-28 cursor-pointer flex justify-center items-center h-[273px] bg-gradient-to-r from-[#00000052] to-transparent absolute left-0'
        >
          <IoIosArrowBack color='#d0d0d0' size={60} />
        </button>

        <img
          src='public\Banner_Promo.png'
          className='snap-center w-full h-[273px] inline-flex bg-cover bg-promoBanner2 bg-no-repeat'
        />
        <img
          ref={ref}
          src='public\banner_2_promo_calzado_black.png'
          className='snap-center w-full h-[273px] inline-flex bg-cover bg-promoBanner bg-no-repeat'
        />
        <img
          ref={ref}
          src='public\banner_2_promo_calzado.png'
          className='snap-center w-full h-[273px] inline-flex bg-cover bg-promoBanner bg-no-repeat'
        />

        <button
          onClick={() => shangeBannerImageAds('NEXT')}
          className='group-hover:opacity-100 transition opacity-0 duration-500 w-28 cursor-pointer flex justify-center items-center h-[273px] bg-gradient-to-l from-[#00000052] to-transparent absolute right-0'
        >
          <IoIosArrowForward color='#d0d0d0' size={60} />
        </button>

        <div className='absolute bottom-2 w-full flex gap-1 items-center justify-center'>
          <div className='w-[8px] h-[8px] bg-purple-800 rounded-full' />
          <div className='w-[8px] h-[8px] bg-purple-800 opacity-50 rounded-full' />
        </div>
      </div>

      {/* <figure className='w-full -mb-20 mt-20 bg-[#9352ff]'>

      </figure> */}
      <div className='w-full h-full flex justify-center'>
        <div className='w-full h-full gap-4 flex flex-col justify-center items-center'>
          <header className='h-full mt-[120px] flex flex-col gap-3 items-center justify-center'>
            <h1 className='font-normal text-textColor text-3xl'>
              Exclusive Products
            </h1>
            {/* <SearchProduct /> */}
          </header>
          <Suspense fallback={<LoadSkeleton />}>
            <ProductsLists productsList={productsList} />
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
