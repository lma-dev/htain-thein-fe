// api.js
import { fetchAllData } from "../../utils/ApiMethodHelper";

export const fetchAllNotificationsApi = async () => {
  return await fetchAllData("/all-notis");
};
