import { fetchAllData } from "../../libs/ApiMethodHelper";

export const fetchAllMessagesDataApi = async (senderId) => {
  return await fetchAllData(`/message/${senderId}`);
};
