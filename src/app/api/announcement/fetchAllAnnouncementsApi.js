import { fetchAllData } from "../../libs/ApiMethodHelper";

export const fetchAllAnnouncementsApi = async () => {
  return await fetchAllData("/announcements");
};
