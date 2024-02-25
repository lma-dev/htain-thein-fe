import { createData } from "../../libs/ApiRequestHelper";

export const createReportApi = async (newData) => {
  return await createData("/reports", newData);
};
