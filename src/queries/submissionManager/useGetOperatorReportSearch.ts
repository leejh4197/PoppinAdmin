import { useQuery } from "@tanstack/react-query";
import { GetOperatorReportSearch } from "../../api/api";

const useGetOperatorReportSearch = (informId?: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getOperatorReportSearch", informId],
    queryFn: () => GetOperatorReportSearch(informId),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetOperatorReportSearch;
