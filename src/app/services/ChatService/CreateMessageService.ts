import { createMessageApi } from "../../api/chat/sendMessageDataApi";
import { MessageSchemaType } from "../../types/ChatRoom/Zod/MessageSchemaType";

export const createMessagesService = async (newData:MessageSchemaType) => {
  return await createMessageApi(newData);
};
