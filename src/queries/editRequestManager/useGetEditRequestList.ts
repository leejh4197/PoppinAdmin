import { useQuery } from "@tanstack/react-query";
import { GetEditRequestList } from "../../api/api";

const useGetEditRequestList = (exec: boolean, page: number, size: number) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getEditRequestList", exec, page, size],
    queryFn: () => GetEditRequestList(exec, page, size),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetEditRequestList;
