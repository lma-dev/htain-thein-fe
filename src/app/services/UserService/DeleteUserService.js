import { deleteUserApi } from "../../api/user/deleteUserApi";

export const deleteUserService = async (userId) => {
  return await deleteUserApi(userId);
};
