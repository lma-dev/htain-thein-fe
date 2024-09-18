"use client";

import Link from "next/link";
import Layout from "../../../../components/layout";
import BreadCrumb from "../../../../components/BreadCrumb/Breadcrumb";
import { FormSubmitButton } from "../../../../components/Button/Button";
import { createUserService } from "../../../../services/UserService/CreateUserService";
import { ChangeEvent, FormEvent, useState } from "react";
import { useCreateQuery } from "../../../../hooks/useCreateQuery";
import { useTranslations } from "next-intl";
import { handleErrors } from "../../../../schema/errorHandler";
import { userSchema } from "../../../../schema/userSchema";
import { UserRole } from "../../../../enums/UserRole";
import { useLocale } from "../../../../context/LangContext";
import { UserSchemaType } from "../../../../types/User/Zod/UserSchemaType";
import { useRouter } from "next/navigation";

const CreateUser = () => {
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();
  const createUserMutation = useCreateQuery(createUserService, "users");

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    accountStatus: "ACTIVE",
    role: "Member",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validationData: UserSchemaType = userSchema.parse(formData);
      await createUserMutation.mutateAsync(validationData);
      router.push(`/${currentLocale}/users`);
    } catch (error) {
      handleErrors(error);
    }
  };

  return (
    <Layout>
      <BreadCrumb title="Create User" />
      <div className="flex justify-center align-middle mx-auto min-h-fit">
        <div className="w-1/2">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="mb-6">
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("fullName")}
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  type="text"
                  id="fullName"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("email")}
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("password")}
                </label>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  type="password"
                  id="password"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("role")}
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  id="role"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                >
                  <option value=""> {t("select")}</option>
                  <option value={UserRole.SUPER_ADMIN}>
                    {t("superAdmin")}
                  </option>
                  <option value={UserRole.ADMIN}>{t("admin")}</option>
                  <option value={UserRole.MEMBER}>{t("member")}</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="accountStatus"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("accountStatus")}
                </label>
                <select
                  name="accountStatus"
                  value={formData.accountStatus}
                  onChange={handleInputChange}
                  id="accountStatus"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                >
                  <option value=""> {t("select")}</option>
                  <option value="ACTIVE"> {t("active")}</option>
                  <option value="SUSPENDED"> {t("suspend")}</option>
                </select>
              </div>
              <div className="flex justify-between">
                <Link
                  href={`/${currentLocale}/users`}
                  className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5"
                >
                  {t("back")}
                </Link>
                <FormSubmitButton text={t("create")} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateUser;
