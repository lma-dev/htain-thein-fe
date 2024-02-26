import { editData } from "../../libs/ApiMethodHelper";

export const acceptReportApi = async (reportIdData) => {
  return await editData(`/reports/${reportIdData}/accept`);
};
