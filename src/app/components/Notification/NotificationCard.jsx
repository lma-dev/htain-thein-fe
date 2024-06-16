import { BellPlus, BellMinus, Info, ShieldAlert } from "lucide-react";
import { FinancialType } from "../../enums/FinancialType";
import { EmptyStatus } from "../../enums/EmptyStatus";

const NotificationCard = ({ notification, t, lang }) => {
  const IconType = () => {
    if (notification.reportData) {
      if (notification.reportData.type === FinancialType.INCOME) {
        return <BellPlus size={24} className="mr-3 text-green-500" />;
      }
      if (notification.reportData.type === FinancialType.EXPENSE) {
        return <BellMinus size={24} className="mr-3 text-red-500" />;
      }
    } else if (notification.announcementData) {
      if (notification.announcementData.priority === "1") {
        return <Info size={24} className="mr-3 text-blue-500" />;
      }
      if (notification.announcementData.priority === "2") {
        return <Info size={24} className="mr-3 text-yellow-500" />;
      }
      if (notification.announcementData.priority === "3") {
        return <Info size={24} className="mr-3 text-red-500" />;
      }
    } else {
      return <ShieldAlert size={24} className="mr-3 text-blue-500" />;
    }
  };

  const notificationType = () => {
    if (notification.reportData) {
      if (notification.reportData?.type === FinancialType.INCOME) {
        return (
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            {t("deposit")}
          </span>
        );
      }
      return (
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          {t("withdraw")}
        </span>
      );
    } else if (notification.announcementData) {
      return (
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          {t("announcement")}
        </span>
      );
    }
  };

  return (
    <div className="flex justify-between items-center p-5 rounded-lg border mt-5 bg-white hover:shadow-xl transition duration-300 ease-in-out">
      <div className="flex items-center">
        {IconType()}
        <div>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {notification.userData?.name || EmptyStatus.ANONYMOUS}{" "}
          </span>
          {t("article")}{" "}
          {lang === "en" ? (
            <>
              {notificationType()}
              <p className="text-sm font-normal text-gray-600 dark:text-gray-300 mt-1 break-words">
                {notification.reportData?.description ||
                  EmptyStatus.NO_DESCRIPTION}
              </p>
            </>
          ) : (
            <>
              {notificationType()} {t("requestedTo")}
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
