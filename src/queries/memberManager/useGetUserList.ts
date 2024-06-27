import { useQuery } from "@tanstack/react-query";
import { GetUserList } from "../../api/api";

const useGetUserList = (page: number, size: number, care: boolean) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getUserList", page, size, care],
    queryFn: () => GetUserList(page, size, care),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetUserList;
