import { useQuery } from "@tanstack/react-query";
import { GetuserSearch } from "../../api/api";

const useGetUserSearch = (text: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getUserSearch", text],
    queryFn: () => GetuserSearch(text),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetUserSearch;
