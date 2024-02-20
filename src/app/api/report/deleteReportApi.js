import { deleteSingleData } from "../../libs/ApiRequestHelper";

export const deleteReportApi = async (reportId) => {
  return await deleteSingleData(`/reports/${reportId}`);
};
