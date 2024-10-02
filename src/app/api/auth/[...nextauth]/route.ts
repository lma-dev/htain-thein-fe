import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from '../../../utils/axios'; // Import your configured axios instance

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
        
          // Send login request to the Laravel backend
          const response = await axios.post('/login', {
            email: credentials?.email,
            password: credentials?.password,
          });
          const user = response.data;
          
          if (user) {
            return user;
          } else {
            return null; // If login fails
          }
        } catch (error) {
            throw new Error('Login failed')
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days,
  },

  callbacks: {
    async jwt({ token, user }) {
    
      if (user) {
        token.user = user;
      }
      console.log('after ', token);
      return token;
    },
    async session({ session, token }) {
      session.user=token.user;
      return session; // Return the updated session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
});


export { handler as GET, handler as POST };