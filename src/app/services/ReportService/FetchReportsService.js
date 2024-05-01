import { fetchReportsApi } from "../../api/report/fetchReportApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchReportsService = (
  generalSearch,
  amount,
  confirmStatus,
  type,
  createdAt,
  page
) => {
  return useFetchQuery(
    ["reports", generalSearch, amount, confirmStatus, type, createdAt, page],
    () =>
      fetchReportsApi(
        generalSearch,
        amount,
        confirmStatus,
        type,
        createdAt,
        page
      )
  );
};
