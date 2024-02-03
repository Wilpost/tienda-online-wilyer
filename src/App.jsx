import './App.css'
import { Navbar, NavbarLogin } from './Components/Navbar'
import { UseProductsControl } from './Hooks/ProductsControl'
import { useEffect } from 'react'
import { useFecthingQuery } from './Hooks/useFecthingQuery'
import { Roots } from './Roots/Roots'
import { useUserControl } from './Hooks/usersControl'
import { Modal } from './Pages/Modal'

function App() {
  const { addProductList } = UseProductsControl()
  const { userLogged, viewModaLogged } = useUserControl()
  const { data, isFetching } = useFecthingQuery()

  useEffect(() => {
    const { pages = [] } = data
    const dataPage = pages.flatMap(pages => pages.products)

    addProductList(dataPage)
  }, [isFetching])

  return (
    <main className='h-full w-full flex items-center justify-center'>
      {userLogged ? <Navbar /> : <NavbarLogin />}
      {viewModaLogged && <Modal />}
      <Roots />
    </main>
  )
}

export default App
