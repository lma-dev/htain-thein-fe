
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import axios from '../utils/axios';

const AuthService = {
  login: async (email, password) => {
    try {
        const response = await axios.post('/login', { email, password });

      if (!response.data) {
        throw new Error('Login failed');
      }
      // Assuming your token is in response.data.token
      setCookie(null, 'accessToken', response.data.access_token);
      setCookie(null,'userId', response.data.userId);
      setCookie(null,'userName', response.data.userName);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Login failed');
    }
  },

  logout: async () => {
    try {
      const response = await axios.post('/logout');
      destroyCookie(null, 'accessToken');
      destroyCookie(null,'userId');
      destroyCookie(null,'userName');
      localStorage.removeItem('laravel_session');
      if (!response.data) {
        throw new Error('Logout failed');
      }

      // Additional cleanup or handling on successful logout

      return 200;
    } catch (error) {
      console.error('Logout error:', error);
      throw new Error('Logout failed');
    }
  },
};

export default AuthService;
