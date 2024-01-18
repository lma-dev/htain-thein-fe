import { createData } from "../../libs/ApiRequestHelper";

export const createUserService = async (newData) => {
        return await createData('/users',newData);
};
  