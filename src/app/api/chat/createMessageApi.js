// api.js
import { createData } from "../../libs/ApiRequestHelper";

export const createMessageApi = async (senderId, newMessage) => {
  await createData(`/message/${senderId}`, {
    message: newMessage,
  });
};
