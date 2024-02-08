// hooks/useAuth.js
import { useState } from "react";
import AuthService from "../services/AuthService";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const login = async (email, password, setLoading) => {
    try {
      const userData = await AuthService.login(email, password);
      setUser(userData);
      setLoading(true);
      setError(null);
      router.push("/dashboard");
      console.log("Login successful:", userData);
    } catch (error) {
      setError(error.message || "Login failed");
      setUser(null);
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
