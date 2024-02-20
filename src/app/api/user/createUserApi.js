import { createData } from "../../libs/ApiRequestHelper";

export const createUserApi = async (newData) => {
  return await createData("/users", newData);
};
