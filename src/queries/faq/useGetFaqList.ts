import { useQuery } from "@tanstack/react-query";
import { GetFaqList } from "../../api/api";

const useGetFaqList = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getFaqList"],
    queryFn: GetFaqList,
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetFaqList;
