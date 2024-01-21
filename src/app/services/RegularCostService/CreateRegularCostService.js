import { createData } from "../../libs/ApiRequestHelper";

export const createRegularCostService = async (newData) => {
        return await createData('/general-outcome',newData);
};
  