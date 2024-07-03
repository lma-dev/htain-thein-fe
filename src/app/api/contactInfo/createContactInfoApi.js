import { createData } from "../../utils/ApiMethodHelper";

export const createContactInfoApi = async (newData) => {
  return await createData("/contact-infos", newData);
};
