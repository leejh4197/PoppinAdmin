import { useQuery } from "@tanstack/react-query";
import { GetEditRequestCheck } from "../../api/api";

const useGetEditRequestCheck = (infoId?: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getEditRequestCheck", infoId],
    queryFn: () => GetEditRequestCheck(infoId),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetEditRequestCheck;
