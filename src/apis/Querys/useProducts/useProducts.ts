import { useInfiniteQuery } from "react-query";
import { getProductsApi } from "../../Fetchs/GetProducts/GetProducts";

export const useProducts = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteQuery("projects", getProductsApi, {
    getNextPageParam: (currentPage: any) => {
      const nextPage = currentPage.page + 1;
      return nextPage > currentPage.total_pages ? null : nextPage;
    },
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  };
};
