import { fetchChangedHistoriesApi } from "../../api/report/fetchChangedHistoriesApi";
import { useFetchQueryWithParams } from "../../hooks/useFetchQuery";

export const FetchChangedHistoriesService = (reportId) => {
  return useFetchQueryWithParams(
    "report-changed-histories",
    fetchChangedHistoriesApi,
    reportId
  );
};
