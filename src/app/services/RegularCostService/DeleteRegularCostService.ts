import { deleteRegularCostApi } from "../../api/regular-cost/deleteRegularCostApi";
import { useDeleteQuery } from "../../hooks/useDeleteQuery";

export const DeleteRegularCostService = () => {
  return useDeleteQuery(["general-outcome"], deleteRegularCostApi);
};
