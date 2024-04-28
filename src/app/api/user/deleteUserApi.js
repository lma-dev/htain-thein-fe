import { deleteSingleData } from "../../utils/ApiMethodHelper";

export const deleteUserApi = async (userId) => {
  return await deleteSingleData(`/users/${userId}`);
};
