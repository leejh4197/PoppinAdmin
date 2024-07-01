import { EditRequestCheckType, Popups } from "../types/editRequestCheck";
import { EditRequestListType } from "../types/editRequestList";
import { DeleteFaqData } from "../types/faqDelete";
import { FaqDataList } from "../types/faqList";
import { FormPopups } from "../types/formPopup";
import { NoticeContent, NoticeResponse } from "../types/noticeForm";
import { OperatorRePortListResType } from "../types/operatorReportType";
import { AllPopupRes } from "../types/overAllPopupList";
import { PopupReportDetailType } from "../types/popupReportDetailType";
import { RePortListResType } from "../types/reportType";
import { ReviewReportDetailType } from "../types/reviewReportDetailType";
import { ReviewRePortListResType } from "../types/reviewReportType";
import { User } from "../types/user";
import { UserDetail } from "../types/userDetail";
import { UserList } from "../types/userList";
import { UserSearch } from "../types/userSearch";
import { FaqRes } from "../types/writeFaq";
import { WriteReviewResponse } from "../types/writeReviewList";
import { userInstance } from "./instance";

// ! 유저관리
export const GetUserCheck = (): Promise<User> =>
  userInstance.get("/api/v1/user/settings").then((res) => res.data.data);
// 유저 검색
export const GetuserSearch = (text: string): Promise<UserSearch> =>
  userInstance
    .get(`/api/v1/admin/users/search?text=${text}`)
    .then((res) => res.data.data);

// 전체 회원 리스트
export const GetUserList = (
  page: number,
  size: number,
  care: boolean
): Promise<UserList> =>
  userInstance
    .get(`/api/v1/admin/users?page=${page}&size=${size}&care=${care}`)
    .then((res) => res.data.data);

// 회원 상세 정보
export const GetUserDetail = (userId: string): Promise<UserDetail> =>
  userInstance
    .get(`/api/v1/admin/users/${userId}`)
    .then((res) => res.data.data);
// 작성한 후기 리스트
export const GetWriteReviewList = (
  userId: string | undefined,
  page: number,
  hidden: boolean
): Promise<WriteReviewResponse> =>
  userInstance
    .get(
      `/api/v1/admin/users/${userId}/reviews?page=${page}&size=${5}&hidden=${hidden}`
    )
    .then((res) => res.data.data);
//! 자주 묻는 질문
// 자주묻는 질문 등록
export const PostWriteFaq = (
  question: string,
  answer: string
): Promise<FaqRes> =>
  userInstance
    .post("/api/v1/admin/support/faqs", { question, answer })
    .then((res) => res.data.data);
// 자주묻는 질문 리스트
export const GetFaqList = (): Promise<FaqDataList[]> =>
  userInstance.get("/api/v1/admin/support/faqs").then((res) => res.data.data);
export const DeleteFaq = (faqId: string): Promise<DeleteFaqData> =>
  userInstance
    .delete(`/api/v1/admin/support/faqs/${faqId}`)
    .then((res) => res.data.data);

//! 정보 수정 요청 관리
// 정보 수정 요청 리스트
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

//! 전체 팝업 관리
// 전체 팝업 리스트
export const GetOverAllPopupList = (
  page: number,
  size: number,
  oper: string
): Promise<AllPopupRes> =>
  userInstance
    .get(`/api/v1/popup/admin/list?page=${page}&size=${size}&oper=${oper}`)
    .then((res) => res.data.data);
