import { deleteRegularCostApi } from "../../api/regular-cost/deleteRegularCostApi";

export const deleteRegularCostService = async (regularCostId) => {
  return await deleteRegularCostApi(regularCostId);
};
