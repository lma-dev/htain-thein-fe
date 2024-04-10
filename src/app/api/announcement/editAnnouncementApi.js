import { editData } from "../../libs/ApiMethodHelper";

export const editAnnouncementApi = async (id, newData) => {
  return await editData(`/announcements/${id}`, newData);
};
