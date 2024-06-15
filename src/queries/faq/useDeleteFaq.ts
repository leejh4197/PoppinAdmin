import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteFaq } from "../../api/api";

const useDeleteFaq = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (faqId: string) => DeleteFaq(faqId),
    onSuccess: (data) => {
      alert(data);
      queryClient.invalidateQueries({ queryKey: ["getFaqList"] });
    },
  });
};

export default useDeleteFaq;
