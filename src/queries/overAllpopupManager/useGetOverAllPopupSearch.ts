import { useQuery } from "@tanstack/react-query";
import { GetOverAllPopupSearch } from "../../api/api";

const useGetOverAllPopupSearch = (id: string | undefined) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getOverAllPopupSearch", id],
    queryFn: () => GetOverAllPopupSearch(id),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetOverAllPopupSearch;
