import { createAnnouncementApi } from "../../api/announcement/createAnnouncementApi";

export const createAnnouncementService = async (newData) => {
  return await createAnnouncementApi(newData);
};
