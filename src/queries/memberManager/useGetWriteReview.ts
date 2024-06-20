import { useQuery } from "@tanstack/react-query";
import { GetWriteReviewList } from "../../api/api";

const useGetWriteReview = (
  userId: string | undefined,
  page: number,
  hidden: boolean
) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getWriteReview", userId, page, hidden],
    queryFn: () => GetWriteReviewList(userId, page, hidden),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetWriteReview;
