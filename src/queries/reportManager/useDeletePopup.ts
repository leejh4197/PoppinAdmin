import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeletePopup } from "../../api/api";
import { useNavigate } from "react-router-dom";

const useDeletePopup = (queryKey: string[], successNavigationPath: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | undefined) => DeletePopup(id),
    onSuccess: () => {
      alert("삭제가 완료됐습니다!");
      navigate(successNavigationPath);
      queryClient.invalidateQueries({ queryKey });
    },
  });
};

export default useDeletePopup;
