import { editReportApi } from "../../api/report/editReportApi";

const EditReportService = async (reportId, newData) => {
  return await editReportApi(reportId, newData);
};

export default EditReportService;
