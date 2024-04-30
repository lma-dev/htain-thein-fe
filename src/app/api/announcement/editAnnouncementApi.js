import { editData } from "../../utils/ApiMethodHelper";

export const editAnnouncementApi = async (id, newData) => {
  return await editData(`/announcements/${id}`, newData);
};
