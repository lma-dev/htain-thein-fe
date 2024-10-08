"use client";
import Layout from "../../../../components/layout";
import BreadCrumb from "../../../../components/BreadCrumb/Breadcrumb";
import { FetchSingleAnnouncementService } from "../../../../services/AnnouncementService/FetchSingleAnnouncementService";
import Link from "next/link";
import Spinner from "../../../../components/Spinner/Spinner";
import { getPriority, getVisibility } from "../../../../utils/FunctionHelper";
import { useTranslations } from "next-intl";
import { useLocale } from "../../../../context/LangContext";
import { IdParamType } from "../../../../types/Share/IdParamType";

const DetailAnnouncement = ({ params }: IdParamType) => {
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();

  const { data: announceData, isLoading } = FetchSingleAnnouncementService(
    params.id
  );

  return (
    <Layout>
      <BreadCrumb title="Detail Announcement" />
      <div className="flex justify-center align-middle mx-auto min-h-fit">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="w-1/2">
            <div>
              <div className="mb-6">
                <label
                  htmlFor="Title"
                  className="block text-xs font-medium text-gray-500"
                >
                  {t("title")}
                </label>

                <input
                  type="text"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3 bg-gray-200"
                  value={announceData.data.title}
                  readOnly
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="Content"
                  className="block text-xs font-medium text-gray-500"
                >
                  {t("content")}
                </label>

                <textarea
                  className="mt-1 w-full min-h-44 rounded-md border-gray-200 shadow-sm sm:text-sm p-3 bg-gray-200"
                  value={announceData.data.content}
                  readOnly
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="Slug"
                  className="block text-xs font-medium text-gray-500"
                >
                  {t("slug")}
                </label>

                <input
                  type="text"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3 bg-gray-200"
                  value={announceData.data.slug}
                  readOnly
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="isVisible"
                  className="block text-xs font-medium text-gray-500"
                >
                  {t("visibleStatus")}
                </label>

                <input
                  type="text"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3 bg-gray-200"
                  value={getVisibility(announceData.data.isVisible)}
                  readOnly
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Priority"
                  className="block text-xs font-medium text-gray-500"
                >
                  {t("priority")}
                </label>

                <input
                  type="text"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3 bg-gray-200"
                  value={getPriority(announceData.data.priority)}
                  readOnly
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="dueDate"
                  className="block text-xs font-medium text-gray-500"
                >
                  {t("dueDate")}
                </label>

                <input
                  type="text"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3 bg-gray-200"
                  value={announceData.data.dueDate}
                  readOnly
                />
              </div>
              <div className="flex justify-between">
                <Link
                  href={`/${currentLocale}/announcements`}
                  className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5"
                >
                  {t("back")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default DetailAnnouncement;
