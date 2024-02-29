import { exportData } from "../../libs/ApiMethodHelper";

export const exportUserDataApi = async (userId) => {
  return await exportData(`/user-report/${userId}`);
};
