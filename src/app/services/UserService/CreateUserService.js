import { createUserApi } from "../../api/user/createUserApi";

export const createUserService = async (newData) => {
  return await createUserApi(newData);
};
