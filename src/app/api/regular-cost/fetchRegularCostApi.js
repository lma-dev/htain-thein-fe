import { fetchAllData } from "../../utils/ApiMethodHelper";

export const fetchRegularCostApi = async () => {
  return await fetchAllData("/general-outcomes");
};
