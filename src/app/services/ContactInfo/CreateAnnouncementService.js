import { createContactInfoApi } from "../../api/contactInfo/createContactInfoApi";

export const CreateContactInfoService = async (newData) => {
  return await createContactInfoApi(newData);
};
