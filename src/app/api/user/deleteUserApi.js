import { deleteSingleData } from "../../libs/ApiRequestHelper";

export const deleteUserApi = async (userId) => {
  return await deleteSingleData(`/users/${userId}`);
};
