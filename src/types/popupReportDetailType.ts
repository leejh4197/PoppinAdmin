export interface PopupReportDetailType {
  reportContentDto: ReportContentDto;
  reportedPopupDetailDto: ReportedPopupDetailDto;
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
