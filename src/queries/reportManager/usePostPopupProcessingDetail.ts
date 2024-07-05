import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostPopupProcessingDetail } from "../../api/api";
import { useNavigate } from "react-router-dom";

const usePostPopupProcessingDetail = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["postPopupProcessingDetail"],
    mutationFn: ({
      content,
      reportId,
    }: {
      content: string;
      reportId: string | undefined;
    }) => PostPopupProcessingDetail(content, reportId),
    retry: false,
    onSuccess: (data) => {
      queryClient.setQueryData(["postPopupProcessingDetail"], data);
      alert("팝업이 성공적으로 처리됐습니다!");
      navigate("/popupReport");
    },
  });
  return { mutate, data, isPending, isError, error };
};

export default usePostPopupProcessingDetail;
