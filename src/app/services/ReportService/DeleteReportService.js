import { deleteReportApi } from "../../api/report/deleteReportApi";

export const deleteReportService = async (reportId) => {
  return await deleteReportApi(reportId);
};
