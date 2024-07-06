import { useMutation } from "@tanstack/react-query";
import { EditUserReportTemp } from "../../api/api";
import { UserFormPopups } from "../../types/userFormPopup";
import { useNavigate } from "react-router-dom";

interface FormData {
  contents: UserFormPopups;
  images: File[];
}

const useEditUserReportTemp = () => {
  const navigate = useNavigate();
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["editUserReportTemp"],
    mutationFn: (formData: FormData) =>
      EditUserReportTemp(formData.contents, formData.images),
    retry: false,
    onSuccess: (data) => {
      if (data.success) {
        alert("수정이 완료됐습니다.");
        navigate("/userReport");
      }
    },
  });
  return { mutate, data, isPending, isError, error };
};

export default useEditUserReportTemp;
