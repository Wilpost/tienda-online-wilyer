import { UseProductsControl } from '../Hooks/ProductsControl'
import { Card } from './Card'

export function ProductsLists() {
  const { productsList } = UseProductsControl()

  console.log(productsList)

  return (
    <section className='grid gap-5 grid-cols-autoFit justify-center items-center'>
      {productsList.length > 0 ? (
        productsList.map(item => {
          return <Card product={item} key={item.id} />
        })
      ) : (
        <span>No hay productos</span>
      )}
    </section>
  )
}
