import { useMutation } from "@tanstack/react-query";
import { PostNotice } from "../../api/api";
import { NoticeContent } from "../../types/noticeForm";

interface FormData {
  contents: NoticeContent;
  images: File | null;
}

const usePostNotice = () => {
  const { mutate, data, isPending, isError, error, isSuccess } = useMutation({
    mutationKey: ["postNotice"],
    mutationFn: (formData: FormData) =>
      PostNotice(formData.contents, formData.images),
    retry: false,
    onError: (error) => {
      console.log(error);
    },
  });
  return { mutate, data, isPending, isError, error, isSuccess };
};

export default usePostNotice;
