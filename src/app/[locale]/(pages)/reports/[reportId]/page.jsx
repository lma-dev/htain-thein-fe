"use client";
import Link from "next/link";
import Layout from "../../../../components/layout";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
import { useEffect, useState } from "react";
import { FetchSingleReportService } from "../../../../services/ReportService/FetchSingleReportService";
import { useTranslations } from "next-intl";

const DetailReport = ({ params }) => {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    type: "",
    confirmStatus: "",
    reporter: "",
    verifier: "",
  });
  const { data: reportData } = FetchSingleReportService(params.reportId);
  const t = useTranslations("Translation");

  useEffect(() => {
    if (reportData?.data) {
      setFormData(reportData.data);
    }
  }, [reportData]);

  return (
    <Layout>
      <BreadCrumb title="Detail Report" />
      <div className="flex justify-center align-middle mx-auto min-h-fit">
        <div className="w-1/2">
          <div className="flex flex-wrap justify-center sm:justify-center">
            <div className="w-full max-w-screen-sm rounded-lg border border-gray-200 bg-white p-10 shadow dark:border-gray-700 dark:bg-gray-800">
              <h1 className="mb-3 text-xl font-medium">{t("detail")}</h1>

              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="amount"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t("create")}
                  </label>
                  <input
                    name="amount"
                    value={formData?.amount ?? ""}
                    type="number"
                    id="amount"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    readOnly
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="type"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t("type")}
                  </label>
                  <select
                    name="type"
                    defaultValue={formData?.type}
                    id="type"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  >
                    <option defaultValue={formData?.type} disabled>
                      {formData?.type}
                    </option>
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="reporter"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t("requester")}
                  </label>
                  <input
                    name="reporter"
                    value={formData?.reporter?.name ?? ""}
                    type="text"
                    id="reporter"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    readOnly
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="verifier"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t("verifier")}
                  </label>
                  <input
                    name="verifier"
                    value={formData?.verifier?.name ?? ""}
                    type="text"
                    id="verifier"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    readOnly
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("description")}
                </label>
                <textarea
                  name="description"
                  value={formData?.description ?? ""}
                  id="message"
                  rows={4}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  readOnly
                ></textarea>
              </div>

              <div className="flex justify-between">
                <Link
                  href={`/${params.locale}/reports`}
                  className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5"
                >
                  {t("back")}
                </Link>

                <Link
                  href={`/${params.locale}/reports/${params.reportId}/history`}
                  className="sm:w-auto text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {t("check_history")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailReport;
