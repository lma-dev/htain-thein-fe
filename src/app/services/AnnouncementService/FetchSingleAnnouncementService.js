import { fetchSingleAnnouncementApi } from "../../api/announcement/fetchSingleAnnouncementApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchSingleAnnouncementService = (id) => {
  return useFetchQuery(["announcements", id], () =>
    fetchSingleAnnouncementApi(id)
  );
};
