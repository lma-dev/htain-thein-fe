import { fetchSingleData } from "../../utils/ApiMethodHelper";

export const rejectReportApi = async (reportIdData) => {
  return await fetchSingleData(`/reports/${reportIdData}/reject`);
};
