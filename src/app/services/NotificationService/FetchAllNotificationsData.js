import { fetchAllNotificationsApi } from "../../api/notification/fetchAllNotificationsApi";

export const fetchAllNotificationsData = async (setData,setLoading) => {
 return await fetchAllNotificationsApi(setData,setLoading);
  };
  