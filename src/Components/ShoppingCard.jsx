import { IS_INVALID_URL } from '../Constants/consts'
import { UseProductsControl } from '../Hooks/ProductsControl'

export function ShoppingCard() {
  const {
    viewShoppingCard,
    toggleViewShoppingCard,
    removeProductCard,
    shoppingCardList
  } = UseProductsControl()

  const totalPay =
    shoppingCardList.length > 0
      ? shoppingCardList
          .map(item => {
            return item.price
          })
          .reduce((curr, now) => curr + now)
      : '0'

  const handleDeleteProduct = id => {
    removeProductCard(id)
  }

  return (
    <aside
      className={
        viewShoppingCard
          ? 'mt-12 relative top-12 w-[45%] p-5 z-50 right-3 flex flex-col'
          : 'hidden'
      }>
      <div
        className='fixed overflow-hidden bg-white h-[590px] w-[30%] top-[80px] p-5 z-50
      right-3 shadow-scaleDown rounded-lg flex flex-col'>
        <div className='absolute w-full left-[93%] top-[7px]'>
          <button onClick={() => toggleViewShoppingCard(false)}>
            <img
              className='w-6 h-6'
              src='src/assets/close.svg'
              alt='icon from close shopping card'
            />
          </button>
        </div>

        <div
          className='
        w-full h-[70px] flex items-center justify-between mb-2'>
          <h2 className='text-xl'>Mi carrito</h2>

          <p className='text-buttonColor cursor-pointer'>view All</p>
        </div>

        <div className='overflow-auto h-[90%] relative flex gap-2 flex-col items-center'>
          {shoppingCardList.length > 0 ? (
            shoppingCardList.map(item => {
              return (
                <div key={item.id} className='w-full'>
                  <div className='hover:bg-gray p-2 w-full cursor-pointer transition-colors flex gap-2 items-center'>
                    <div className='flex items-center gap-2 w-full'>
                      <img
                        className='w-12 h-12 rounded-lg'
                        src={`${
                          IS_INVALID_URL(item.images[0])
                            ? item.images[0]
                            : 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png'
                        }`}
                        alt=''
                      />
                      <div className='h-full flex items-start gap-1'>
                        <p className='text-sm'>
                          {item.title.split('').slice(0, 7).join('')}
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center gap-1'>
                      <div className='flex items-end gap-[2px]'>
                        <span className='text-sm mb-[3px]'>$ </span>
                        <span className='text-2xl'>{item.price}</span>
                      </div>

                      <button
                        className='w-5 h-5 flex items-center'
                        onClick={() => handleDeleteProduct(item.id)}>
                        <img
                          src='src/assets/close.svg'
                          alt='icon from close shopping card'
                        />
                      </button>
                    </div>
                  </div>
                  <hr className='text-gray' />
                </div>
              )
            })
          ) : (
            <h2>Aun no hay productos añadidos</h2>
          )}
        </div>
        <div className='h-[10%] flex items-center justify-between'>
          <p className='text-lg text-fontColor'>Total:</p>

          <h2 className='text-xl flex items-end gap-[3px]'>
            <span className='text-sm mb-[4px]'>$ </span>
            <span className='text-2xl'>{parseFloat(totalPay)}</span>
          </h2>
        </div>
        <button className='hover:bg-hoverColor transition-colors bg-buttonColor rounded-lg text-white font-semibold h-[50px]'>
          Hacer compra
        </button>
      </div>
    </aside>
  )
}
