// hooks/useAuth.js
import { useState } from "react";
import AuthService from "../services/AuthService";
import {signIn, signOut,getSession} from 'next-auth/react';
// Define a type for the error state
type ErrorType = string | null;

const useAuth = () => {
  const [user, setUser] = useState<any>(null);  // Replace `any` with the actual user type if available
  const [error, setError] = useState<ErrorType>(null);


  const login = async (email: string, password: string, setLoading: (loading: boolean) => void) => {
    setLoading(true);
    try {
        const res = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });
        // Check if there's an error in the response
        if (res?.error || res?.status === 401) {
            setError(res.error);
            setUser(null); 
        } else { 
            const sessionResponse = await getSession(); // Fetch the session after login
            setUser(sessionResponse); // Update user state with the session
            setError(null);
            return res;
        }
    } catch (err) {
        console.error("Error during login:", err);
        setError("Login failed"); 
        setUser(null);
    } finally {
        setLoading(false); // Always execute this to reset loading state
    }
};
  const logout = async () => {
    await signOut({ callbackUrl: '/' });
    setUser(null);
  };

  return { user, error, login, logout };
};

export default useAuth;