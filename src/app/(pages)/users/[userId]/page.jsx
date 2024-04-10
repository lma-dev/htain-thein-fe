"use client";
import Layout from "../../../components/layout";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { useParams, useRouter } from "next/navigation";
import { FetchSingleUserService } from "../../../services/UserService/FetchSingleUserService";
import Link from "next/link";
import Spinner from "../../../components/Spinner/Spinner";

const DetailUser = () => {
  const router = useRouter();
  const params = useParams();
  const { data: userData, isLoading } = FetchSingleUserService(params.userId);

  return (
    <Layout>
      <BreadCrumb title="User Profile" />
      <div className="flex justify-center align-middle mx-auto min-h-fit">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="w-1/2">
            <div className="mb-5">
              <label
                htmlFor="Name"
                className="block text-xs font-medium text-gray-500"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3 bg-gray-200"
                name="name"
                value={userData.data.name}
                readOnly
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="UserEmail"
                className="block text-xs font-medium text-gray-500"
              >
                Email
              </label>

              <input
                type="email"
                id="UserEmail"
                placeholder="john@rhcp.com"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3 bg-gray-200"
                name="email"
                value={userData.data.email}
                readOnly
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="Role"
                className="block text-xs font-medium text-gray-500"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                placeholder="role"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3 bg-gray-200"
                name="role"
                value={userData.data.role}
                readOnly
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="AccountStatus"
                className="block text-xs font-medium text-gray-500"
              >
                Account Status
              </label>
              <input
                type="text"
                id="accountStatus"
                placeholder="accountStatus"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3 bg-gray-200"
                name="accountStatus"
                value={userData.data.accountStatus}
                readOnly
              />
            </div>
            <Link
              href={"/users"}
              className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-white bg-gray-900 font-medium transition hover:scale-105 border"
            >
              Back
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default DetailUser;
