import { fetchSingleData } from "../../utils/ApiMethodHelper";

export const fetchSingleReportApi = async (reportId) => {
  return await fetchSingleData(`/reports/${reportId}`);
};
