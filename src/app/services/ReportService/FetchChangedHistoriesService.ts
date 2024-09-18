import { fetchChangedHistoriesApi } from "../../api/report/fetchChangedHistoriesApi";
import { useFetchQueryWithParams } from "../../hooks/useFetchQuery";

export const FetchChangedHistoriesService = (reportId:number) => {
  return useFetchQueryWithParams(
    ["report-changed-histories"],
    fetchChangedHistoriesApi,
    reportId
  );
};
