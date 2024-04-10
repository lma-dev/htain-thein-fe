import { createData } from "../../libs/ApiMethodHelper";

export const createAnnouncementApi = async (newData) => {
  return await createData("/announcements", newData);
};
