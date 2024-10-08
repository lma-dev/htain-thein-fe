import RegularCostDropDown from "../../DropDown/RegularCostDropDown";
import SkeletonTableRow from "../../Skeleton/SkeletonTableRow";
import { CurrencyType } from "../../../enums/CurrencyType";
import { useTranslations } from "next-intl";
import { MetaDataType } from "../../../types/Share/MetaDataType";
import { RegularCostsType } from "../../../types/RegularCost/RegularCostsType";
import Pagination from "../../Pagination/Pagination";

interface RegularCostsTableProps {
  regularCosts: {
    data: Array<RegularCostsType>;
    meta: MetaDataType;
  };
  loading: boolean;
  onPageChange: (page: number) => void;
}

const RegularCostTable = ({
  regularCosts,
  loading,
  onPageChange,
}: RegularCostsTableProps) => {
  const t = useTranslations("Translation");

  return (
    <div className="flex flex-col w-full">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="border rounded-lg shadow dark:border-gray-700 dark:shadow-gray-900">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700  ">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  {t("id")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  {t("requester")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  {t("amount")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  {t("description")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  {t("requestDate")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-end text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  {t("action")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 relative">
              {loading ? (
                <>
                  <SkeletonTableRow
                    cellWidths={["16", "24", "20", "32", "28", "28", "28", "8"]}
                  />
                  <SkeletonTableRow
                    cellWidths={["16", "24", "20", "32", "28", "28", "28", "8"]}
                  />
                  <SkeletonTableRow
                    cellWidths={["16", "24", "20", "32", "28", "28", "28", "8"]}
                  />
                  <SkeletonTableRow
                    cellWidths={["16", "24", "20", "32", "28", "28", "28", "8"]}
                  />
                  <SkeletonTableRow
                    cellWidths={["16", "24", "20", "32", "28", "28", "28", "8"]}
                  />
                  <SkeletonTableRow
                    cellWidths={["16", "24", "20", "32", "28", "28", "28", "8"]}
                  />
                </>
              ) : (
                regularCosts?.data?.map((item: any, index: number) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-200">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-200">
                      {item.reporter.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 break-words ">
                      {item.amount} {CurrencyType.MMK}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 break-words max-w-[200px] truncate text-start">
                      {item.description}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                      {item.createdAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium align-middle">
                      <RegularCostDropDown regularCostId={item?.id} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {regularCosts?.data?.length > 0 && (
        <Pagination meta={regularCosts?.meta} handlePageChange={onPageChange} />
      )}
    </div>
  );
};

export default RegularCostTable;
