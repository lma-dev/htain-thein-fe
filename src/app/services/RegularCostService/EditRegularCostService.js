import { editData } from "../../libs/ApiRequestHelper";

const EditRegularCostService = async (regularCostId, newData) => {
  const response = await editData(`/general-outcome/${regularCostId}`, newData);
  if (response && response.result == 1) {
    return response.data;
  }
  return "Error in Edit regularCost Service";
};

export default EditRegularCostService;
