export interface EditRequestListType {
  items: EditItems[];
  pageInfo: EditPage;
}

interface EditItems {
  id: string;
  popupName: string;
  informerName: string;
  informedAt: string;
  isExecuted: boolean;
}

interface EditPage {
  page: number;
  size: number;
  totalPages: number;
}
