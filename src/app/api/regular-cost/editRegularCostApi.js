import { editData } from "../../utils/ApiMethodHelper";

export const editRegularCostApi = async (regularCostId, newData) => {
  return await editData(`/general-outcome/${regularCostId}`, newData);
};
