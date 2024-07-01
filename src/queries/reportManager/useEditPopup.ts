import { useMutation } from "@tanstack/react-query";
import { EditPopup } from "../../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import { FormPopups } from "../../types/formPopup";

interface FormData {
  contents: FormPopups;
  images: File[];
}

const useEditPopup = () => {
  const navigate = useNavigate();
  const locate = useLocation();

  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["editPopup"],
    mutationFn: (formData: FormData) =>
      EditPopup(formData.contents, formData.images),
    retry: false,
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        alert("수정이 완료됐습니다.");
        navigate(`/popupReport/${locate.state.popupId}?isSuccess=true`);
      }
    },
  });
  return { mutate, data, isPending, isError, error };
};

export default useEditPopup;
