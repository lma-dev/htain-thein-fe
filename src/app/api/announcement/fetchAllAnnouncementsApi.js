import { fetchAllData } from "../../utils/ApiMethodHelper";

export const fetchAllAnnouncementsApi = async () => {
  return await fetchAllData("/announcements");
};
