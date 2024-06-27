import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostPopupCreate } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Popups } from "../../types/editRequestCheck";

interface FormData {
  contents: Popups;
  images: File[];
}

const usePostOverAllPopupCreate = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["postPopup"],
    mutationFn: (formData: FormData) =>
      PostPopupCreate(formData.contents, formData.images),
    retry: false,
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData(["postPopup"], data);
      alert("팝업이 성공적으로 등록되었습니다!");
      navigate("/overallManager");
    },
  });
  return { mutate, data, isPending, isError, error };
};

export default usePostOverAllPopupCreate;
