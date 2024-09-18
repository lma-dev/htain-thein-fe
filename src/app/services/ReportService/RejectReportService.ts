import { rejectReportApi } from "../../api/report/rejectReportApi";
import { useUpdateQuery } from "../../hooks/useUpdateQuery";

const RejectReportService = () => {
  return useUpdateQuery("uncheck-reports", rejectReportApi);
};

export default RejectReportService;
