import { editData } from "../../libs/ApiRequestHelper";

export const editReportApi = async (reportId, newData) => {
  return await editData(`/reports/${reportId}`, newData);
};
