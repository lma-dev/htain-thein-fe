import { fetchSingleData } from "../../libs/ApiRequestHelper";

export const rejectReportApi = async (reportIdData) => {
  return await fetchSingleData(`/reports/${reportIdData}/reject`);
};
