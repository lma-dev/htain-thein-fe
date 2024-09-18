import { markAsReadNotificationApi } from "../../api/notification/markAsReadNotificationApi";

export const MarkAsNotificationService = async (notificationId:string) => {
  return await markAsReadNotificationApi(notificationId);
};
