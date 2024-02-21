import { fetchUserApi } from "../../api/user/fetchUserApi";

export const fetchUsersService = async () => {
  return await fetchUserApi();
};
