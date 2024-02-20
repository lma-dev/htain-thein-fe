import { editRegularCostApi } from "../../api/regular-cost/editRegularCostApi";

const EditRegularCostService = async (regularCostId, newData) => {
  return await editRegularCostApi(regularCostId, newData);
};

export default EditRegularCostService;
