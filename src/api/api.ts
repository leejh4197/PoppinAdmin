import { User } from "../types/user";
import { UserList } from "../types/userList";
import { userInstance } from "./instance";

export const GetUserCheck = (): Promise<User> =>
  userInstance.get("/api/v1/user").then((res) => res.data.data);

export const GetuserSearch = (text: string): Promise<UserList[]> =>
  userInstance
    .get(`/api/v1/admin/users/search?text=${text}`)
    .then((res) => res.data.data);
