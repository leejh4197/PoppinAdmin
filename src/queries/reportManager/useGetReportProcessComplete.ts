import { useQuery } from "@tanstack/react-query";
import { GetReviewProcessingComplete } from "../../api/api";

const useGetReportProcessComplete = (reportId?: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getReportProcessComplete", reportId],
    queryFn: () => GetReviewProcessingComplete(reportId),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetReportProcessComplete;
