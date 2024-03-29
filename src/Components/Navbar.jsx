import { Link } from 'react-router-dom'
import { UseProductsControl } from '../Hooks/ProductsControl'
// import { useUserControl } from '../Hooks/usersControl'
import { logout } from '../lib/firebase/firebase'
import { useValidUser } from '../Hooks/useValidUser'
import { useRef } from 'react'
import { useSearchProduct } from '../Hooks/useSearchProduct'

export function Navbar () {
  const {
    toggleViewShoppingCard,
    toggleViewProductDetail,
    viewProductDetail,
    shoppingCardList,
    viewShoppingCard
  } = UseProductsControl()
  // const { dataUserLogged } = useUserControl()

  const { loginValidate } = useValidUser()
  const { productsList } = UseProductsControl()
  const productsRef = useRef(productsList)
  const { changeProduct } = useSearchProduct({ productsRef })

  const handleShoppingCard = () => {
    if (viewProductDetail) {
      toggleViewProductDetail(false)
    }

    toggleViewShoppingCard(true)
  }

  const logoutUser = () => {
    window.location.replace('http://localhost:5173/login')
    logout()
    loginValidate()
  }

  return (
    <nav className='bg-dark z-50 flex pl-4 pr-4 h-[70px] top-0 mb-10 border-none fixed text-textColor border-b-[1px] w-full items-center justify-between p-1'>
      <ul className='flex gap-3 items-center'>
        <li>
          <Link to='/' className='font-normal font-inter text-xl'>
            Shopi
          </Link>
        </li>
        <li>
          <Link className='peer text-sm' to='/electronics'>
            Electrónica
          </Link>
          <div className='h-[2px] peer-hover:animate-animationUnderline bg-[#ae8aff] -mt-1 w-0 transition' />
        </li>
        <li>
          <Link className='peer text-sm' to='/jewelry'>
            jewelry
          </Link>
          <div className='h-[2px] peer-hover:animate-animationUnderline bg-[#ae8aff] -mt-1 w-0 transition' />
        </li>
        <li>
          <Link className='peer text-sm' to='/clothesMen'>
            Clothes Men
          </Link>
          <div className='h-[2px] peer-hover:animate-animationUnderline bg-[#ae8aff] -mt-1 w-0 transition' />
        </li>
        <li>
          <Link className='peer text-sm' to='/skate'>
            skate
          </Link>
          <div className='h-[2px] peer-hover:animate-animationUnderline bg-[#ae8aff] -mt-1 w-0 transition' />
        </li>
      </ul>

      <ul className='flex gap-3  items-center'>
        {/* <li>
          <Link className='text-sm text-[#ae8aff] p-1 rounded-lg' to='#'>
            {dataUserLogged.email}
          </Link>
        </li> */}
        <li>
          <div className=' h-12 z-40 flex items-center justify-end p-1 rounded-l-md'>
            <figure className='bg-primary h-10 bg-opacity-40 rounded-l-md pl-1 flex items-center justify-center'>
              <img
                className='w-4 h-4 ml-1 object-cover'
                src='src/assets/lupa.png'
                alt='icono de lupa para buscar producto'
              />
            </figure>
            <input
              className='peer z-30 pl-2 placeholder:text-sm rounded-r-md bg-primary bg-opacity-40 transition-all p-3 outline-none text-textColor border-none h-[35px] w-[167px]'
              type='text'
              placeholder='Search product'
              onChange={e => changeProduct(e)}
            />
          </div>
        </li>
        <li>
          <Link className='peer text-sm' to='#'>
            Mis Ordenes
          </Link>
          <div className='h-[2px] peer-hover:animate-animationUnderline bg-[#ae8aff] -mt-1 w-0 transition' />
        </li>
        <li>
          <Link className='peer text-sm' to='#'>
            Mi cuenta
          </Link>
          <div className='h-[2px] peer-hover:animate-animationUnderline bg-[#ae8aff] -mt-1 w-0 transition' />
        </li>
        <li>
          <button
            onClick={() => handleShoppingCard()}
            className='flex items-center gap-1'
          >
            <img
              className='w-6 h-6 flex flex-col'
              src={
                viewShoppingCard
                  ? 'src/assets/shopIconSelected.png'
                  : 'src/assets/shopIcon.png'
              }
            />
            <div className='absolute right-14 bottom-[35px] flex items-center justify-center bg-buttonColor rounded-full w-5 h-5 text-center'>
              <span className='text-white text-[13px] w-3'>
                {shoppingCardList.length}
              </span>
            </div>
          </button>
        </li>
        <li className='ml-2'>
          <button
            onClick={() => logoutUser()}
            className='text-sm text-textColor rounded-full bg-[#ae8aff] p-1 px-[10px]'
          >
            U
          </button>
        </li>
      </ul>
    </nav>
  )
}

export function NavbarLogin () {
  return (
    <nav className='bg-dark z-50 flex pl-4 pr-4 h-[70px] top-0 mb-10 border-none fixed text-textColor border-b-[1px] w-full items-center justify-between p-1'>
      <figure className='md:hidden cursor-pointer px-3 py-2 flex items-center'>
        <img
          className='mt-[4px] w-6 h-6'
          src='public/menu.png'
          alt='Icon burguer menu'
        />
      </figure>
      <ul className='md:flex hidden gap-3 items-center'>
        <li>
          <Link to='/' className='font-normal font-inter text-xl'>
            Shopi
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
          <Link className='text-sm' to='/skate'>
            skate
          </Link>
        </li>
      </ul>

      <ul className='flex gap-3  items-center'>
        <li>
          <Link
            className='text-sm bg-primary p-3 rounded-lg text-textColor'
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
