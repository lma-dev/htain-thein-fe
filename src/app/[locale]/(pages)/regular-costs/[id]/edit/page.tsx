"use client";
import Link from "next/link";
import Layout from "../../../../../components/layout";
import BreadCrumb from "../../../../../components/BreadCrumb/Breadcrumb";
import { FormSubmitButton } from "../../../../../components/Button/Button";
import { EditRegularCostService } from "../../../../../services/RegularCostService/EditRegularCostService";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FetchSingleRegularCostService } from "../../../../../services/RegularCostService/FetchSingleRegularCostService";
import { useTranslations } from "next-intl";
import { handleErrors } from "../../../../../schema/errorHandler";
import { regularCostSchema } from "../../../../../schema/regularCostSchema";
import { IdParamType } from "../../../../../types/Share/IdParamType";
import { useLocale } from "../../../../../context/LangContext";

const EditRegularCost = ({ params }: IdParamType) => {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    reporter: {
      name: "Anonymous",
    },
  });
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();

  const router = useRouter();
  const { data: regularCostData } = FetchSingleRegularCostService(params.id);
  const updateMutation = EditRegularCostService();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const reporterId = regularCostData.data.reporter.id;
      const updatedFormData = {
        ...formData,
        reporter_id: reporterId,
      };
      const validationData = regularCostSchema.parse(updatedFormData);
      await updateMutation.mutate({
        id: params.id,
        data: validationData,
      });
      router.push(`/${currentLocale}/regular-costs`);
    } catch (error) {
      handleErrors(error);
    }
  };

  useEffect(() => {
    if (regularCostData?.data) {
      setFormData(regularCostData.data);
    }
  }, [regularCostData]);

  return (
    <Layout>
      <BreadCrumb title="Edit Regular Cost" />
      <div className="flex justify-center align-middle mx-auto min-h-fit">
        <div className="w-1/2">
          <div className="flex flex-wrap justify-center sm:justify-center">
            <div className="w-full max-w-screen-sm rounded-lg border border-gray-200 bg-white p-10 shadow dark:border-gray-700 dark:bg-gray-800">
              <h1 className="mb-3 text-xl font-medium">{t("edit")}</h1>

              <form onSubmit={handleSubmit}>
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
                      onChange={handleInputChange}
                      type="number"
                      id="amount"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      required
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
                      onChange={handleInputChange}
                      type="text"
                      id="reporter"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      required
                      readOnly
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {t("description")}
                  </label>
                  <textarea
                    name="description"
                    value={formData?.description ?? ""}
                    onChange={handleInputChange}
                    id="message"
                    rows={4}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>

                <div className="flex justify-start">
                  <Link
                    href={`/${currentLocale}/regular-costs`}
                    className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5"
                  >
                    {t("back")}
                  </Link>

                  <FormSubmitButton text={"Update"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditRegularCost;
