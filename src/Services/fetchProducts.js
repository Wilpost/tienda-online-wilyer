export async function fetchProducts(pageParam) {
  const page = await pageParam
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${14 + page}`
  )
  const data = await res.json()

  const isMaxPage = page >= 50 ? undefined : 14 + page
  const nextCursor = isMaxPage

  return {
    products: data.slice(2, data.length),
    nextCursor
  }
}
