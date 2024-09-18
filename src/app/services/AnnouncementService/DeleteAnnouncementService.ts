import { deleteAnnouncementApi } from "../../api/announcement/deleteAnnouncementApi";
import { useDeleteQuery } from "../../hooks/useDeleteQuery";

export const DeleteAnnouncementService = () => {
  return useDeleteQuery(["announcements"], deleteAnnouncementApi);
};
