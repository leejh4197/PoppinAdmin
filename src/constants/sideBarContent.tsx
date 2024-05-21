interface SideBarContent {
  name: string;
  path?: string;
  contactActive?: boolean;
  reportActive?: boolean;
}
export const sideBarContents: SideBarContent[] = [
  { name: "회원 관리", path: "/memberManager" },
  { name: "문의하기/FAQ 관리" },
  { name: "문의하기", path: "/contact" },
  { name: "FAQ", path: "/faq" },
  { name: "정보 수정 요청 관리", path: "/editRequests" },
  { name: "신고 관리" },
  { name: "팝업 신고 관리", path: "/popupReport" },
  { name: "후기 신고 관리", path: "/reviewReport" },
  { name: "팝업 제보 관리", path: "/submissionManager" },
  { name: "전체 팝업 관리", path: "/overallManager" },
  { name: "이용 약관 및 정책 관리", path: "/" },
  { name: "앱 버전", path: "/" },
  { name: "로그아웃", path: "/" },
];
