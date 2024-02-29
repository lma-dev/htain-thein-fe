import { fetchChangedHistoriesApi } from "../../api/report/fetchChangedHistoriesApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchChangedHistoriesService = () => {
  return useFetchQuery("report-changed-histories", fetchChangedHistoriesApi);
};
