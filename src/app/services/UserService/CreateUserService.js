import { createData } from "../../libs/ApiRequestHelper";

export const createUserService = async (senderId, newData) => {
  return await createData(senderId, newData);
};
