"use client";

import Link from "next/link";
import Layout from "../../../../../components/layout";
import BreadCrumb from "../../../../../components/BreadCrumb/BreadCrumb";
import { NormalButton } from "../../../../../components/Button/Button";
import { FetchSingleAnnouncementService } from "../../../../../services/AnnouncementService/FetchSingleAnnouncementService";
import { useEffect, useState } from "react";
import { EditAnnouncementService } from "../../../../../services/AnnouncementService/EditAnnouncementService";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import {
  getPriority,
  getVisibility,
} from "../../../../../utils/FunctionHelper";
const EditAnnouncement = ({ params }) => {
  const router = useRouter();
  const { data: announceData, isLoading } = FetchSingleAnnouncementService(
    params.id
  );
  const updateMutation = EditAnnouncementService();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    slug: "",
    isVisible: "",
    priority: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateMutation.mutate({ id: params.id, data: formData });
    router.push(`/${params.locale}/announcements`);
  };
  useEffect(() => {
    if (announceData?.data) {
      setFormData(announceData.data);
    }
  }, [announceData]);

  return (
    <Layout lang={params.locale}>
      <BreadCrumb lang={params.locale} title="Edit Announcement" />
      <div className="flex justify-center align-middle mx-auto min-h-fit">
        <div className="w-1/2">
          <form>
            <div>
              <div className="mb-6">
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
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
                  Content
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
                  Slug
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
                  Visible Status
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
                  Priority
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
              <div className="flex justify-between">
                <Link
                  href={`/${params.locale}/announcements`}
                  className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5"
                >
                  Back
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
