import { createRegularCostApi } from "../../api/regular-cost/createRegularCostApi";
import { RegularCostSchemaType } from "../../types/RegularCost/Zod/RegularCostSchemaType";

export const createRegularCostService = async (newData:RegularCostSchemaType) => {
  return await createRegularCostApi(newData);
};
