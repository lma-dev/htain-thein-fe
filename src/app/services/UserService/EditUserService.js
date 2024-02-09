import { editData } from "../../libs/ApiRequestHelper";

const EditUserService = async (userId, newData) => {
    const response= await editData(`/users/${userId}`, newData);
    if (response && response.result == 1) {
      return response.data;
    }
   return 'Error in Edit User Service';
  };

  export default EditUserService;