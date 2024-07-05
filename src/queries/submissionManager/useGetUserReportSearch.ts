import { useQuery } from "@tanstack/react-query";
import { GetUserReportSearch } from "../../api/api";

const useGetUserReportSearch = (informId?: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getUserReportSearch", informId],
    queryFn: () => GetUserReportSearch(informId),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetUserReportSearch;
