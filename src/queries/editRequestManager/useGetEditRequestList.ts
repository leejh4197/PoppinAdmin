import { useQuery } from "@tanstack/react-query";
import { GetEditRequestList } from "../../api/api";

const useGetEditRequestList = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getEditRequestList"],
    queryFn: GetEditRequestList,
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetEditRequestList;
