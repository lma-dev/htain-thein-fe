import { fetchAllData } from "../../utils/ApiMethodHelper";

export const fetchChangedHistoriesApi = async () => {
  return await fetchAllData("/changed-histories");
};
