import { fetchReportsApi } from "../../api/report/fetchReportApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchReportsService = (
  generalSearch,
  amount,
  confirmStatus,
  type,
  createdAt
) => {
  return useFetchQuery(
    ["reports", generalSearch, amount, confirmStatus, type, createdAt],
    () => fetchReportsApi(generalSearch, amount, confirmStatus, type, createdAt)
  );
};
