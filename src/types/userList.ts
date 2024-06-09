export interface UserList {
  id: number;
  userImageUrl: string | null;
  email: string;
  nickname: string;
  birthDate: string | null;
  provider: string | null;
  requiresSpecialCare: boolean;
}
