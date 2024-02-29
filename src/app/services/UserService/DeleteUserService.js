import { deleteUserApi } from "../../api/user/deleteUserApi";
import { useDeleteQuery } from "../../hooks/useDeleteQuery";

export const DeleteUserService = () => {
  return useDeleteQuery("users", deleteUserApi);
};
