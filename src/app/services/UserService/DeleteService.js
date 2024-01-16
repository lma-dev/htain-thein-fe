import { deleteSingleData } from "../../libs/ApiRequestHelper";

export const deleteUserService = async (userId) => {
 return await deleteSingleData(`/users/${userId}`);
  };
  