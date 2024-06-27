import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeletePopup } from "../../api/api";
import { useNavigate } from "react-router-dom";

const useDeletePopup = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | undefined) => DeletePopup(id),
    onSuccess: (data) => {
      console.log(data);
      alert("삭제가 완료됐습니다!");
      navigate("/popupReport");
      queryClient.invalidateQueries({ queryKey: ["getReportList"] });
    },
  });
};

export default useDeletePopup;
