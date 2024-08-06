"use client";

import Link from "next/link";
import Layout from "../../../../../components/layout";
import BreadCrumb from "../../../../../components/BreadCrumb/Breadcrumb";
import { NormalButton } from "../../../../../components/Button/Button";
import { FetchSingleAnnouncementService } from "../../../../../services/AnnouncementService/FetchSingleAnnouncementService";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { EditAnnouncementService } from "../../../../../services/AnnouncementService/EditAnnouncementService";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useLocale } from "../../../../../context/LangContext";
import {
  getPriority,
  getVisibility,
} from "../../../../../utils/FunctionHelper";
import { handleErrors } from "../../../../../schema/errorHandler";
import { announcementSchema } from "../../../../../schema/announcementSchema";
import { IdParamType } from "../../../../../types/IdParamType";
import { AnnouncementFormType } from "../../../../../types/Announcement/AnnouncementType";

const EditAnnouncement = ({ params }: IdParamType) => {
  const router = useRouter();
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();
  const { data: announceData, isLoading } = FetchSingleAnnouncementService(
    params.id
  );
  const updateMutation = EditAnnouncementService();
  const [formData, setFormData] = useState<AnnouncementFormType>({
    title: "",
    content: "",
    slug: "",
    isVisible: 1,
    priority: 2,
    dueDate: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedFormData = { ...formData, id: params.id };
      const validationData = announcementSchema.parse(updatedFormData);
      await updateMutation.mutate({
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
          <form>
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
                  type="text"
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
                  defaultValue={getVisibility(formData?.isVisible)}
                  required
                >
                  <option defaultValue={formData?.isVisible} disabled>
                    {getVisibility(formData?.isVisible)}
                  </option>
                  <option value={1}>Public</option>
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
                  defaultValue={getPriority(formData?.priority)}
                  onChange={handleInputChange}
                  id="priority"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                >
                  <option defaultValue={formData?.priority} disabled>
                    {getPriority(formData?.priority)}
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
                  onChange={handleInputChange}
                  value={formData.dueDate}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between">
                <Link
                  href={`/${currentLocale}/announcements`}
                  className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5"
                >
                  {t("back")}
                </Link>
                <NormalButton text="Update" onClick={handleSubmit} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditAnnouncement;
