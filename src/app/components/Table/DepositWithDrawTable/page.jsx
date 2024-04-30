import DepositTableDropDown from "../../DropDown/DepositTableDropDown";
import { FinancialType } from "../../../enums/FinancialType";
import SkeletonTableRow from "../../Skeleton/SkeletonTableRow";

const DepositWithdrawTable = ({ uncheckReports, loading }) => {
  return (
    <div className="flex flex-col w-full ">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="border rounded-lg shadow dark:border-gray-700 dark:shadow-gray-900">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700  ">
            <thead className="bg-gray-50 dark:bg-gray-700 sticky top-0 z-[1]">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  Id
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  Requester
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  Confirm Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  Request Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-end text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 relative">
              {loading ? (
                <>
                  <SkeletonTableRow
                    cellWidths={["16", "24", "20", "32", "28", "28", "8"]}
                  />
                  <SkeletonTableRow
                    cellWidths={["16", "24", "20", "32", "28", "28", "8"]}
                  />
                  <SkeletonTableRow
                    cellWidths={["16", "24", "20", "32", "28", "28", "8"]}
                  />
                  <SkeletonTableRow
                    cellWidths={["16", "24", "20", "32", "28", "28", "8"]}
                  />
                  <SkeletonTableRow
                    cellWidths={["16", "24", "20", "32", "28", "28", "8"]}
                  />
                  <SkeletonTableRow
                    cellWidths={["16", "24", "20", "32", "28", "28", "8"]}
                  />
                </>
              ) : (
                uncheckReports?.data?.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-200 text-start">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-200 text-start">
                      {item.reporter?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 break-words text-start">
                      {item.amount}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 break-words text-start">
                      <span
                        className={`mr-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          item.type === FinancialType.INCOME
                            ? "bg-green-100 text-green-800"
                            : item.type === FinancialType.EXPENSE
                            ? "bg-red-100 text-red-800"
                            : ""
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 max-w-[200px] truncate text-start">
                      <span
                        className={`mr-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          item.confirmStatus === true
                            ? "bg-green-100 text-green-800"
                            : item.confirmStatus === false
                            ? "bg-red-100 text-red-800"
                            : ""
                        }`}
                      >
                        {item.confirmStatus ? "Confirmed" : "Pending"}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 text-start">
                      {item.createdAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium align-middle">
                      <DepositTableDropDown id={item.id} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DepositWithdrawTable;
