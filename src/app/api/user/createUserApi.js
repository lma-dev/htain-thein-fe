import { createData } from "../../utils/ApiMethodHelper";

export const createUserApi = async (newData) => {
  return await createData("/users", newData);
};
