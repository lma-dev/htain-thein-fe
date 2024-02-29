import { fetchSingleData } from "../../libs/ApiMethodHelper";

export const fetchSingleRegularCostApi = async (regularCostId) => {
  return await fetchSingleData(`/general-outcome/${regularCostId}`);
};
