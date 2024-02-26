import { fetchRegularCostApi } from "../../api/regular-cost/fetchRegularCostApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchRegularCostsDataService = () => {
  return useFetchQuery("general-outcome", fetchRegularCostApi);
};
