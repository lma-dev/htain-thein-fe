import { editData } from "../../libs/ApiRequestHelper";

export const acceptReportApi = async (reportIdData) => {
  return await editData(`/reports/${reportIdData}/accept`);
};
