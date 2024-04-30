import { setCookie, destroyCookie } from "nookies";
import axios from "../utils/axios";
import ToastsBox from "../components/Toasts/ToastsBox";

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await axios.post("/login", { email, password });
      if (!response.data) {
        ToastsBox.error({
          message: "Something went wrong!",
        });
        throw new Error("Login failed");
      }
      // Assuming your token is in response.data.token
      setCookie(null, "accessToken", response.data.access_token);
      setCookie(null, "userId", response.data.userId);
      setCookie(null, "userName", response.data.userName);
      setCookie(null, "userRole", response.data.userRole);
      ToastsBox.success({ message: "Successfully Login" });
      return response.data;
    } catch (error) {
      ToastsBox.error({ message: error.response.data.message });
      throw new Error("Login failed");
    }
  },

  logout: async () => {
    try {
      const response = await axios.post("/logout");

      if (!response.data) {
        throw new Error("Logout failed");
      }
      destroyCookie(null, "accessToken");
      destroyCookie(null, "userId");
      destroyCookie(null, "userName");

      if (!response.data) {
        throw new Error("Logout failed");
      }

      // Additional cleanup or handling on successful logout

      return 200;
    } catch (error) {
      console.error("Logout error:", error);
      throw new Error("Logout failed");
    }
  },
};

export default AuthService;
