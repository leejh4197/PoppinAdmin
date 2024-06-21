import { useQuery } from "@tanstack/react-query";
import { GetReviewReportList } from "../../api/api";

const useGetReviewReportList = (
  isExec: boolean,
  page: number,
  size: number
) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getReviewReportList", isExec, page, size],
    queryFn: () => GetReviewReportList(isExec, page, size),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetReviewReportList;
