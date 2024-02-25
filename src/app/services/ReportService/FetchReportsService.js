import { fetchReportApi } from "../../api/report/fetchReportApi";

export const fetchReportsDataService = async () => {
  return await fetchReportApi();
};
