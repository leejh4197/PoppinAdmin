import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostReviewProcessingDetail } from "../../api/api";
import { useNavigate } from "react-router-dom";

const usePostReviewProcessingDetail = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["postReviewChange"],
    mutationFn: ({
      content,
      reportedReviewId,
    }: {
      content: string;
      reportedReviewId: string | undefined;
    }) => PostReviewProcessingDetail(content, reportedReviewId),
    retry: false,
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData(["postPopup"], data);
      alert("팝업이 성공적으로 등록되었습니다!");
      navigate("/reviewReport");
    },
  });
  return { mutate, data, isPending, isError, error };
};

export default usePostReviewProcessingDetail;
