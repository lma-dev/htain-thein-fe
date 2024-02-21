import { rejectReportApi } from "../../api/report/rejectReportApi";

const RejectReportService = async (reportId) => {
  return await rejectReportApi(reportId);
};

export default RejectReportService;
