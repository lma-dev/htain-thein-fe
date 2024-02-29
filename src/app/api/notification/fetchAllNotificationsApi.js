// api.js
import { fetchAllData } from "../../libs/ApiMethodHelper";

export const fetchAllNotificationsApi = async () => {
  return await fetchAllData("/all-notis");
};
