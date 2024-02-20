import { fetchAllData } from "../../libs/ApiRequestHelper";

export const fetchUsersService = async () => {
  return await fetchAllData("/users");
};
