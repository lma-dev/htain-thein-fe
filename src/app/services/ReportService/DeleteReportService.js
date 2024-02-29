import { deleteReportApi } from "../../api/report/deleteReportApi";
import { useDeleteQuery } from "../../hooks/useDeleteQuery";

export const DeleteReportService =  () => {
  return useDeleteQuery("reports", deleteReportApi);
};
