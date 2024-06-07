import { deleteSingleData } from "../../utils/ApiMethodHelper";

export const deleteRegularCostApi = async (regularCostId) => {
  return await deleteSingleData(`/general-outcomes/${regularCostId}`);
};
