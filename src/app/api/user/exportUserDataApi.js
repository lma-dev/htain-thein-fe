import { exportData } from "../../libs/ApiRequestHelper";

export const exportUserDataApi = async (userId) => {
  return await exportData(`/user-report/${userId}`);
};
