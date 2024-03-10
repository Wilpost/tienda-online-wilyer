import { Link } from 'react-router-dom'
import { UseProductsControl } from '../Hooks/ProductsControl'
import { useUserControl } from '../Hooks/usersControl'

export function Navbar() {
  const {
    toggleViewShoppingCard,
    toggleViewProductDetail,
    viewProductDetail,
    shoppingCardList,
    viewShoppingCard
  } = UseProductsControl()
  const { dataUserLogged, isLoggedTheUser } = useUserControl()

  const handleShoppingCard = () => {
    if (viewProductDetail) {
      toggleViewProductDetail(false)
    }

    toggleViewShoppingCard(true)
  }

  const logoutUser = () => {
    window.location.replace('http://localhost:5173/login')
    isLoggedTheUser(false)
  }

  return (
    <nav className='bg-white/80 backdrop-blur-lg z-50 flex pl-4 pr-4 h-[70px] top-0 mb-10 border-gray fixed border-solid border-b-[1px] w-full items-center justify-between p-1'>
      <ul className='flex gap-3 items-center'>
        <li>
          <Link to='/' className='font-semibold font-inter text-xl'>
            Shopi
          </Link>
        </li>
        <li>
          <Link className='text-sm' href='/'>
            Todo
          </Link>
        </li>
        <li>
          <Link className='text-sm' href='/electronics'>
            Electrónica
          </Link>
        </li>
        <li>
          <Link className='text-sm' href='/jewelry'>
            jewelry
          </Link>
        </li>
        <li>
          <Link className='text-sm' href='/clothesMen'>
            Clothes Men
          </Link>
        </li>
        <li>
          <Link className='text-sm' href='/clothesWoman'>
            Clothes Woman
          </Link>
        </li>
      </ul>

      <ul className='flex gap-3  items-center'>
        <li>
          <Link className='text-sm text-buttonColor p-1 rounded-lg' href='#'>
            {dataUserLogged.email}
          </Link>
        </li>
        <li>
          <Link className='text-sm' href='#'>
            Mis Ordenes
          </Link>
        </li>
        <li>
          <Link className='text-sm' href='#'>
            Mi cuenta
          </Link>
        </li>
        <li>
          <button
            onClick={() => logoutUser()}
            className='text-sm text-buttonColor p-1 rounded-lg'
          >
            Log out
          </button>
        </li>
        <li>
          <button
            onClick={() => handleShoppingCard()}
            className='flex items-center gap-1'
            href='#'
          >
            <img
              className='w-6 h-6 flex flex-col'
              src={
                viewShoppingCard
                  ? 'src/assets/shopIconSelected.png'
                  : 'src/assets/shopIcon.png'
              }
            />
            <div className='absolute right-2 bottom-[35px] flex items-center justify-center border-white border-[1px] bg-buttonColor rounded-full w-5 h-5 text-center'>
              <span className='text-white text-[13px] w-3'>
                {shoppingCardList.length}
              </span>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export function NavbarLogin() {
  return (
    <nav className='bg-white/80 backdrop-blur-lg z-50 flex pl-4 pr-4 h-[70px] top-0 mb-10 border-gray fixed border-solid border-b-[1px] w-full items-center justify-between p-1'>
      <ul className='flex gap-3 items-center'>
        <li>
          <Link to='/' className='font-semibold font-inter text-xl'>
            Shopi
          </Link>
        </li>
        <li>
          <Link className='text-sm' to='/'>
            Todo
          </Link>
        </li>
        <li>
          <Link className='text-sm' to='/electronics'>
            Electrónica
          </Link>
        </li>
        <li>
          <Link className='text-sm' to='/jewelry'>
            jewelry
          </Link>
        </li>
        <li>
          <Link className='text-sm' to='/clothesMen'>
            Clothes Men
          </Link>
        </li>
        <li>
          <Link className='text-sm' to='/clothesWoman'>
            Clothes Woman
          </Link>
        </li>
      </ul>

      <ul className='flex gap-3  items-center'>
        <li>
          <Link
            className='text-sm bg-zinc-100 p-3 rounded-lg text-black'
            to='/login'
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className='text-sm p-3 text-white font-medium rounded-lg bg-buttonColor'
            to='/sign-up'
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  )
}
