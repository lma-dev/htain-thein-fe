import { createData } from "../../libs/ApiMethodHelper";

export const createRegularCostApi = async (newData) => {
  return await createData("/general-outcome", newData);
};
