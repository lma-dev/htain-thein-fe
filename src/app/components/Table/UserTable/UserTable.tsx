import { MetaDataType } from "../../../types/Share/MetaDataType";
import { UserType } from "../../../types/User/UserType";
import UserDropDown from "../../DropDown/UserDropDown";
import Pagination from "../../Pagination/Pagination";
import SkeletonTableRow from "../../Skeleton/SkeletonTableRow";
import { useTranslations } from "next-intl";

interface UserTableProps {
  users: {
    data: Array<UserType>;
    meta: MetaDataType;
  };
  loading: boolean;
  onPageChange: (page: number) => void;
}

const UserTable = ({ users, loading, onPageChange }: UserTableProps) => {
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
                  {t("name")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  {t("email")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  {t("role")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  {t("status")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  {t("joinIn")}
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
                users?.data?.map((user: UserType, index: number) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-200">
                      {user.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-200">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                      {user.accountStatus}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                      {user.createdAt}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium align-middle">
                      <UserDropDown userId={user.id} t={t} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {users?.data?.length > 0 && (
        <Pagination meta={users?.meta} handlePageChange={onPageChange} />
      )}
    </div>
  );
};

export default UserTable;
