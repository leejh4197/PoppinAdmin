// FAQ 데이터 인터페이스
interface FaqData {
  id: number;
  question: string;
  answer: string;
  createdAt: string;
}

// API 응답 인터페이스
export interface FaqRes {
  success: boolean;
  data: FaqData | null;
  error: null;
}
