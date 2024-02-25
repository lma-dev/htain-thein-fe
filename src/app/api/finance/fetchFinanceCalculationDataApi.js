// api.js
import { fetchAllData } from "../../libs/ApiRequestHelper";

export const fetchFinanceCalculationDataApi = async () => {
  return await fetchAllData("/calculations");
};
