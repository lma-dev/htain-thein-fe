// api.js
import { fetchAllData } from "../../utils/ApiMethodHelper";

export const fetchFinanceCalculationDataApi = async () => {
  return await fetchAllData("/calculations");
};
