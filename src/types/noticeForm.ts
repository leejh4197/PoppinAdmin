export interface NoticeContent {
  title: string;
  body: string;
}

export interface NoticeResponse {
  contents: NoticeContent;
  images: File;
}
