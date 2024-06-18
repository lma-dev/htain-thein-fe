import { markAsReadNotificationApi } from "../../api/notification/markAsReadNotificationApi";

export const MarkAsNotificationService = async (notificationId) => {
  return await markAsReadNotificationApi(notificationId);
};
