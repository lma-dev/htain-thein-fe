import { fetchAllData } from "../../libs/ApiRequestHelper";

export const fetchReportApi = async () => {
  return await fetchAllData("/reports");
};
