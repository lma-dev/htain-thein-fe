import { createData } from "../../libs/ApiMethodHelper";

export const createReportApi = async (newData) => {
  return await createData("/reports", newData);
};
