import { fetchSingleData } from "../../libs/ApiMethodHelper";

export const rejectReportApi = async (reportIdData) => {
  return await fetchSingleData(`/reports/${reportIdData}/reject`);
};
