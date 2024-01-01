import PropTypes from 'prop-types'
import { UseProductsControl } from '../Hooks/ProductsControl'

export function Card({ product }) {
  const {
    shoppingCardList,
    viewShoppingCard,
    toggleViewShoppingCard,
    addProductToDetailProduct,
    toggleViewProductDetail,
    addToProductToCard,
    toggleLikeProduct
  } = UseProductsControl()

  const handleAddToCard = item => {
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
    <article
      onClick={() => handleProductDetail(product)}
      className='bg-white/80 backdrop-blur-lg hover:shadow-none transition-transform group h-full shadow-scaleDown bg-white border-solid border-gray border-[1px] rounded-lg flex flex-col justify-between pb-2'
      aria-label='tile'>
      <div className='grid grid-cols-autoFit items-center justify-between'>
        <div className='p-2 rounded-t-lg flex flex-col'>
          <img
            className='object-contain rounded-lg'
            src={`${product.images[0]}`}
            alt=''
          />
        </div>
        <button onClick={() => toggleLikeProduct(product)}>
          <img
            className='w-6 h-6 absolute left-4 bottom-32'
            src={
              product.like
                ? 'src/assets/corazonLiked.png'
                : 'src/assets/corazonDisLike.png'
            }
            alt=''
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
            className='text-white pl-3 pr-3 text-sm flex items-center gap-2 rounded-lg bg-buttonColor p-2'>
            {productExistInCard(product) ? (
              <span className='flex gap-2 items-center'>
                Añadido
                <img
                  className='w-[13px] h-[13px] mb-1'
                  src='src/assets/checkIcon.png'
                />
              </span>
            ) : (
              'Añadir a la cesta'
            )}
          </button>
        </div>
      </div>
    </article>
  )
}

Card.propTypes = {
  product: PropTypes.objectOf()
}
