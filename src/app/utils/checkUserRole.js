import { parseCookies } from "nookies";
import { fetchSingleData } from "../libs/ApiMethodHelper";

export const checkUserRoles = async () => {
  try {
    const userId = parseCookies().userId;
    const response = await fetchSingleData(`/users/${userId}`);
    return response.data.role;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
};
