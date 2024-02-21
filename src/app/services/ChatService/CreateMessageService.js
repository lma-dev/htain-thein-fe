import { createMessageApi } from "../../api/chat/createMessageApi";

export const createMessagesService = async (senderId, newData) => {
  return await createMessageApi(senderId, newData);
};
