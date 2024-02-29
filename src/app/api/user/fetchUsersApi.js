import { fetchAllData } from "../../libs/ApiMethodHelper";

export const fetchUsersApi = async () => {
  return await fetchAllData("/users");
};
