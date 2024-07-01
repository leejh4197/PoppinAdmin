import { useQuery } from "@tanstack/react-query";
import { GetPopupProcessingComplete } from "../../api/api";

const useGetPopupProcessComplete = (reportId?: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getPopupProcessComplete", reportId],
    queryFn: () => GetPopupProcessingComplete(reportId),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetPopupProcessComplete;
