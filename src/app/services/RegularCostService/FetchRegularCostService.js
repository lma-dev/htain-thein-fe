import { fetchRegularCostApi } from "../../api/regular-cost/fetchRegularCostApi";

export const fetchRegularCostsDataService = async () => {
  return await fetchRegularCostApi();
};
