import { UseProductsControl } from '../Hooks/ProductsControl'

export function Navbar() {
  const {
    toggleViewShoppingCard,
    toggleViewProductDetail,
    viewProductDetail,
    shoppingCardList,
    viewShoppingCard
  } = UseProductsControl()

  const handleShoppingCard = () => {
    if (viewProductDetail) {
      toggleViewProductDetail(false)
    }

    toggleViewShoppingCard(true)
  }

  return (
    <nav className='bg-white/80 backdrop-blur-lg z-50 flex pl-4 pr-4 h-[70px] top-0 mb-10 border-gray fixed border-solid border-b-[1px] w-full items-center justify-between p-1'>
      <ul className='flex gap-3 items-center'>
        <li>
          <h2 className='font-semibold font-inter text-xl'>Shopi</h2>
        </li>
        <li>
          <a className='text-sm' href='#'>
            Todo
          </a>
        </li>
        <li>
          <a className='text-sm' href='#'>
            Electrónica
          </a>
        </li>
        <li>
          <a className='text-sm' href='#'>
            Joyería
          </a>
        </li>
        <li>
          <a className='text-sm' href='#'>
            Ropa de Hombre
          </a>
        </li>
        <li>
          <a className='text-sm' href='#'>
            Ropa de Mujer
          </a>
        </li>
      </ul>

      <ul className='flex gap-3  items-center'>
        <li>
          <a className='text-sm text-buttonColor p-1 rounded-lg' href='#'>
            example@gmail.com
          </a>
        </li>
        <li>
          <a className='text-sm' href='#'>
            Mis Ordenes
          </a>
        </li>
        <li>
          <a className='text-sm' href='#'>
            Mi cuenta
          </a>
        </li>
        <li>
          <a className='text-sm' href='#'>
            Iniciar sesión
          </a>
        </li>
        <li>
          <button
            onClick={() => handleShoppingCard()}
            className='flex items-center gap-1'
            href='#'>
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
