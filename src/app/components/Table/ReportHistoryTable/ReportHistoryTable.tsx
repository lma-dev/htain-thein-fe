import React from "react";
import styles from "./module/ReportHistoryTable.module.css";
import { DataItem } from "../../../types/Report/ReportHistoryType";

type ReportHistoryTableProps = {
  data: DataItem;
};
const ReportHistoryTable = ({ data }: ReportHistoryTableProps) => {
  return (
    <div className={styles.container}>
      {Object.keys(data).map((key) => (
        <div className={styles.row} key={key}>
          <div className={styles.value}>
            {key === "amount" ? "$ " + data[key] : data[key]}
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 ml-4">
              {key}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportHistoryTable;
