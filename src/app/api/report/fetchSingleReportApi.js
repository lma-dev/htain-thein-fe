import { fetchSingleData } from "../../libs/ApiMethodHelper";

export const fetchSingleReportApi = async (reportId) => {
  return await fetchSingleData(`/reports/${reportId}`);
};
