import { useEffect, useState } from "react";
import { firestore } from "../libs/firebaseConfig";

const useUserReadNotifications = (userId:number) => {
  const [readNotifications, setReadNotifications] = useState<any[]>([]);
  useEffect(() => {
    const unsubscribeReads = firestore
      .collection("notification_reads")
      .where("userIds", "array-contains", userId)
      .onSnapshot((snapshot) => {
        const readNotificationIds = snapshot.docs.map((doc) => doc.id);
        setReadNotifications(readNotificationIds);
      });

    return () => unsubscribeReads();
  }, [userId]);
  return readNotifications;
};

export default useUserReadNotifications;
