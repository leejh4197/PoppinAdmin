import { useQuery } from "@tanstack/react-query";
import { GetUserReportList } from "../../api/api";

const useGetUserReportList = (page: number, size: number, prog: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getUserReportList", page, size, prog],
    queryFn: () => GetUserReportList(page, size, prog),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetUserReportList;
