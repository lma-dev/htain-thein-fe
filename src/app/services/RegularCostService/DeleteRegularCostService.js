import { deleteSingleData } from "../../libs/ApiRequestHelper";

export const deleteRegularCostService = async (reportId) => {
 return await deleteSingleData(`/general-outcome/${reportId}`);
  };
  