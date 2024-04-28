import { fetchSingleData } from "../../utils/ApiMethodHelper";

export const fetchSingleRegularCostApi = async (regularCostId) => {
  return await fetchSingleData(`/general-outcome/${regularCostId}`);
};
