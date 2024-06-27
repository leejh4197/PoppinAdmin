import { useQuery } from "@tanstack/react-query";
import { GetOperatorReportList } from "../../api/api";

const useGetOperatorReportList = (page: number, size: number, prog: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getOperatorReportList", page, size, prog],
    queryFn: () => GetOperatorReportList(page, size, prog),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetOperatorReportList;
