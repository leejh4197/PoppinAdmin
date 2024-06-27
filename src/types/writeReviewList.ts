export interface WriteReviewType {
  reviewId: number;
  popupName: string;
  visitedAt: string;
  createdAt: string;
  content: string;
  imageUrl: string[];
  visible: boolean;
}
export interface WriteReviewPage {
  page: number;
  size: number;
  totalPages: number;
}

export interface WriteReviewResponse {
  items: WriteReviewType[];
  pageInfo: WriteReviewPage;
}
