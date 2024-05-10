"use client";

import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Layout from "../../../components/layout";
import NotificationCard from "../../../components/Notification/NotificationCard";
import { FetchAllNotificationsDataService } from "../../../services/NotificationService/FetchAllNotificationsService";
import NotificationSkeletonAnimation from "../../../components/Skeleton/NotificationSkeletonAnimation";

const NotificationPage = ({ params }) => {
  const { data: notifications, isLoading: loading } =
    FetchAllNotificationsDataService();

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
                lang={params.locale}
              />
            ))}
        </div>
      )}
    </Layout>
  );
};

export default NotificationPage;
