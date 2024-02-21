import { createRegularCostApi } from "../../api/regular-cost/createRegularCostApi";

export const createRegularCostService = async (newData) => {
  return await createRegularCostApi("/general-outcome", newData);
};
