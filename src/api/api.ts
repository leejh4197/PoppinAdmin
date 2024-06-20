import { EditRequestCheckType } from "../types/editRequestCheck";
import { EditRequestListType } from "../types/editRequestList";
import { DeleteFaqData } from "../types/faqDelete";
import { FaqDataList } from "../types/faqList";
import { AllPopupRes } from "../types/overAllPopupList";
import { User } from "../types/user";
import { UserDetail } from "../types/userDetail";
import { UserList } from "../types/userList";
import { UserSearch } from "../types/userSearch";
import { FaqRes } from "../types/writeFaq";
import { WriteReviewResponse, WriteReviewType } from "../types/writeReviewList";
import { userInstance } from "./instance";

// ! 유저관리
export const GetUserCheck = (): Promise<User> =>
  userInstance.get("/api/v1/user/settings").then((res) => res.data.data);
// 유저 검색
export const GetuserSearch = (text: string): Promise<UserSearch> =>
  userInstance
    .get(`/api/v1/admin/users/search?text=${text}`)
    .then((res) => res.data.data);

export const GetFocusUserList = (page: number): Promise<UserList> =>
  userInstance
    .get(`/api/v1/admin/users/special-care?page=${page}`)
    .then((res) => res.data.data);
export const GetUserList = (page: number): Promise<UserList> =>
  userInstance
    .get(`/api/v1/admin/users?page=${page}`)
    .then((res) => res.data.data);
export const GetUserDetail = (userId: string): Promise<UserDetail> =>
  userInstance
    .get(`/api/v1/admin/users/${userId}`)
    .then((res) => res.data.data);
// 작성한후기
export const GetWriteReviewList = (
  userId: string | undefined,
  page: number,
  hidden: boolean
): Promise<WriteReviewType[]> =>
  userInstance
    .get(
      `/api/v1/admin/users/${userId}/reviews?page=${page}&size=${5}&hidden=${hidden}`
    )
    .then((res) => res.data.data);
//! 자주 묻는 질문
export const PostWriteFaq = (
  question: string,
  answer: string
): Promise<FaqRes> =>
  userInstance
    .post("/api/v1/admin/support/faqs", { question, answer })
    .then((res) => res.data.data);

export const GetFaqList = (): Promise<FaqDataList[]> =>
  userInstance.get("/api/v1/admin/support/faqs").then((res) => res.data.data);
export const DeleteFaq = (faqId: string): Promise<DeleteFaqData> =>
  userInstance
    .delete(`/api/v1/admin/support/faqs/${faqId}`)
    .then((res) => res.data.data);

//! 정보 수정 요청 관리
export const GetEditRequestList = (
  exec: boolean,
  page: number,
  size: number
): Promise<EditRequestListType> =>
  userInstance
    .get(`/api/v1/modify-info/list?isExec=${exec}&page=${page}&size=${size}`)
    .then((res) => res.data.data);
// 정보 수정 요청 조회
export const GetEditRequestCheck = (
  infoId: number
): Promise<EditRequestCheckType> =>
  userInstance
    .get(`/api/v1/modify-info?infoId=${infoId}`)
    .then((res) => res.data.data);

//! 전체 팝업
export const GetOverAllPopupList = (
  page: number,
  size: number,
  oper: string
): Promise<AllPopupRes> =>
  userInstance
    .get(`/api/v1/popup/admin/list?page=${page}&size=${size}&oper=${oper}`)
    .then((res) => res.data.data);
// 전체 팝업 관리 - 팝업 생성
export const PostPopupCreate = (
  contents: any,
  images: File[]
): Promise<any> => {
  const formData = new FormData();
  formData.append(
    "contents",
    new Blob([JSON.stringify(contents)], { type: "application/json" })
  );
  images.forEach((image) => {
    formData.append(`images`, image);
  });

  return userInstance.post(`/api/v1/popup/admin`, formData).then((res) => {
    console.log(res);
    return res.data;
  });
};
// 팝업 조회
export const GetOverAllPopupSearch = (id: string | undefined): Promise<any> =>
  userInstance.get(`/api/v1/popup/admin?id=${id}`).then((res) => res.data.data);

//! 제보하기
// 운영자 제보하기

// 팝업 신고 목록 조회
export const GetReportList = (page: number): Promise<UserList> =>
  userInstance
    .get(`/api/v1/admin/reports/popups?isExec={}&page={}&size={}`)
    .then((res) => res.data.data);
