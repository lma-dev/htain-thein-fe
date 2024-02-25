import { fetchUsersApi } from "../../api/user/fetchUsersApi";

export const fetchUsersService = async () => {
  return await fetchUsersApi();
};
