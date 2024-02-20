import { deleteSingleData } from "../../libs/ApiRequestHelper";

export const deleteRegularCostApi = async (regularCostId) => {
  return await deleteSingleData(`/general-outcome/${regularCostId}`);
};
