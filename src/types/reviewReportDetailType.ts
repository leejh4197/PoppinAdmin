export interface ReviewReportDetailType {
  reportContentDto: ReportContentDto;
  reportedPopupDetailDto: ReportedPopupDetailDto;
  reportedReviewDetailDto: reportedReviewDetailDto;
}

interface ReportContentDto {
  content: string;
  reportId: number;
  reportedAt: string;
  reporter: string;
}
export interface ReportedPopupDetailDto {
  address: string;
  addressDetail: string | null;
  availableAge: string;
  entranceFee: string;
  homepageLink: string;
  parkingAvailable: boolean;
  popupId: number;
  popupName: string;
  posterUrl: string;
  resvRequired: boolean;
}

export interface reportedReviewDetailDto {
  imageUrl: string[];
  isCertificated: boolean;
  reviewCnt: number;
  reviewCreatedAt: string;
  reviewId: number;
  reviewWriter: string;
  reviewContent: string;
}
