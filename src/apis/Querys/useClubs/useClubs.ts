import { useInfiniteQuery } from "react-query";
import { paramType } from "../../../types/ClubType";
import { getClibsApi } from "../../Fetchs/GetClubs/GetClubs";

export const useClubs = (param?: paramType) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteQuery("clubs", () => getClibsApi(param), {
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
