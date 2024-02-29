import { fetchAllData } from "../../libs/ApiMethodHelper";

export const fetchChangedHistoriesApi = async () => {
  return await fetchAllData("/changed-histories");
};
