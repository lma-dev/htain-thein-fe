import { createAnnouncementApi } from "../../api/announcement/createAnnouncementApi";

export const CreateAnnouncementService = async (newData) => {
  return await createAnnouncementApi(newData);
};
