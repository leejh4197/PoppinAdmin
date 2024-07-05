import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostReviewProcessingDetail } from "../../api/api";
import { useNavigate } from "react-router-dom";

const usePostReviewProcessingDetail = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["postReviewProcessingDetail"],
    mutationFn: ({
      content,
      reportId,
    }: {
      content: string;
      reportId: string | undefined;
    }) => PostReviewProcessingDetail(content, reportId),
    retry: false,
    onSuccess: (data) => {
      queryClient.setQueryData(["postReviewProcessingDetail"], data);
      alert("팝업이 성공적으로 처리됐습니다!");
      navigate("/reviewReport");
    },
  });
  return { mutate, data, isPending, isError, error };
};

export default usePostReviewProcessingDetail;
