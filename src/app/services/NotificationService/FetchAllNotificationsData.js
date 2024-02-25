import { fetchAllNotificationsApi } from "../../api/notification/fetchAllNotificationsApi";

export const fetchAllNotificationsDataService = async (setData,setLoading) => {
 return await fetchAllNotificationsApi(setData,setLoading);
  };
  