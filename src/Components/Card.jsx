import PropTypes from 'prop-types'
import { UseProductsControl } from '../Hooks/ProductsControl'
import { IS_INVALID_URL } from '../Constants/consts'

export function Card ({ product }) {
  const {
    shoppingCardList,
    viewShoppingCard,
    productDetail,
    toggleViewShoppingCard,
    addProductToDetailProduct,
    toggleViewProductDetail,
    addToProductToCard,
    toggleLikeProduct
  } = UseProductsControl()

  const handleAddToCard = item => {
    if (productDetail) {
      addProductToDetailProduct(false)
    }

    toggleViewShoppingCard(true)
    addToProductToCard(item)
  }

  const handleProductDetail = item => {
    if (viewShoppingCard) {
      toggleViewShoppingCard(false)
    }

    toggleViewProductDetail(true)
    addProductToDetailProduct(item)
  }

  const productExistInCard = item => {
    return shoppingCardList.some(prd => {
      return prd.id === item.id
    })
  }

  return (
    <article>
      <div
        className='bg-white z-40 backdrop-blur-lg hover:shadow-none transition-transform group h-full p-2 pb-4 relative overflow-hidden shadow-scaleDown border-solid border-gray border-[1px] rounded-lg flex flex-col justify-between'
        aria-label='tile'
      >
        <div className='grid grid-cols-autoFit items-center justify-between'>
          <div
            onClick={() => handleProductDetail(product)}
            className='h-[275px] cursor-pointer p-2 rounded-t-lg flex flex-col'
          >
            <img
              className='object-contain rounded-lg'
              src={`${
                IS_INVALID_URL(product.images[0])
                  ? product.images[0]
                  : 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png'
              }`}
              alt='Product image'
              title='Product image'
            />
          </div>
          <button
            className='absolute left-4 z-50 bottom-32 flex justify-center items-center w-12 h-12'
            onClick={() => toggleLikeProduct(product)}
          >
            <img
              className='w-6 h-6'
              src={
                product.like
                  ? 'src/assets/corazonLiked.png'
                  : 'src/assets/corazonDisLike.png'
              }
              alt='Like icon'
            />
          </button>
        </div>

        <div className='flex flex-col items-start justify-around pl-3 gap-2 h-14'>
          <div className='w-full flex items-center mb-[-7px] gap-2'>
            <h1 className='text-base w-full font-semibold font-inter'>
              {product.title.split(' ').slice(0, 3).join(' ')}
            </h1>
          </div>

          <div className='justify-center text-center bg-slate-200 mb-2 rounded-lg pl-2 pr-2 flex items-center gap-3 '>
            <h2 className='rounded-sm w-full text-slate-500'>
              {product.category.name}
            </h2>
          </div>
        </div>

        <div className='w-full flex flex-col items-center justify-around'>
          <hr className='text-gray mb-3 w-[90%]' />

          <div className='w-full flex justify-around items-center'>
            <div className='rounded-lg w-16 flex items-center gap-[2px]'>
              <span className='text-2xl'>$ </span>
              <span className='text-xl font-semibold text-button'>
                {product.price}
              </span>
            </div>

            <button
              onClick={() => handleAddToCard(product)}
              className='text-white pl-3 pr-3 text-sm flex items-center gap-2 rounded-lg bg-buttonColor p-2'
            >
              {productExistInCard(product)
? (
                <span className='flex gap-2 items-center'>
                  Añadido
                  <img
                    className='w-[13px] h-[13px] mb-1'
                    src='src/assets/checkIcon.png'
                  />
                </span>
              )
: (
                'Añadir a la cesta'
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

Card.propTypes = {
  product: PropTypes.objectOf()
}
