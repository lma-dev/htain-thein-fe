"use client";

import Layout from "../../../../../components/layout";
import NestedTable from "../../../../../components/Table/ReportHistoryTable/page";
import { FetchChangedHistoriesService } from "../../../../../services/ReportService/FetchChangedHistoriesService";
import BreadCrumb from "../../../../../components/BreadCrumb/Breadcrumb";
import Spinner from "../../../../../components/Spinner/Spinner";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { IdParamType } from "../../../../../types/Share/IdParamType";
import { useLocale } from "../../../../../context/LangContext";
import { ReportHistoryType } from "../../../../../types/Report/ReportHistoryType";

const History = ({ params }: IdParamType) => {
  const { data: histories, isLoading: loading } = FetchChangedHistoriesService(
    params.id
  );
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();

  return (
    <Layout>
      <BreadCrumb title="History" />
      <div className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="flex flex-col mt-6">
          {loading ? (
            <div>
              <>
                <Spinner />
              </>
            </div>
          ) : (
            <div>
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-fit justify-center flex">
                  <div>
                    <Link
                      href={`/${currentLocale}/reports/${params.id}`}
                      className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5 mb-5"
                    >
                      {t("back")}
                    </Link>
                  </div>
                  <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-700">
                    <div className="overflow-y-auto max-h-[40rem]">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700 sticky top-0">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                            >
                              {t("id")}
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                            >
                              {t("editor")}
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                            >
                              {t("oldData")}
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                            >
                              {t("newData")}
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                            >
                              {t("updatedDate")}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          {/* TODO FIX */}
                          {histories?.data.map((history: ReportHistoryType) => (
                            <tr
                              key={history.id}
                              className="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                {history.id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                {history.editor}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                {/* <NestedTable data={history.oldData} /> */}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                {/* <NestedTable data={history.newData} /> */}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                {history.updatedAt}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default History;
