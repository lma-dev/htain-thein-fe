import { fetchUncheckReportApi } from "../../api/report/fetchUncheckReportApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchUncheckReportService =  () => {
  return useFetchQuery("uncheck-reports", fetchUncheckReportApi);
};
