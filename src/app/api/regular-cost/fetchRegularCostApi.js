import { fetchAllData } from "../../libs/ApiRequestHelper";

export const fetchRegularCostApi = async () => {
  return await fetchAllData("/general-outcome");
};
