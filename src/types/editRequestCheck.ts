export interface EditRequestCheckType {
  content: string;
  createdAt: string;
  id: number;
  isExecuted: boolean;
  userId: number;
  images: string[];
  nickname: string;
  email: string;
  popup: Popups;
  userImageUrl: string;
}

export interface Popups {
  modifyInfoId: string | undefined;
  name: string;
  homepageLink: string;
  introduce: string;
  address: string;
  addressDetail: string | null;
  availableAgeValue: string;
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
  keywordList: string[];
  posterList: string[];
  entranceRequired: boolean;
  prefered: {
    [key: string]: boolean;
  };
  reopenDemandCnt?: number;
  taste: {
    [key: string]: boolean;
  };
  viewCnt?: number;
}

export interface EditRequestProps {
  editCheck?: EditRequestCheckType;
}

export interface PopupEdit {
  id?: number;
  name: string;
  introduce: string;
  address: string;
  addressDetail: string | null;
  openDate: string;
  closeDate: string;
  openTime: string;
  closeTime: string;
  entranceFee: string;
  entranceRequired: boolean;
  availableAge: string;
  parkingAvailable: boolean;
  resvRequired: boolean;
  availableAgeValue: string;
  homepageLink: string;
  operationStatus?: string;
  operationExcept: string | null;
  posterUrl?: string;
  posterList: string[];
  keywordList: string[];
  createdAt?: string;
  editedAt?: string;
  interestCnt?: number;
  viewCnt?: number;
  reopenDemandCnt?: number;
  latitude: string;
  longitude: string;
  prefered: {
    [key: string]: boolean;
  };
  taste: {
    [key: string]: boolean;
  };
}
