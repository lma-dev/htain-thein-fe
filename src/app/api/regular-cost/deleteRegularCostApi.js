import { deleteSingleData } from "../../libs/ApiMethodHelper";

export const deleteRegularCostApi = async (regularCostId) => {
  return await deleteSingleData(`/general-outcome/${regularCostId}`);
};
