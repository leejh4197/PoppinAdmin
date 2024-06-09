export interface User {
  userImageUrl: string;
  email: string;
  nickname: string;
  birthDate: string;
  provider: string;
}

export interface UserState extends User {
  success: boolean;
  error: null;
}
