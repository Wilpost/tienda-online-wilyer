import { Card } from './Card'

export function ProductsLists({ productsList = [] }) {
  return (
    <>
      <section className='w-full h-full grid gap-5 grid-cols-autoFit justify-center items-center'>
        {productsList.length > 0 &&
          productsList.map(item => {
            return <Card product={item} key={item.id} />
          })}
      </section>
      {!productsList.length > 0 && (
        <span className='font-normal text-xl text-textColor text-center'>
          No hay más resultados
        </span>
      )}
    </>
  )
}
