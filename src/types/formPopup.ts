export interface FormPopups {
  address: string;
  addressDetail: string | null;
  availableAge: string;
  availableAgeValue?: string;
  closeDate: string;
  closeTime: string;
  createdAt?: string;
  editedAt?: string;
  entranceFee: string;
  homepageLink: string;
  id?: number;
  interestCnt?: number;
  introduce: string;
  keywordList?: string[];
  name: string;
  openDate: string;
  openTime: string;
  operationExcept?: string | null;
  operationStatus?: string;
  parkingAvailable: boolean;
  posterList?: string[];
  posterUrl?: string;
  prefered: {
    id: string;
    market: boolean;
    display: boolean;
    experience: boolean;
    wantFree: boolean;
  };
  reopenDemandCnt?: number;
  resvRequired: boolean;
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
    itTech: true;
    kpop: boolean;
    movie: boolean;
    musical: boolean;
    sports: boolean;
    webtoonAni: boolean;
  };
  viewCnt?: number;
}

export interface EditPopupResponse {
  success: boolean;
  data: FormPopups;
  error: null;
}
