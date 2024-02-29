import { editReportApi } from "../../api/report/editReportApi";

const editReportService = async (reportId, newData) => {
  return await editReportApi(reportId, newData);
};

export default editReportService;
