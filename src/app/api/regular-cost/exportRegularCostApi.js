import { exportData } from "../../libs/ApiRequestHelper";

export const exportRegularCostApi = async (userId) => {
  return await exportData(`/user-report/${userId}`);
};
