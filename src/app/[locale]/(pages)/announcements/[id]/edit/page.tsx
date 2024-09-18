"use client";

import Link from "next/link";
import Layout from "../../../../../components/layout";
import BreadCrumb from "../../../../../components/BreadCrumb/Breadcrumb";
import { FormSubmitButton } from "../../../../../components/Button/Button";
import { FetchSingleAnnouncementService } from "../../../../../services/AnnouncementService/FetchSingleAnnouncementService";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { EditAnnouncementService } from "../../../../../services/AnnouncementService/EditAnnouncementService";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useLocale } from "../../../../../context/LangContext";
import { getDefaultDueDate } from "../../../../../utils/FunctionHelper";
import { handleErrors } from "../../../../../schema/errorHandler";
import { announcementSchema } from "../../../../../schema/announcementSchema";
import { IdParamType } from "../../../../../types/Share/IdParamType";
import { AnnouncementSchemaType } from "../../../../../types/Announcement/Zod/AnnouncementSchemaType";

const EditAnnouncement = ({ params }: IdParamType) => {
  const router = useRouter();
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();
  const { data: announceData, isLoading } = FetchSingleAnnouncementService(
    params.id
  );
  const updateMutation = EditAnnouncementService();
  const [formData, setFormData] = useState<AnnouncementSchemaType>({
    title: "",
    content: "",
    slug: "info",
    isVisible: 1,
    priority: 2,
    dueDate: getDefaultDueDate(),
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedFormData = { ...formData, id: params.id };
      const validationData = announcementSchema.parse(updatedFormData);
      await updateMutation.mutateAsync({
        id: params.id,
        data: validationData,
      });
      router.push(`/${currentLocale}/announcements`);
    } catch (error) {
      handleErrors(error);
    }
  };
  useEffect(() => {
    if (announceData?.data) {
      setFormData(announceData.data);
    }
  }, [announceData]);

  return (
    <Layout>
      <BreadCrumb title="Edit Announcement" />
      <div className="flex justify-center align-middle mx-auto min-h-fit">
        <div className="w-1/2">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="mb-6">
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("title")}
                </label>

                <input
                  name="title"
                  type="text"
                  id="title"
                  onChange={handleInputChange}
                  value={formData.title}
                  placeholder="Title"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("content")}
                </label>

                <textarea
                  name="content"
                  id="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Please enter content"
                  className="block w-full min-h-[10rem]  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("slug")}
                </label>
                <select
                  name="slug"
                  defaultValue={formData?.slug}
                  onChange={handleInputChange}
                  id="slug"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                >
                  <option defaultValue={formData?.slug} disabled>
                    {formData?.slug}
                  </option>
                  <option value="work">work</option>
                  <option value="cost">cost</option>
                  <option value="alert">alert</option>
                  <option value="info">info</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="isVisible"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("visibleStatus")}
                </label>
                <select
                  name="isVisible"
                  onChange={handleInputChange}
                  id="isVisible"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  value={formData.isVisible}
                  required
                >
                  <option value="" disabled>
                    Select visibility
                  </option>
                  <option value={1}>Publish</option>
                  <option value={0}>UnPublish</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="isVisible"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("priority")}
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  id="priority"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>
                    Select Priority
                  </option>
                  <option value={1}>Low</option>
                  <option value={2}>Normal</option>
                  <option value={3}>High</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="dueDate"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("dueDate")}
                </label>
                <input
                  name="dueDate"
                  type="date"
                  id="dueDate"
                  value={
                    formData.dueDate instanceof Date
                      ? formData.dueDate.toISOString().slice(0, 10)
                      : formData.dueDate
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
                <FormSubmitButton text="Update" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditAnnouncement;
