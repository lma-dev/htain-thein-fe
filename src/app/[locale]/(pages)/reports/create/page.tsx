"use client";

import Link from "next/link";
import Layout from "../../../../components/layout";
import BreadCrumb from "../../../../components/BreadCrumb/Breadcrumb";
import { FormSubmitButton } from "../../../../components/Button/Button";
import { createReportService } from "../../../../services/ReportService/CreateReportService";
import { ChangeEvent, FormEvent, useState } from "react";
import { parseCookies } from "nookies";
import { useCreateQuery } from "../../../../hooks/useCreateQuery";
import { useRouter } from "next/navigation";
import { FetchSingleUserService } from "../../../../services/UserService/FetchSingleUserService";
import { useTranslations } from "next-intl";
import { reportSchema } from "../../../../schema/reportSchema";
import { handleErrors } from "../../../../schema/errorHandler";
import { useLocale } from "../../../../context/LangContext";

const CreateReport = () => {
  const userId = parseInt(parseCookies().userId);
  const { data: userData } = FetchSingleUserService(userId);
  const reporterName = userData?.data?.name || "";
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();
  const createReportMutation = useCreateQuery(createReportService);

  const [formData, setFormData] = useState({
    amount: 0,
    type: "INCOME",
    description: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedFormData = { ...formData, reporter_id: userId };
    try {
      const validationData = reportSchema.parse(updatedFormData);
      await createReportMutation.mutateAsync(validationData);
      // router.push(`/${currentLocale}/deposit-requests`);
    } catch (error) {
      handleErrors(error);
    }
  };

  return (
    <Layout>
      <BreadCrumb title="Create Report" />
      <div className="flex justify-center align-middle mx-auto min-h-fit">
        <div className="w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="amount"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("amount")}
              </label>
              <input
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleInputChange}
                id="amount"
                min={1000}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="type"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("type")}
              </label>
              <select
                name="type"
                defaultValue={formData.type}
                id="type"
                onChange={handleInputChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option defaultValue="" disabled>
                  {t("choose_financial_type")}
                </option>
                <option value="INCOME"> {t("income")}</option>
                <option value="EXPENSE"> {t("expense")}</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="reporter"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("reporter")}
              </label>
              <input
                name="reporter"
                value={reporterName}
                onChange={handleInputChange}
                type="text"
                id="reporter"
                className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                readOnly
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("description")}
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                id="message"
                rows={4}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Place your reason ... "
              ></textarea>
            </div>

            <div className="flex justify-between">
              <Link
                href={`/${currentLocale}/reports`}
                className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5"
              >
                {t("back")}
              </Link>
              <FormSubmitButton text="Create" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateReport;
