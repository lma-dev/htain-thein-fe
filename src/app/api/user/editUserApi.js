import { editData } from "../../utils/ApiMethodHelper";

export const editUserApi = async (userId, newData) => {
  return await editData(`/users/${userId}`, newData);
};
