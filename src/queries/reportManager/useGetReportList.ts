import { useQuery } from "@tanstack/react-query";
import { GetReportList } from "../../api/api";

const useGetReportList = (isExec: boolean, page: number, size: number) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getReportList", isExec, page, size],
    queryFn: () => GetReportList(isExec, page, size),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetReportList;
