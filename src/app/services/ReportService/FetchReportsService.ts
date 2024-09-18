import { fetchReportsApi } from "../../api/report/fetchReportApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";
import { ReportsResponse } from "../../types/Report/ReportType";

export const FetchReportsService = (
  generalSearch?:string,
  amount?:number,
  confirmStatus?:number,
  type?:string,
  createdAt?:string,
  page?:number
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
