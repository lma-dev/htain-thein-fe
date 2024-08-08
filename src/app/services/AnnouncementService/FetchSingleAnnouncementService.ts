import { fetchSingleAnnouncementApi } from "../../api/announcement/fetchSingleAnnouncementApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchSingleAnnouncementService = (id:number) => {
  return useFetchQuery(["announcements", id], () =>
    fetchSingleAnnouncementApi(id)
  );
};
