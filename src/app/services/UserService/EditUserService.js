import { editUserApi } from "../../api/user/editUserApi";

const EditUserService = async (userId, newData) => {
  return await editUserApi(userId, newData);
};

export default EditUserService;
