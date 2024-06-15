export interface AllPopupRes {
  popupNum: number;
  popups: AllPopupList[];
}

// Popup 리스트 인터페이스
export interface AllPopupList {
  id: number;
  name: string;
  operationStatus: string;
  adminName: string;
  createdAt: string;
}
