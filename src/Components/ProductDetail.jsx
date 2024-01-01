import { UseProductsControl } from '../Hooks/ProductsControl'

export function ProductDetail() {
  const {
    productDetail,
    viewProductDetail,
    viewShoppingCard,
    toggleViewProductDetail
  } = UseProductsControl()

  return (
    <aside
      className={
        (viewShoppingCard && !viewProductDetail) ||
        !viewProductDetail ||
        (viewShoppingCard && viewProductDetail) ||
        Object.keys(productDetail).length === 0
          ? 'hidden'
          : 'h-[500px] relative top-12 w-[45%] p-5 z-50 right-3 flex flex-col'
      }>
      <div className='fixed shadow-scaleDown p-6 overflow-hidden bg-white h-[545px] w-[30%] top-[80px] z-50 right-3 rounded-lg flex flex-col'>
        <div className='h-full relative flex gap-2 flex-col'>
          <div className='h-[340px] transition-colors rounded-lg flex flex-col gap-2'>
            <div className='absolute right-[-20px] top-[-17px] flex items-center justify-between'>
              <button onClick={() => toggleViewProductDetail(false)}>
                <img className='w-6 h-6 ' src='src/assets/close.svg' alt='' />
              </button>
            </div>
            <h2 className='font-semibold text-xl'>Detail</h2>
            <div className='w-full h-72 flex justify-center'>
              <img
                className='object-cover w-5/6 h-72 rounded-lg'
                src={
                  Object.keys(productDetail).length === 0
                    ? ''
                    : `${productDetail.images[0]}`
                }
                alt=''
              />
            </div>
            <span className='pl-2 pr-2 font-bold mb-[-15px] text-xl flex items-center justify-between gap-2'>
              <span>Product Name</span>
              <span className='font-bold text-3xl rounded-lg bg-opacity-[0.3]'>
                <span className='text-lg'>$ </span>
                {productDetail.price}
              </span>
            </span>
            <div className='p-2 rounded-lg bg-opacity-[0.1] flex flex-col gap-2'>
              {/* <p className='text-md text-black'>{productDetail.description}</p> */}
              <span className='text-sm mt-2 h-[64px]'>
                {productDetail.description}
              </span>

              <hr className='w-[90%] text-gray ml-4' />

              <div className='w-full flex items-center justify-around gap-4'>
                <button className='transition hover:bg-buttonColor hover:text-white text-buttonColor border-[1px] border-buttonColor p-2 rounded-lg bg-white w-[160px] h-17'>
                  Buy now
                </button>

                <button className='transition hover:bg-white border-[1px] border-buttonColor hover:text-buttonColor text-white p-2 rounded-lg bg-buttonColor w-[160px] h-17'>
                  Add to card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
