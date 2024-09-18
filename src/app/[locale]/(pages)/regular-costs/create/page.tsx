"use client";

import Link from "next/link";
import Layout from "../../../../components/layout";
import BreadCrumb from "../../../../components/BreadCrumb/Breadcrumb";
import { FormSubmitButton } from "../../../../components/Button/Button";
import { createRegularCostService } from "../../../../services/RegularCostService/CreateRegularCostService";
import { ChangeEvent, FormEvent, useState } from "react";
import { parseCookies } from "nookies";
import { useCreateQuery } from "../../../../hooks/useCreateQuery";
import { FetchSingleUserService } from "../../../../services/UserService/FetchSingleUserService";
import { useTranslations } from "next-intl";
import { handleErrors } from "../../../../schema/errorHandler";
import { regularCostSchema } from "../../../../schema/regularCostSchema";
import { useLocale } from "../../../../context/LangContext";
import { useRouter } from "next/navigation";

const CreateRegularCost = () => {
  const userId = parseInt(parseCookies().userId);
  const { data: userData } = FetchSingleUserService(userId);
  const reporterName = userData?.data?.name || "";
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();

  const createRegularCostMutation = useCreateQuery(
    createRegularCostService,
    "general-outcome"
  );

  const [formData, setFormData] = useState({
    amount: 0,
    description: "",
  });

  const router = useRouter();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedFormData = { ...formData, reporter_id: userId };
      const validationData = regularCostSchema.parse(updatedFormData);
      await createRegularCostMutation.mutateAsync(validationData);
      router.push(`/${currentLocale}/regular-costs`);
    } catch (error) {
      handleErrors(error);
    }
  };

  return (
    <Layout>
      <BreadCrumb title="Create Regular Cost" />
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
                href={`/${currentLocale}/regular-costs`}
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

export default CreateRegularCost;
