import { useQuery } from "@tanstack/react-query";
import { GetOverAllPopupList } from "../../api/api";

const useGetOverAllPopupList = (page: number) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getOverallPopupList"],
    queryFn: () => GetOverAllPopupList(page),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetOverAllPopupList;
