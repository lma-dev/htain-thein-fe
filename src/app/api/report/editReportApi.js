import { editData } from "../../libs/ApiMethodHelper";

export const editReportApi = async (reportId, newData) => {
  return await editData(`/reports/${reportId}`, newData);
};
