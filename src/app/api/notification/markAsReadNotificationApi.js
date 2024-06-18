import { createData } from "../../utils/ApiMethodHelper";

export const markAsReadNotificationApi = async (firebaseNotificationId) => {
  return await createData("/notifications/read/", {
    notificationId: firebaseNotificationId,
  });
};
