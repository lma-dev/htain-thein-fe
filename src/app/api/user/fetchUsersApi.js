import { fetchAllData } from "../../libs/ApiRequestHelper";

export const fetchUsersApi = async () => {
  return await fetchAllData("/users");
};
