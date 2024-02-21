import { createReportApi } from "../../api/report/createReportApi";

export const createReportService = async (newData) => {
  return await createReportApi(newData);
};
