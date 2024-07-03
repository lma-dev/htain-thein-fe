import { useEffect, useState } from "react";
import { firestore } from "../libs/firebaseConfig";

const useUserReadNotifications = (userId) => {
  const [readNotifications, setReadNotifications] = useState([]);
  useEffect(() => {
    const unsubscribeReads = firestore
      .collection("notification_reads")
      .where("userIds", "array-contains", parseInt(userId))
      .onSnapshot((snapshot) => {
        const readNotificationIds = snapshot.docs.map((doc) => doc.id);
        setReadNotifications(readNotificationIds);
      });

    return () => unsubscribeReads();
  }, [userId]);
  return readNotifications;
};

export default useUserReadNotifications;
