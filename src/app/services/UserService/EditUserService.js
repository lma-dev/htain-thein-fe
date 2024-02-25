import { editUserApi } from "../../api/user/editUserApi";

const editUserService = async (userId, newData) => {
  return await editUserApi(userId, newData);
};

export default editUserService;
