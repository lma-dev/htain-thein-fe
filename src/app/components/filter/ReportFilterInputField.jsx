import ReportFilterDropDown from "../DropDown/ReportFilterDropDown";
import { Search } from "lucide-react";

const ReportFilterInputField = ({
  amount,
  confirmStatus,
  createdAt,
  type,
  onAmountChange,
  onConfirmStatusChange,
  onTypeChange,
  onCreatedAtChange,
  onGeneralSearchChange,
  t,
}) => {
  return (
    <>
      <div className="relative flex">
        <div className="w-full space-y-1 dark:text-gray-100">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <Search size={16} className="text-gray-500" />
              </button>
            </span>
            <input
              type="search"
              name="generalSearch"
              onChange={(e) => onGeneralSearchChange(e.target.value)}
              placeholder="Search For..."
              className="w-32 py-2 pl-10 text-sm rounded-md border border-gray-300 focus:outline-none sm:w-auto focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
            />
          </div>
        </div>
        <ReportFilterDropDown
          amount={amount}
          confirmStatus={confirmStatus}
          type={type}
          createdAt={createdAt}
          onAmountChange={onAmountChange}
          onConfirmStatusChange={onConfirmStatusChange}
          onTypeChange={onTypeChange}
          onCreatedAtChange={onCreatedAtChange}
          t={t}
        />
      </div>
    </>
  );
};

export default ReportFilterInputField;
