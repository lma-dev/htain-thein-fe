import { editData } from "../../libs/ApiMethodHelper";

export const editRegularCostApi = async (regularCostId, newData) => {
  return await editData(`/general-outcome/${regularCostId}`, newData);
};
