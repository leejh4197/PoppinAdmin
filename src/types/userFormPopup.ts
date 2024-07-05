export interface UserFormPopups {
  userInformId: string | undefined;
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

export interface UserPopupResponse {
  success: boolean;
  data: UserFormPopups;
  error: null;
}
