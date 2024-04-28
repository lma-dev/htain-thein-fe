import { editData } from "../../utils/ApiMethodHelper";

export const acceptReportApi = async (reportIdData) => {
  return await editData(`/reports/${reportIdData}/accept`);
};
