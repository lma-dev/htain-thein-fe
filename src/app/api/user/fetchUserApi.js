import { fetchAllData } from "../../libs/ApiRequestHelper";

export const fetchUserApi = async () => {
  return await fetchAllData("/users");
};
