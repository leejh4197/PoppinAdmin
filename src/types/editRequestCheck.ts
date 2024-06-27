export interface EditRequestCheckType {
  content: string;
  createdAt: string;
  id: number;
  isExecuted: boolean;
  userId: number;
  images: string[];
  nickname: string;
  email: string;
  popup: Popups[];
  userImageUrl: string;
}

export interface Popups {
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
  createdAt: string;
  editedAt: string;
  interestCnt: number;
  viewCnt: number;
  reopenDemandCnt: number;
  prefered: {
    id: number;
    market: boolean;
    display: boolean;
    experience: boolean;
    wantFree: boolean;
  };
  taste: {
    alcohol: boolean;
    animalPlant: boolean;
    characters: boolean;
    etc: boolean;
    fashionBeauty: boolean;
    foodBeverage: boolean;
    game: boolean;
    id: number;
    interiorThings: boolean;
    itTech: boolean;
    kpop: boolean;
    movie: boolean;
    musical: boolean;
    sports: boolean;
    webtoonAni: boolean;
  };
}

export interface EditRequestProps {
  editCheck?: EditRequestCheckType;
}
