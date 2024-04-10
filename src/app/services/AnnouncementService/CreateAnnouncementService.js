import { createAnnouncementApi } from "../../api/announcement/createAnnouncementApi";

export const createAnnouncementService = async (newData) => {
  console.log("sdsdn" + newData);
  return await createAnnouncementApi(newData);
};
