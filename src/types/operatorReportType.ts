export interface OperatorRePortListResType {
  items: Items[];
  pageInfo: PageInfo;
}
interface Items {
  adminName: null | string;
  executedAt: null | string;
  id: string;
  informedAt: string;
  informerName: string;
  popupName: string;
  progress: string;
}

interface PageInfo {
  page: number;
  size: number;
  totalPages: number;
}
