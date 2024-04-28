import { fetchSingleData } from "../../utils/ApiMethodHelper";

export const fetchSingleUserApi = async (userId) => {
  return await fetchSingleData(`/users/${userId}`);
};
