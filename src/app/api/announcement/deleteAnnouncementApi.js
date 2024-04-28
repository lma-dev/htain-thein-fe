import { deleteSingleData } from "../../utils/ApiMethodHelper";

export const deleteAnnouncementApi = async (id) => {
  return await deleteSingleData(`/announcements/${id}`);
};
