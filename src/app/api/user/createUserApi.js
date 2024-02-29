import { createData } from "../../libs/ApiMethodHelper";

export const createUserApi = async (newData) => {
  return await createData("/users", newData);
};
