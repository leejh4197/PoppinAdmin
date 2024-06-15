import { useQuery } from "@tanstack/react-query";
import { GetOverAllPopupList } from "../../api/api";

const useGetOverAllPopupList = (page: number, size: number, oper: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getOverallPopupList", page, size, oper],
    queryFn: () => GetOverAllPopupList(page, size, oper),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetOverAllPopupList;
