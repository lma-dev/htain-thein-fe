import { fetchAllData } from "../../utils/ApiMethodHelper";

export const fetchUncheckReportApi = async () => {
  return await fetchAllData("/uncheck-reports");
};
