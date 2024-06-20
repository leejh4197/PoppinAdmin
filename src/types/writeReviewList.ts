export interface WriteReviewType {
  reviewId: number;
  popupName: string;
  visitedAt: string;
  createdAt: string;
  content: string;
  imageUrl: string[];
  hiddenReview: boolean;
}

export interface WriteReviewResponse {
  success: boolean;
  data: WriteReviewType[];
  error: null;
}
