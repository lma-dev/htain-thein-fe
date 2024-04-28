import { createData } from "../../utils/ApiMethodHelper";

export const createReportApi = async (newData) => {
  return await createData("/reports", newData);
};
