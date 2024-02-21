import { acceptReportApi } from "../../api/report/acceptReportApi";

const AcceptReportService = async (reportId) => {
  return await acceptReportApi(reportId);
};

export default AcceptReportService;
