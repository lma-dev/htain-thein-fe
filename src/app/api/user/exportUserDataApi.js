import { exportData } from "../../utils/ApiMethodHelper";

export const exportUserDataApi = async (userId) => {
  return await exportData(`/user-report/${userId}`);
};
