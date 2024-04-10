import { deleteSingleData } from "../../libs/ApiMethodHelper";

export const deleteAnnouncementApi = async (id) => {
  return await deleteSingleData(`/announcements/${id}`);
};
