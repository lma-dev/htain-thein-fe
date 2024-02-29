import { fetchAllData } from "../../libs/ApiMethodHelper";

export const fetchReportsApi = async () => {
  return await fetchAllData("/reports");
};
