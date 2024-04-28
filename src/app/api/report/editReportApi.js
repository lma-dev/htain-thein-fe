import { editData } from "../../utils/ApiMethodHelper";

export const editReportApi = async (reportId, newData) => {
  return await editData(`/reports/${reportId}`, newData);
};
