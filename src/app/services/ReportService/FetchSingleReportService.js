import { fetchSingleReportApi } from "../../api/report/fetchSingleReportApi";
import { useFetchQueryWithParams } from "../../hooks/useFetchQuery";

export const FetchSingleReportService = (reportId) => {
  return useFetchQueryWithParams("reports",fetchSingleReportApi, reportId);
};
