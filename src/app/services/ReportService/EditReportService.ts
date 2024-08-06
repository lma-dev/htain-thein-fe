import { editReportApi } from "../../api/report/editReportApi";
import { useUpdateQuery } from "../../hooks/useUpdateQuery";

export const EditReportService = () => {
  return useUpdateQuery("reports", editReportApi);
};

