import { fetchAllData } from "../../libs/ApiMethodHelper";

export const fetchUncheckReportApi = async () => {
  return await fetchAllData("/uncheck-reports");
};
