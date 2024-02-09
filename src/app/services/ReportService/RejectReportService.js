import { editData, fetchSingleData } from "../../libs/ApiRequestHelper";

const RejectReportService = async (id) => {
  const response = await fetchSingleData(`/reports/${id}/reject`);
  if (response && response.result == 1) {
    return response.data;
  }
  return "Error in Rejected Report Service";
};

export default RejectReportService;
