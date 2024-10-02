import { parseCookies, setCookie } from "nookies";
import { fetchSingleData } from "./ApiMethodHelper";
import useUserSession from "../hooks/useUserSession";
import { getSession } from "next-auth/react";

export const checkUserRole = async () => {
  try {
    const session = await getSession();
    const userId = session.user.userId;
    const response = await fetchSingleData(`/users/${userId}`);
    setCookie(null, "userRole", response.data.role);
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
};
