import { fetchAllData } from "../../libs/ApiRequestHelper";

export const fetchReportsApi = async () => {
  return await fetchAllData("/reports");
};
