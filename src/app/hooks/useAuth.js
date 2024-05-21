// hooks/useAuth.js
import { useState } from "react";
import AuthService from "../services/AuthService";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password, setLoading) => {
    try {
      const userData = await AuthService.login(email, password);
      setUser(userData);
      setLoading(true);
      setError(null);
      return true;
    } catch (error) {
      setError(error.message || "Login failed");
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
