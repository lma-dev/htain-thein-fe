"use client";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import UserTable from "../../components/Table/UserTable/page";
import Layout from "../../components/layout";
import { FetchUsersService } from "../../services/UserService/FetchUsersService";
import Link from "next/link";
import UserFilterInputField from "../../components/filter/UserFilterInputField";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { UserType } from "../../enums/UserType";

const UsersPage = () => {
  const [userRole, setUserRole] = useState();
  const [generalSearch, setGeneralSearch] = useState("");
  const [role, setRole] = useState("");
  const [accountStatus, setAccountStatus] = useState("");
  const { data: users, isLoading: loading } = FetchUsersService(
    generalSearch,
    role,
    accountStatus
  );

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
                href="/users/create"
                className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-white bg-gray-900 font-medium transition hover:scale-105 border"
              >
                Create User
              </Link>
            </div>
          )}
        </div>
        <UserTable users={users} loading={loading} />
      </div>
    </Layout>
  );
};

export default UsersPage;
