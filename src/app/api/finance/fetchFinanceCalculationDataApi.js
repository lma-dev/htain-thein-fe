// api.js
import { fetchAllData } from "../../libs/ApiMethodHelper";

export const fetchFinanceCalculationDataApi = async () => {
  return await fetchAllData("/calculations");
};
