export interface RePortListResType {
  items: Items[];
  pageInfo: PageInfo;
}
interface Items {
  executed: boolean;
  popupId: number;
  popupName: string;
  reportedAt: string;
  reportId: number;
  reporter: string;
}

interface PageInfo {
  page: number;
  size: number;
  totalPages: number;
}
