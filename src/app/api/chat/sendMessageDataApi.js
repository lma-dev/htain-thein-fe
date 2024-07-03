import { createData } from "../../utils/ApiMethodHelper";

export const createMessageApi = async (newMessage) => {
  await createData("/send-message", {
    message: newMessage,
  });
};
