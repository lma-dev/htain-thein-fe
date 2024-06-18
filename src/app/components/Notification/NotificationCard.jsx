import { EmptyStatus } from "../../enums/EmptyStatus";
import IconType from "../../traits/IconType";
import NotificationType from "../../traits/NotificationType";

const NotificationCard = ({
  notification,
  t,
  lang,
  handleReadNotification,
}) => {
  const handleClick = () => {
    handleReadNotification(notification.firebaseNotificationId);
  };
  return (
    <div
      className="flex justify-between items-center p-5 rounded-lg border mt-5 bg-white hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center">
        {IconType(notification)}
        <div>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {notification.userData?.name || EmptyStatus.ANONYMOUS}{" "}
          </span>
          {t("article")}{" "}
          {lang === "en" ? (
            <>
              {NotificationType(notification, t)}
              <p className="text-sm font-normal text-gray-600 dark:text-gray-300 mt-1 break-words">
                {notification.reportData?.description ||
                  EmptyStatus.NO_DESCRIPTION}
              </p>
            </>
          ) : (
            <>
              {NotificationType(notification, t)} {t("requestedTo")}
              <p className="text-sm font-normal text-gray-600 dark:text-gray-300 mt-1 break-words">
                {notification.reportData?.description || notification.createdAt}
              </p>
            </>
          )}
        </div>
      </div>
      <div>
        <p className="text-sm font-normal text-gray-600 dark:text-gray-300">
          {notification.createdAt}
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
