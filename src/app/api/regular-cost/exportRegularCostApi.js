import { exportData } from "../../libs/ApiMethodHelper";

export const exportRegularCostApi = async (userId) => {
  return await exportData(`/user-report/${userId}`);
};
