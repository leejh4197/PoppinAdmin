import { useQuery } from "@tanstack/react-query";
import { GetReviewReportDetail } from "../../api/api";

const useGetReviewReportDetail = (reviewId: string | undefined) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getReviewReportDetail", reviewId],
    queryFn: () => GetReviewReportDetail(reviewId),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetReviewReportDetail;
