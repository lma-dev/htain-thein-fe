// api.js
import { fetchAllData } from "../../libs/ApiRequestHelper";

export const fetchAllNotificationsApi = async (setData, setLoading) => {
  try {
    const response = await fetchAllData("/all-notis");

    setData(response.data);
    setLoading(false);
  } catch (error) {
    setLoading(false);
  }
};
