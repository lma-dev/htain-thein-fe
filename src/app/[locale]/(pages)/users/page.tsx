"use client";
import BreadCrumb from "../../../components/BreadCrumb/Breadcrumb";
import UserTable from "../../../components/Table/UserTable/page";
import Layout from "../../../components/layout";
import { FetchUsersService } from "../../../services/UserService/FetchUsersService";
import UserFilterInputField from "../../../components/filter/UserFilterInputField";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { UserType } from "../../../enums/UserType";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "../../../context/LangContext";

const UsersPage = () => {
  const [userRole, setUserRole] = useState<string>();
  const [generalSearch, setGeneralSearch] = useState("");
  const [role, setRole] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [accountStatus, setAccountStatus] = useState<string>("");
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();

  const { data: users, isLoading: loading } = FetchUsersService(
    generalSearch,
    role,
    accountStatus,
    page
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    setUserRole(parseCookies().userRole);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col">
        <BreadCrumb title="Users" />
        <div className="flex justify-between items-center align-middle">
          <div>
            <UserFilterInputField
              role={role}
              accountStatus={accountStatus}
              onGeneralSearchChange={setGeneralSearch}
              onRoleChange={setRole}
              onAccountStatusChange={setAccountStatus}
            />
          </div>

          {(userRole === UserType.ADMIN ||
            userRole === UserType.SUPER_ADMIN) && (
              <div>
                <Link
                  href={`/${currentLocale}/users/create`}
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
        />
      </div>
    </Layout>
  );
};

export default UsersPage;
