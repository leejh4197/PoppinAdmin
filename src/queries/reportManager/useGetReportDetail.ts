import { useQuery } from "@tanstack/react-query";
import { GetPopupReportDetail } from "../../api/api";

const useGetReportDetail = (popupId: string | undefined) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getReportDetail", popupId],
    queryFn: () => GetPopupReportDetail(popupId),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetReportDetail;
