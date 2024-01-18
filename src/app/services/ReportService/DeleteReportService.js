import { deleteSingleData } from "../../libs/ApiRequestHelper";

export const deleteReportService = async (reportId) => {
 return await deleteSingleData(`/reports/${reportId}`);
  };
  