//  팝업 생성
export const PostPopupCreate = (
  contents: Popups,
  images: File[]
): Promise<Popups> => {
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
export const GetOverAllPopupSearch = (
  id: string | undefined
): Promise<Popups> =>
  userInstance.get(`/api/v1/popup/admin?id=${id}`).then((res) => res.data.data);

//! 신고 관리
// 팝업 신고 목록 조회
export const GetReportList = (
  isExec: boolean,
  page: number,
  size: number
): Promise<RePortListResType> =>
  userInstance
    .get(
      `/api/v1/admin/reports/popups?isExec=${isExec}&page=${page}&size=${size}`
    )
    .then((res) => res.data.data);
// 팝업 신고 상세 조회
export const GetPopupReportDetail = (
  popupId: string | undefined
): Promise<PopupReportDetailType | undefined> =>
  userInstance
    .get(`/api/v1/admin/reports/popups/${popupId}`)
    .then((res) => res.data.data);
// 후기 신고 변경사항 없음
export const PostReviewReportChange = (reportedReviewId?: string) =>
  userInstance
    .post(`/api/v1/admin/reports/reviews/${reportedReviewId}/exec`)
    .then((res) => res.data.data);
// 후기 신고 처리내용
export const PostReviewProcessingDetail = (
  content: string,
  reportedReviewId?: string
) =>
  userInstance
    .post(`/api/v1/admin/reports/reviews/${reportedReviewId}`, { content })
    .then((res) => res.data.data);
// 후기 신고
export const GetReviewProcessingComplete = (reportId: number) =>
  userInstance
    .get(`/api/v1/admin/reports/reviews/${reportId}/exec`)
    .then((res) => res.data.data);
// 팝업 후기 신고 상세조회
export const GetReviewReportDetail = (
  reviewId: string | undefined
): Promise<ReviewReportDetailType | undefined> =>
  userInstance
    .get(`/api/v1/admin/reports/reviews/${reviewId}`)
    .then((res) => res.data.data);

// 팝업 후기신고 목록 조회
export const GetReviewReportList = (
  isExec: boolean,
  page: number,
  size: number
): Promise<ReviewRePortListResType> =>
  userInstance
    .get(
      `/api/v1/admin/reports/reviews?isExec=${isExec}&page=${page}&size=${size}`
    )
    .then((res) => res.data.data);
// 팝업 삭제
export const DeletePopup = (id: number | undefined) =>
  userInstance
    .delete(`/api/v1/popup/admin?id=${id}`)
    .then((res) => res.data.data);

// 팝업 수정
export const EditPopup = (
  contents: FormPopups,
  images: File[]
): Promise<FormPopups> => {
  const formData = new FormData();
  formData.append(
    "contents",
    new Blob([JSON.stringify(contents)], { type: "application/json" })
  );
  images.forEach((image) => {
    formData.append(`images`, image);
  });

  return userInstance.put(`/api/v1/popup/admin`, formData).then((res) => {
    console.log(res);
    return res.data;
  });
};

//! 제보하기
// 운영자 제보하기 목록 조회
export const GetOperatorReportList = (
  page: number,
  size: number,
  prog: string
): Promise<OperatorRePortListResType> =>
  userInstance
    .get(`/api/v1/manager-inform/list?page=${page}&size=${size}&prog=${prog}`)
    .then((res) => res.data.data);
// 이용자 제보하기 목록 조회
export const GetUserReportList = (
  page: number,
  size: number,
  prog: string
): Promise<OperatorRePortListResType> =>
  userInstance
    .get(`/api/v1/user-inform/list?page=${page}&size=${size}&prog=${prog}`)
    .then((res) => res.data.data);
// 운영자 제보 조회
export const GetOperatorReportSearch = (informId: number): Promise<Popups> =>
  userInstance
    .get(`/api/v1/manager-inform?informId=${informId}`)
    .then((res) => res.data.data);

// 이용자 제보 조회
export const GetUserReportSearch = (informId: number): Promise<Popups> =>
  userInstance
    .get(`/api/v1/user-inform?informId=${informId}`)
    .then((res) => res.data.data);
//! 공지사항등록
export const PostNotice = (
  contents: NoticeContent,
  images: File | null
): Promise<NoticeResponse> => {
  const formData = new FormData();
  formData.append(
    "contents",
    new Blob([JSON.stringify(contents)], { type: "application/json" })
  );
  if (images) {
    formData.append(`images`, images);
  }
  return userInstance
    .post("https://www.bubble-poppin.com/api/v1/admin/info/create", formData)
    .then((res) => res.data.data);
};
