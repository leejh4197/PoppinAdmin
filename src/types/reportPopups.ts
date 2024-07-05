export interface ReportPopups {
  id?: number;
  name: string;
  introduce: string;
  address: string;
  addressDetail: string | null;
  openDate: string | null;
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
  createdAt: string;
  editedAt: string;
  interestCnt: number;
  viewCnt: number;
  reopenDemandCnt: number;
  latitude: number;
  longitude: number;
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

export interface ReportPopupsRes {
  affiliation: string;
  id: number;
  informedAt: string;
  informerEmail: string;
  informerId: number;
  popup: ReportPopups;
  progress: string;
}
