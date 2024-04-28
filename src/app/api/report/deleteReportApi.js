import { deleteSingleData } from "../../utils/ApiMethodHelper";

export const deleteReportApi = async (reportId) => {
  return await deleteSingleData(`/reports/${reportId}`);
};
