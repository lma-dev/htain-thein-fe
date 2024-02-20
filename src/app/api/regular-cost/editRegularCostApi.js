import { editData } from "../../libs/ApiRequestHelper";

export const editRegularCostApi = async (regularCostId, newData) => {
  return await editData(`/general-outcome/${regularCostId}`, newData);
};
