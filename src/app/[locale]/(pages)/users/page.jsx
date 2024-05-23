"use client";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import UserTable from "../../../components/Table/UserTable/page";
import Layout from "../../../components/layout";
import { FetchUsersService } from "../../../services/UserService/FetchUsersService";
import UserFilterInputField from "../../../components/filter/UserFilterInputField";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { UserType } from "../../../enums/UserType";
import { useTranslations } from "next-intl";
import Link from "next/link";

const UsersPage = ({ params }) => {
  const [userRole, setUserRole] = useState();
  const [generalSearch, setGeneralSearch] = useState("");
  const [role, setRole] = useState("");
  const [page, setPage] = useState(1);
  const [accountStatus, setAccountStatus] = useState("");
  const t = useTranslations("Translation");

  const { data: users, isLoading: loading } = FetchUsersService(
    generalSearch,
    role,
    accountStatus,
    page
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    setUserRole(parseCookies().userRole);
  }, []);

  return (
    <Layout lang={params.locale}>
      <div className="flex flex-col">
        <BreadCrumb lang={params.locale} title="Users" />
        <div className="flex justify-between items-center align-middle">
          <div>
            <UserFilterInputField
              role={role}
              accountStatus={accountStatus}
              generalSearch={generalSearch}
              onGeneralSearchChange={setGeneralSearch}
              onRoleChange={setRole}
              onAccountStatusChange={setAccountStatus}
            />
          </div>

          {(userRole === UserType.ADMIN ||
            userRole === UserType.SUPER_ADMIN) && (
            <div>
              <Link
                href={`/${params.locale}/users/create`}
                className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-white bg-gray-900 font-medium transition hover:scale-105 border"
              >
                {t("create")} {t("user")}
              </Link>
            </div>
          )}
        </div>
        <UserTable
          users={users}
          loading={loading}
          onPageChange={handlePageChange}
          t={t}
          lang={params.locale}
        />
      </div>
    </Layout>
  );
};

export default UsersPage;