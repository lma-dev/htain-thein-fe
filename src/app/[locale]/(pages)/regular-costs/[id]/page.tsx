"use client";
import Layout from "../../../../components/layout";
import BreadCrumb from "../../../../components/BreadCrumb/Breadcrumb";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FetchSingleRegularCostService } from "../../../../services/RegularCostService/FetchSingleRegularCostService";
import { useTranslations } from "next-intl";
import { useLocale } from "../../../../context/LangContext";
import { IdParamType } from "../../../../types/Share/IdParamType";

const DetailRegularCost = ({ params }: IdParamType) => {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    reporter: {
      name: "Anonymous",
    },
  });
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();

  const { data: regularCostData } = FetchSingleRegularCostService(params.id);

  useEffect(() => {
    if (regularCostData?.data) {
      setFormData(regularCostData.data);
    }
  }, [regularCostData]);

  return (
    <Layout>
      <BreadCrumb title="Detail RegularCost" />
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
                    {t("amount")}
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

              <Link
                href={`/${currentLocale}/regular-costs`}
                className="rounded-lg p-3 text-sm text-gray-600 font-medium border"
              >
                {t("back")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailRegularCost;
