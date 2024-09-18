"use client";

import BreadCrumb from "../../../components/BreadCrumb/Breadcrumb";
import Layout from "../../../components/layout";
import NotificationCard from "../../../components/Notification/NotificationCard";
import { FetchAllNotificationsDataService } from "../../../services/NotificationService/FetchAllNotificationsService";
import NotificationSkeletonAnimation from "../../../components/Skeleton/NotificationSkeletonAnimation";
import { useTranslations } from "next-intl";
import { MarkAsNotificationService } from "../../../services/NotificationService/MarkAsNotificationService";
import { NotificationDataType } from "../../../types/Notification/NotificatioDataType";

const NotificationPage = () => {
  const { data: notifications, isLoading: loading } =
    FetchAllNotificationsDataService();
  const t = useTranslations("Translation");

  const handleReadNotification = (notificationId: string) => {
    MarkAsNotificationService(notificationId);
  };

  return (
    <Layout>
      <BreadCrumb title="Notifications" />
      {loading ? (
        <div>
          <NotificationSkeletonAnimation />
          <NotificationSkeletonAnimation />
          <NotificationSkeletonAnimation />
        </div>
      ) : (
        <div>
          {notifications?.data.length > 0 &&
            notifications.data.map((notification: NotificationDataType, index: number) => (
              <NotificationCard
                key={index}
                notification={notification}
                handleReadNotification={handleReadNotification}
              />
            ))}
        </div>
      )}
    </Layout>
  );
};

export default NotificationPage;
