import { fetchAllData } from "../../utils/ApiMethodHelper";

export const fetchAllMessagesDataApi = async (senderId) => {
  return await fetchAllData(`/message/${senderId}`);
};
