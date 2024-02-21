import { fetchRegularCostApi } from "../../api/regular-cost/fetchRegularCostApi";

export const fetchRegularCostsData = async () => {
  return await fetchRegularCostApi();
};
