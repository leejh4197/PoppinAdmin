import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { PostWriteFaq } from "../../api/api";

const usePostFaq = (question: string, answer: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["postFaq"],
    mutationFn: () => PostWriteFaq(question, answer),
    retry: false,
    onSuccess: (data) => {
      queryClient.setQueryData(["postFaq"], data);
      alert("작성완료!");
      navigate("/contact");
    },
  });
  return { mutate, data, isPending, isError, error };
};

export default usePostFaq;
