import { fetchSingleData } from "../../libs/ApiMethodHelper";

export const fetchSingleAnnouncementApi = async (id) => {
  return await fetchSingleData(`/announcements/${id}`);
};
