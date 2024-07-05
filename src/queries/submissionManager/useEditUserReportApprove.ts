import { useMutation } from "@tanstack/react-query";
import { EditUserReportApprove } from "../../api/api";
import { UserFormPopups } from "../../types/userFormPopup";
import { useNavigate } from "react-router-dom";

interface FormData {
  contents: UserFormPopups;
  images: File[];
}

const useEditUserReportApprove = () => {
  const navigate = useNavigate();
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["editUserReportApprove"],
    mutationFn: (formData: FormData) =>
      EditUserReportApprove(formData.contents, formData.images),
    retry: false,
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        alert("수정이 완료됐습니다.");
        navigate("/userReport");
      }
    },
  });
  return { mutate, data, isPending, isError, error };
};

export default useEditUserReportApprove;
