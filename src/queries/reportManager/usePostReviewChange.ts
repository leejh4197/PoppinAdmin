import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostReviewReportChange } from "../../api/api";
import { useNavigate } from "react-router-dom";

const usePostReviewChange = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["postReviewChange"],
    mutationFn: (reportedReviewId?: string) =>
      PostReviewReportChange(reportedReviewId),
    retry: false,
    onSuccess: (data) => {
      queryClient.setQueryData(["postReviewChange"], data);
      alert("팝업 처리완료!");
      navigate("/reviewReport");
    },
  });
  return { mutate, data, isPending, isError, error };
};

export default usePostReviewChange;
