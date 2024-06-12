import { createData } from "../../utils/ApiMethodHelper";

export const createMessageApi = async (senderId, newMessage) => {
  await createData(`/send-message/${senderId}`, {
    message: newMessage,
  });
};
