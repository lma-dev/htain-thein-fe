import { createAnnouncementApi } from "../../api/announcement/createAnnouncementApi";
import { AnnouncementSchemaType } from "../../types/Announcement/Zod/AnnouncementSchemaType";

export const CreateAnnouncementService = async (newData:AnnouncementSchemaType) => {
  return await createAnnouncementApi(newData);
};
