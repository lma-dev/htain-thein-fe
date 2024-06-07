import { createData } from "../../utils/ApiMethodHelper";

export const createRegularCostApi = async (newData) => {
  return await createData("/general-outcomes", newData);
};
