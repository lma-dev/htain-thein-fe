import { BellPlus } from "lucide-react";
import { BellMinus } from "lucide-react";
import { FinancialType } from "../../enums/FinancialType";
import { EmptyStatus } from "../../enums/EmptyStatus";

const NotificationCard = ({ notification, t, lang }) => {
  const IconType = () => {
    if (notification.reportData?.type === FinancialType.INCOME) {
      return <BellPlus size={24} className="mr-3 text-green-500" />;
    } else {
      return <BellMinus size={24} className="mr-3 text-red-500" />;
    }
  };

  const notificationType = () => {
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
  };

  return (
    <div className="flex justify-between items-center p-5 rounded-lg border mt-5 bg-white hover:shadow-xl transition duration-300 ease-in-out">
      <div className="flex items-center">
        {IconType()}
        <div>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {notification.reportData?.reporter?.name || EmptyStatus.ANONYMOUS}{" "}
          </span>
          {t("article")}{" "}
          {lang === "en" ? (
            <>
              {t("requestedTo")} {notificationType()}
              <p className="text-sm font-normal text-gray-600 dark:text-gray-300 mt-1 break-words">
                {notification.reportData?.description ||
                  EmptyStatus.NO_DESCRIPTION}
              </p>
            </>
          ) : (
            <>
              {notificationType()} {t("requestedTo")}
              <p className="text-sm font-normal text-gray-600 dark:text-gray-300 mt-1 break-words">
                {notification.reportData?.description ||
                  EmptyStatus.NO_DESCRIPTION}
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
