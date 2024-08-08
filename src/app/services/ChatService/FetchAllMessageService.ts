import { fetchAllMessagesDataApi } from "../../api/chat/fetchAllMessagesDataApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchAllMessageService = (senderId:number) => {
  return useFetchQuery(["chats", senderId], () =>
    fetchAllMessagesDataApi(senderId)
  );
};
