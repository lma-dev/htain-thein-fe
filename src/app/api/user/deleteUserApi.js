import { deleteSingleData } from "../../libs/ApiMethodHelper";

export const deleteUserApi = async (userId) => {
  return await deleteSingleData(`/users/${userId}`);
};
