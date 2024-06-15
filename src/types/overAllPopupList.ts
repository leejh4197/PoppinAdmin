export interface AllPopupList {
  id: number;
  name: string;
  operationStatus: "NOTYET" | "OPERATING" | "TERMINATED";
  adminName: string;
  createdAt: string;
}

export interface AllPopupRes {
  items: {
    popups: AllPopupList[];
    popupNum: number;
  };
  pageInfo: {
    page: number;
    size: number;
    totalPages: number;
  };
}

export interface GetOverAllPopupListResponse {
  success: boolean;
  data: AllPopupRes;
  error: any;
}
