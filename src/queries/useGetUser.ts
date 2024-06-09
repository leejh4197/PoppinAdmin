import { useQuery } from "@tanstack/react-query";
import { GetUserCheck } from "../api/api";

const useGetUser = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getUser"],
    queryFn: GetUserCheck,
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetUser;
