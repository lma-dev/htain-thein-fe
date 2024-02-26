import { editData } from "../../libs/ApiMethodHelper";

export const editUserApi = async (userId, newData) => {
  return await editData(`/users/${userId}`, newData);
};
