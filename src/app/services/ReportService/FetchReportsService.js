import { fetchReportApi } from "../../api/report/fetchReportApi";

export const fetchReportsData = async () => {
  return await fetchReportApi();
};
