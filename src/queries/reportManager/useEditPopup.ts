import { useMutation } from "@tanstack/react-query";
import { EditPopup } from "../../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import { EditPopups } from "../../types/editForm";

interface FormData {
  contents: EditPopups;
  images: File[];
}

const useEditPopup = (isPopupReport: boolean, navigatePath: string) => {
  const navigate = useNavigate();
  const locate = useLocation();

  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["editPopup"],
    mutationFn: (formData: FormData) =>
      EditPopup(formData.contents, formData.images),
    retry: false,
    onSuccess: (data) => {
      if (data.success) {
        alert("수정이 완료됐습니다.");
        if (isPopupReport) {
          navigate(
            `${navigatePath}/${locate.pathname.split("/")[2]}?isSuccess=true`
          );
        } else {
          navigate(navigatePath);
        }
      }
    },
  });

  return { mutate, data, isPending, isError, error };
};

export default useEditPopup;
