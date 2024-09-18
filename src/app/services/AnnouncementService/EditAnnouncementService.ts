import { editAnnouncementApi } from "../../api/announcement/editAnnouncementApi";
import { useUpdateQuery } from "../../hooks/useUpdateQuery";

export const EditAnnouncementService = () => {
  return useUpdateQuery("announcements", editAnnouncementApi);
};
