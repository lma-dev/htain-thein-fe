import ReportDropDown from "../../DropDown/ReportDropDown";
import SkeletonTableRow from "../../Skeleton/SkeletonTableRow";
import Pagination from "../../Pagination/Pagination";
import { useTranslations } from "next-intl";
import { ReportType } from "../../../types/Report/ReportType";
import { MetaDataType } from "../../../types/Share/MetaDataType";

interface ReportTableComponentProps {
  reports: ReportType[] | undefined;
  loading: boolean;
  handlePageChange: (newPage: number) => void;
  meta: MetaDataType;
}

const ReportTable = ({
  reports,
  loading,
  handlePageChange,
  meta,
}: ReportTableComponentProps) => {
  const t = useTranslations("Translation");

  return (
    <div className="flex flex-col w-full">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="border rounded-lg shadow dark:border-gray-700 dark:shadow-gray-900">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">
                  {t("id")}
                </th>
                <th className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">
                  {t("requester")}
                </th>
                <th className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">
                  {t("amount")}
                </th>
                <th className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">
                  {t("type")}
                </th>
                <th className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">
                  {t("status")}
                </th>
                <th className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">
                  {t("verifier")}
                </th>
                <th className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">
                  {t("requestDate")}
                </th>
                <th className="px-6 py-3 text-end text-xs font-bold text-gray-700 uppercase dark:text-gray-400">
                  {t("action")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 relative">
              {loading ? (
                <>
                  {[...Array(6)].map((_, index) => (
                    <SkeletonTableRow
                      key={index}
                      cellWidths={[
                        "16",
                        "24",
                        "20",
                        "32",
                        "28",
                        "28",
                        "28",
                        "8",
                      ]}
                    />
                  ))}
                </>
              ) : (
                reports?.map((item: ReportType, index: number) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-200">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-200">
                      {item.reporter?.name ?? ""}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 break-words">
                      {item.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                      <span
                        className={`mr-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          item.type === "INCOME"
                            ? "bg-green-100 text-green-800"
                            : item.type === "EXPENSE"
                            ? "bg-red-100 text-red-800"
                            : ""
                        }`}
                      >
                        {item.type ?? "-"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 break-words">
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                      {item.verifier?.name ?? ""}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                      {item.createdAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium align-middle">
                      <ReportDropDown reportId={item?.id} t={t} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {reports && reports?.length > 0 && (
        <Pagination meta={meta} handlePageChange={handlePageChange} />
      )}
    </div>
  );
};

export default ReportTable;
