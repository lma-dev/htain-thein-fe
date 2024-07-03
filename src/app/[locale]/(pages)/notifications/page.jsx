"use client";

import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Layout from "../../../components/layout";
import NotificationCard from "../../../components/Notification/NotificationCard";
import { FetchAllNotificationsDataService } from "../../../services/NotificationService/FetchAllNotificationsService";
import NotificationSkeletonAnimation from "../../../components/Skeleton/NotificationSkeletonAnimation";
import { useTranslations } from "next-intl";
import { MarkAsNotificationService } from "../../../services/NotificationService/MarkAsNotificationService";
const NotificationPage = ({ params }) => {
  const { data: notifications, isLoading: loading } =
    FetchAllNotificationsDataService();
  const t = useTranslations("Translation");

  const handleReadNotification = (notificationId) => {
    MarkAsNotificationService(notificationId);
  };

  return (
    <Layout lang={params.locale}>
      <BreadCrumb lang={params.locale} title="Notifications" />
      {loading ? (
        <div>
          <NotificationSkeletonAnimation />
          <NotificationSkeletonAnimation />
          <NotificationSkeletonAnimation />
        </div>
      ) : (
        <div>
          {notifications?.data.length > 0 &&
            notifications.data.map((notification, index) => (
              <NotificationCard
                key={index}
                notification={notification}
                t={t}
                lang={params.locale}
                handleReadNotification={handleReadNotification}
              />
            ))}
        </div>
      )}
    </Layout>
  );
};

export default NotificationPage;
