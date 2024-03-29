import PropTypes from 'prop-types'
import { UseProductsControl } from '../Hooks/ProductsControl'
import { IS_INVALID_URL } from '../Constants/consts'
import '@fontsource-variable/catamaran'

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
    <article className='h-full'>
      <div
        className='bg-dark z-40 backdrop-blur-lg hover:shadow-none leading-[18px] h-full max-h-[393px] group relative overflow-hidden pb-2 rounded-xl flex flex-col justify-between'
        aria-label='tile'
      >
        <div>
          <div
            onClick={() => handleProductDetail(product)}
            className='w-full cursor-pointer rounded-t-lg flex flex-col'
          >
            <img
              className='w-full h-full'
              src={`${
                IS_INVALID_URL(product.images[0])
                  ? product.images[0]
                  : 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png'
              }`}
              alt='Product image'
              title='Product image'
            />
          </div>
        </div>

        {/* Body Card */}
        <div className='flex flex-col items-center justify-around pl-3 pr-1 pt-1 gap-3 h-full '>
          <div className='w-full flex mb-[-19px] gap-2 pt-2'>
            <div className='w-full flex flex-col gap-1'>
              <h1 className='text-[17px] w-full font-normal leading-[18px] text-textColor'>
                {product.title.split(' ').slice(0, 3).join(' ')}
              </h1>
              <p className='text-[#828282] text-sm -mt-1 mb-2'>
                Category • Nam
              </p>
            </div>

            <button
              className='flex justify-center items-start w-12 h-12'
              onClick={() => toggleLikeProduct(product)}
            >
              <img
                className='w-5 h-5'
                src={
                  product.like
                    ? 'src/assets/corazonLiked.png'
                    : 'src/assets/corazonDisLike.png'
                }
                alt='Like icon'
              />
            </button>
          </div>

          <div className='w-full justify-start text-center mb-2 pr-2 flex flex-col items-start'>
            <h2 className='px-1 py-[2px] text-[#f2f4f7] rounded-md -mb-2 mt-2 text-sm bg-[#bb86fc38]'>
              {product.category.name}
            </h2>
          </div>
        </div>

        <div className='w-full flex flex-col items-center justify-around'>
          <div className='w-full px-3 pb-1 flex justify-between items-center'>
            <div className='rounded-lg w-16 flex text-textColor items-center gap-[1px]'>
              <span className='text-[19px] mt-2'>$ </span>
              <span className='text-[19px] mt-2 font-medium'>
                {product.price}
              </span>
            </div>

            <button
              onClick={() => handleAddToCard(product)}
              className='text-white pl-3 pr-3 text-sm flex items-center gap-2 rounded-lg bg-buttonColor p-2'
            >
              {productExistInCard(product) ? 'Added!' : '+ Add'}
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
