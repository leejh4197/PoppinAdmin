export interface ReviewReportDetailType {
  reportContentDto: ReportContentDto;
  reportedPopupDetailDto: ReportedPopupDetailDto;
  reportedReviewDetailDto: ReportedReviewDetailDto;
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
  closeDate: string;
  closeTime: string;
  openDate: string;
  openTime: string;
  introduce: string;
}

export interface ReportedReviewDetailDto {
  imageUrl: string[];
  isCertificated: boolean;
  reviewCnt: number;
  reviewCreatedAt: string;
  reviewId: number;
  reviewWriter: string;
  reviewContent: string;
  userProfileImageUrl: string;
}
