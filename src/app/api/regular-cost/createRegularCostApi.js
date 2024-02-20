import { createData } from "../../libs/ApiRequestHelper";

export const createRegularCostApi = async (newData) => {
  return await createData("/general-outcome", newData);
};
