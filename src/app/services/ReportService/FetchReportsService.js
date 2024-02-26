import { fetchReportsApi } from "../../api/report/fetchReportApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchReportsService = () => {
  return useFetchQuery("reports", fetchReportsApi);
};
