import { createContactInfoApi } from "../../api/contactInfo/createContactInfoApi";
import { ContactSchemaType } from "../../types/Contact/Zod/ContactSchemaType";

export const CreateContactInfoService = async (newData:ContactSchemaType) => {
  return await createContactInfoApi(newData);
};
