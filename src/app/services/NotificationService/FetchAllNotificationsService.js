import { fetchAllNotificationsApi } from "../../api/notification/fetchAllNotificationsApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchAllNotificationsDataService = () => {
 return useFetchQuery("notifications", fetchAllNotificationsApi);
  };
  