import { acceptReportApi } from "../../api/report/acceptReportApi";
import { useUpdateQuery } from "../../hooks/useUpdateQuery";

const AcceptReportService = () => {
  return useUpdateQuery(["uncheck-reports"], acceptReportApi);
};

export default AcceptReportService;
