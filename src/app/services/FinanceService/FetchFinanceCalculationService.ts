import { fetchFinanceCalculationDataApi } from "../../api/finance/fetchFinanceCalculationDataApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchFinanceCalculationService = () => {
  return useFetchQuery(["calculations"], fetchFinanceCalculationDataApi);
};
