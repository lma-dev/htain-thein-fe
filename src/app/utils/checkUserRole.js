import { parseCookies, setCookie } from "nookies";
import { fetchSingleData } from "../utils/ApiMethodHelper";

export const checkUserRole = async () => {
  try {
    const userId = parseCookies().userId;
    const response = await fetchSingleData(`/users/${userId}`);
    setCookie(null, "userRole", response.data.role);
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
};
