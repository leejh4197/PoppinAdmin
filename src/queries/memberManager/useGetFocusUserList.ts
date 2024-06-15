import { useQuery } from "@tanstack/react-query";
import { GetFocusUserList } from "../../api/api";

const useGetFocusUserList = (page: number) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getFocusUserList", page],
    queryFn: () => GetFocusUserList(page),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetFocusUserList;
