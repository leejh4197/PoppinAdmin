import { useMutation } from "@tanstack/react-query";
import { EditAdminReportApprove } from "../../api/api";
import { AdminFormPopups } from "../../types/adminFormPopup";
import { useNavigate } from "react-router-dom";

interface FormData {
  contents: AdminFormPopups;
  images: File[];
}

const useEditAdminReportApprove = () => {
  const navigate = useNavigate();
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["editAdminReportApprove"],
    mutationFn: (formData: FormData) =>
      EditAdminReportApprove(formData.contents, formData.images),
    retry: false,
    onSuccess: (data) => {
      if (data.success) {
        alert("수정이 완료됐습니다.");
        navigate("/operatorReport");
      }
    },
  });
  return { mutate, data, isPending, isError, error };
};

export default useEditAdminReportApprove;
