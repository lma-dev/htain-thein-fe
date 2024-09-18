import { editRegularCostApi } from "../../api/regular-cost/editRegularCostApi";
import { useUpdateQuery } from "../../hooks/useUpdateQuery";

export const EditRegularCostService = () => {
  return useUpdateQuery("general-outcome", editRegularCostApi);
};

