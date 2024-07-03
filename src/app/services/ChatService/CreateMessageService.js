import { createMessageApi } from "../../api/chat/sendMessageDataApi";

export const createMessagesService = async (newData) => {
  return await createMessageApi(newData);
};
