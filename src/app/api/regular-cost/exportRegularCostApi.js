import { exportData } from "../../utils/ApiMethodHelper";

export const exportRegularCostApi = async (userId) => {
  return await exportData(`/user-report/${userId}`);
};
