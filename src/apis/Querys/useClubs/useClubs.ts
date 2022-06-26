import { useInfiniteQuery } from "react-query";
import { getClibsApi } from "../../Fetchs/GetClubs/GetClubs";

export const useClubs = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteQuery("projects", getClibsApi, {
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
