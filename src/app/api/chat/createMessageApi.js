// api.js
import { createData } from "../../libs/ApiMethodHelper";

export const createMessageApi = async (senderId, newMessage) => {
  await createData(`/message/${senderId}`, {
    message: newMessage,
  });
};
