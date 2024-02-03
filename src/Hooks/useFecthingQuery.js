import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchProducts } from '../Services/fetchProducts'

export function useFecthingQuery() {
  const {
    data = [],
    isFetching,
    isLoading,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery({
    queryKey: ['produts'],
    initialPageParam: 0,
    queryFn: ({ pageParam }) => fetchProducts(pageParam),
    getNextPageParam: async lastPages => lastPages.nextCursor,
    refetchOnWindowFocus: false
  })

  return {
    data,
    isFetching,
    isLoading,
    fetchNextPage,
    hasNextPage
  }
}
