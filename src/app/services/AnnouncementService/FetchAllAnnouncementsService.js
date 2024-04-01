import { fetchAllAnnouncementsApi } from "../../api/announcement/fetchAllAnnouncementsApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchAllAnnouncementsService = () => {
  return useFetchQuery(["announcements"], fetchAllAnnouncementsApi);
};
