import { deleteSingleData } from "../../libs/ApiMethodHelper";

export const deleteReportApi = async (reportId) => {
  return await deleteSingleData(`/reports/${reportId}`);
};
