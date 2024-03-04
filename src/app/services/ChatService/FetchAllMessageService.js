import { fetchAllMessagesDataApi } from "../../api/chat/fetchAllMessagesDataApi";
import { useFetchQueryWithParams } from "../../hooks/useFetchQuery";

export const FetchAllMessageService = (senderId) => {
  return useFetchQueryWithParams("chats", fetchAllMessagesDataApi,senderId);
};
