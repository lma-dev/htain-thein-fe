// api.js
import { createData } from "../../utils/ApiMethodHelper";

export const createMessageApi = async (senderId, newMessage) => {
  await createData(`/message/${senderId}`, {
    message: newMessage,
  });
};
