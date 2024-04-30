import { fetchSingleData } from "../../utils/ApiMethodHelper";

export const fetchChangedHistoriesApi = async (reportId) => {
  return await fetchSingleData(`/changed-histories/${reportId}`);
};
