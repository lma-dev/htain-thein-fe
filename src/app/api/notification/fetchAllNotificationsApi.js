// api.js
import { fetchAllData } from "../../libs/ApiRequestHelper";

export const fetchAllNotificationsApi = async () => {
  return await fetchAllData("/all-notis");
};
