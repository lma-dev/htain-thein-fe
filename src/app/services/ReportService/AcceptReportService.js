import { acceptReportApi } from "../../api/report/acceptReportApi";

const acceptReportService = async (reportId) => {
  return await acceptReportApi(reportId);
};

export default acceptReportService;
