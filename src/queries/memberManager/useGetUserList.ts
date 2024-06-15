import { useQuery } from "@tanstack/react-query";
import { GetUserList } from "../../api/api";

const useGetUserList = (page: number) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getUserList", page],
    queryFn: () => GetUserList(page),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetUserList;
