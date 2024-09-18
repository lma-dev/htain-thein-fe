import { fetchSingleReportApi } from "../../api/report/fetchSingleReportApi";
import { useFetchQueryWithParams } from "../../hooks/useFetchQuery";

export const FetchSingleReportService = (reportId:number) => {
  return useFetchQueryWithParams(["reports"],fetchSingleReportApi, reportId);
};
