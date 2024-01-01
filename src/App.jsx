import './App.css'
import { useEffect, useRef } from 'react'
import { ProductsLists } from './Components/ProductsList'
import { SearchProduct } from './Components/SearchProduct'
import { Navbar } from './Components/Navbar'
import { ShoppingCard } from './Components/ShoppingCard'
import { ProductDetail } from './Components/ProductDetail'
import { UseProductsControl } from '../src/Hooks/ProductsControl'

function App() {
  const { addProductList } = UseProductsControl()
  const productsRef = useRef([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => {
        addProductList(data)
        productsRef.current = data
      })
  }, [])

  return (
    <>
      <Navbar />

      <main className='flex h-full w-full flex-col justify-center items-center p-3 gap-2'>
        <div className='w-full h-full flex justify-center'>
          <div className='w-full h-full gap-4 flex flex-col justify-center items-center'>
            <header className='h-full mt-[90px] flex flex-col gap-3 items-center justify-center'>
              <h1 className='font-semibold text-xl'>Exclusive Products</h1>
              <SearchProduct productsRef={productsRef.current} />
            </header>
            <ProductsLists />
          </div>

          <ProductDetail />

          <ShoppingCard />
        </div>
      </main>
    </>
  )
}

export default App
