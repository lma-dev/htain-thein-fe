import { fetchSingleData } from "../../utils/ApiMethodHelper";

export const fetchSingleAnnouncementApi = async (id) => {
  return await fetchSingleData(`/announcements/${id}`);
};
