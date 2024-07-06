import { useMutation } from "@tanstack/react-query";
import { EditRequestPopup } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { EditPopups } from "../../types/editForm";

interface FormData {
  contents: EditPopups;
  images: File[];
}

const useEditRequestPopup = () => {
  const navigate = useNavigate();

  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["editRequestPopup"],
    mutationFn: (formData: FormData) =>
      EditRequestPopup(formData.contents, formData.images),
    retry: false,
    onSuccess: (data) => {
      if (data.success) {
        alert("수정이 완료됐습니다.");
        navigate("/editRequests");
      }
    },
  });

  return { mutate, data, isPending, isError, error };
};

export default useEditRequestPopup;
