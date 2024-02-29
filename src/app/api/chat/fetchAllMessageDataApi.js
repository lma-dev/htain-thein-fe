// api.js
import { fetchAllData, fetchSingleData } from "../../libs/ApiMethodHelper";
export const fetchAllMessageDataApi = async (senderId, setLoading) => {
  try {
    const [fetchMessages, fetchUserInfo] = await Promise.all([
      fetchAllData(`/message/${senderId}`),
      fetchSingleData(`/users/${senderId}`),
    ]);
    setLoading(false);
    return [fetchMessages, fetchUserInfo];
  } catch (error) {
    setLoading(false);
  }
};
