import { editUserApi } from "../../api/user/editUserApi";
import { useUpdateQuery } from "../../hooks/useUpdateQuery";

export const EditUserService = () => {
  return useUpdateQuery("users", editUserApi);
};
