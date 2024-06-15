export interface User {
  id: number;
  email: string;
  nickname: string;
  requiresSpecialCare: boolean;
  userImageUrl?: string | null;
  birthDate?: string | null;
  provider?: string | null;
}

export interface UserState extends User {
  success: boolean;
  error: null;
}
