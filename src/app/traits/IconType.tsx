// IconType.js
import React from "react";
import { BellPlus, BellMinus, Info, ShieldAlert } from "lucide-react";
import { FinancialType } from "../enums/FinancialType";

const IconType = (notification:any) => {
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
  return null; // Handle the case where none of the conditions match
};

export default IconType;
