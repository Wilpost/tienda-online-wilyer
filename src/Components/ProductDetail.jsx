import { UseProductsControl } from '../Hooks/ProductsControl'

export function ProductDetail () {
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
      }
    >
      <div className='fixed bg-dark text-textColor h-[555px] w-[30%] top-20 z-20 right-3 rounded-lg flex flex-col'>
        <div className='h-full justify-between flex gap-2 flex-col'>
          <div className='h-full transition-colors rounded-lg flex flex-col gap-2'>
            <div className='-mt-8 absolute left-[2px] top-[35px] p-1 rounded-full flex'>
              <button onClick={() => toggleViewProductDetail(false)}>
                <img className='w-6 h-6' src='src/assets/close.svg' alt='' />
              </button>
            </div>
            <div className='w-full flex'>
              <img
                className='object-cover w-full h-[375px] rounded-t-xl '
                src={
                  Object.keys(productDetail).length === 0
                    ? ''
                    : `${productDetail.images[0]}`
                }
                alt=''
              />
            </div>

            <div className='px-2 h-full'>
              <span className='pl-2 pr-2 font-normal mb-[-15px] text-xl flex items-center justify-between gap-2'>
                <span>Product Name</span>
                <span className='font-bold text-3xl rounded-lg bg-opacity-[0.3]'>
                  <span className='text-lg font-normal'>$ </span>
                  <span className='text-1xl font-normal'>
                    {productDetail.price}
                  </span>
                </span>
              </span>
              <div className='p-2 rounded-lg bg-opacity-[0.1] flex flex-col gap-2'>
                {/* <p className='text-md text-black'>{productDetail.description}</p> */}
                <span className='text-sm mt-2 text-[#828282] h-[60px] relative overflow-hidden'>
                  {productDetail.description}
                </span>

                <div className='w-full h-full flex items-center justify-between mt-3 gap-4'>
                  <button className='group overflow-hidden relative text-buttonColor border-[1px] border-buttonColor p-2 rounded-lg w-[160px] h-17 transition transition-dration-500 hover:text-white'>
                    <div className='bg-buttonColor inset-0 -translate-x-full transition transition-duration-500 group-hover:-translate-x-0 w-full h-full absolute -z-10' />
                    Buy now
                  </button>

                  <button className='border-[1px] border-buttonColor text-white p-2 rounded-lg bg-buttonColor w-[160px] h-17'>
                    Add to card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
