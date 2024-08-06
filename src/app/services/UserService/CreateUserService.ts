import { createUserApi } from "../../api/user/createUserApi";
import { UserSchemaType } from "../../types/User/Zod/UserSchemaType";

export const createUserService = async (newData:UserSchemaType) => {
  return await createUserApi(newData);
};
