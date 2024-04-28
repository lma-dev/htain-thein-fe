import { createData } from "../../utils/ApiMethodHelper";

export const createAnnouncementApi = async (newData) => {
  return await createData("/announcements", newData);
};
