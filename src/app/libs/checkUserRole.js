import { getCookie } from "cookies-next";
import { getSingleData } from "./ApiRequestHelper";

export const checkUserRoles = async () => {
  try {
    const userId = getCookie("userId");
    const response = await getSingleData(`/users/${userId}`);
    return response.data.role;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
};
