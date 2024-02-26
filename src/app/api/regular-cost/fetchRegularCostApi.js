import { fetchAllData } from "../../libs/ApiMethodHelper";

export const fetchRegularCostApi = async () => {
  return await fetchAllData("/general-outcome");
};
