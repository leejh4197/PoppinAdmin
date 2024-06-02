interface SideBarContent {
  name: string;
  path?: string;
  contactActive?: boolean;
  reportActive?: boolean;
}
export const sideBarContents: SideBarContent[] = [
  { name: "회원 관리", path: "/memberManager" },
  { name: "문의하기/FAQ 관리" },
  { name: "자주 묻는 질문", path: "/contact" },
  { name: "정보 수정 요청 관리", path: "/editRequests" },
  { name: "신고 관리" },
  { name: "팝업 신고", path: "/popupReport" },
  { name: "후기 신고", path: "/reviewReport" },
  { name: "팝업 제보 관리" },
  { name: "운영자 제보", path: "/operatorReport" },
  { name: "이용자 제보", path: "/userReport" },
  { name: "전체 팝업 관리", path: "/overallManager" },
  { name: "공지사항 관리", path: "/noticeManager" },
  { name: "이용 약관 및 정책 관리", path: "/" },
];
