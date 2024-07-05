export interface AdminFormPopups {
  affiliation: string;
  informerEmail: string;
  managerInformId: string | undefined;
  name: string;
  homepageLink: string;
  introduce: string;
  address: string;
  addressDetail: string | null;
  openDate: string;
  closeDate: string;
  openTime: string;
  closeTime: string;
  entranceFee: string;
  availableAge: string;
  parkingAvailable: boolean;
  resvRequired: boolean;
  operationExcept: string | null;
  latitude: string;
  longitude: string;
  prefered: {
    [key: string]: boolean;
  };
  reopenDemandCnt?: number;
  taste: {
    [key: string]: boolean;
  };
  viewCnt?: number;
}

export interface AdminPopupResponse {
  success: boolean;
  data: AdminFormPopups;
  error: null;
}
