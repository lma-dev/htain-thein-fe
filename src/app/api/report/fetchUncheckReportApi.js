import { fetchAllData } from "../../libs/ApiRequestHelper";

export const fetchUncheckReportApi = async () => {
  return await fetchAllData("/uncheck-reports");
};
