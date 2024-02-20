import { fetchAllMessageDataApi } from "../../api/chat/fetchAllMessageDataApi";

export const fetchMessagesService = async (senderId, setLoading) => {
  return await fetchAllMessageDataApi(senderId, setLoading);
};
