import { editData } from "../../libs/ApiRequestHelper";

export const editUserApi = async (userId, newData) => {
  return await editData(`/users/${userId}`, newData);
};
