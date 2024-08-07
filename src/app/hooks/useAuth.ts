// hooks/useAuth.js
import { useState } from "react";
import AuthService from "../services/AuthService";

// Define a type for the error state
type ErrorType = string | null;

const useAuth = () => {
  const [user, setUser] = useState<any>(null);  // Replace `any` with the actual user type if available
  const [error, setError] = useState<ErrorType>(null);

  const login = async (email: string, password: string, setLoading: (loading: boolean) => void) => {
    try {
      const userData = await AuthService.login(email, password);
      setUser(userData);
      setLoading(false);  // Set loading to false after login is complete
      setError(null);
      return true;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || "Login failed");
      } else {
        setError("Login failed due to an unknown error");
      }
      setUser(null);
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return { user, error, login, logout };
};

export default useAuth;
