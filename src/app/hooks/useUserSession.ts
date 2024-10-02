

import { useEffect, useState } from 'react';
import { useSession, getSession } from 'next-auth/react';

const useUserSession = () => {
  const { data: session, status } = useSession();  // useSession from next-auth
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // Fetch session explicitly if needed
    if (status === 'authenticated') {
      setUserRole(session?.user.userRole || null);
    }
  }, [session, status]);

  return { session, userRole};
};

export default useUserSession;
