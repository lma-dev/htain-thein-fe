import { fetchFinanceCalculationDataApi } from "../../api/finance/fetchFinanceCalculationDataApi";

export const fetchFinanceCalculationService = async () => {
  return await fetchFinanceCalculationDataApi();
};
