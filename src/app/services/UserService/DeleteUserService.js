import { deleteSingleData } from "../../libs/ApiRequestHelper";

export const deleteUserService = async (userId) => {
  await deleteSingleData(`/users/${userId}`);
  return;
};
