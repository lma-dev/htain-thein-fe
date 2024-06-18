import React from "react";
import { FinancialType } from "../enums/FinancialType"; // Replace with your actual import

const NotificationType = (notification, t) => {
  if (notification.reportData) {
    if (notification.reportData.type === FinancialType.INCOME) {
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
  return null; // Handle the case where there is no reportData or announcementData
};

export default NotificationType;
