import { fetchSingleData } from "../../libs/ApiMethodHelper";

export const fetchSingleUserApi = async (userId) => {
  return await fetchSingleData(`/users/${userId}`);
};
