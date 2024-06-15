import { useQuery } from "@tanstack/react-query";
import { GetUserDetail } from "../../api/api";

const useGetUserDetail = (userId: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getUserDetail", userId],
    queryFn: () => GetUserDetail(userId),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetUserDetail;
