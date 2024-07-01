import { useQuery } from "@tanstack/react-query";
import { GetReviewProcessingComplete } from "../../api/api";

const useGetReportProcessComplete = (reportId: number) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getReportDetail", reportId],
    queryFn: () => GetReviewProcessingComplete(reportId),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetReportProcessComplete;
