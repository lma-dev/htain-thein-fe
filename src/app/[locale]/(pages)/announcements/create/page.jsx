"use client";

import Link from "next/link";
import Layout from "../../../../components/layout";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
import { NormalButton } from "../../../../components/Button/Button";
import { createAnnouncementService } from "../../../../services/AnnouncementService/CreateAnnouncementService";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateQuery } from "../../../../hooks/useCreateQuery";
import usePusher from "../../../../hooks/usePusher";

const CreateAnnouncement = ({ params }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    slug: "info",
    isVisible: 1,
    priority: 2,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMutation.mutateAsync(formData);
    router.push(`/${params.locale}/announcements`);
  };

  const handleNewAnnouncement = () => {
    // Handle the new announcement event here, e.g., show a notification
    console.log("New announcement received");
  };

  const createMutation = useCreateQuery(createAnnouncementService);
  usePusher(
    process.env.NEXT_PUBLIC_ANNOUNCEMENT_CHANNEL,
    process.env.NEXT_PUBLIC_ANNOUNCEMENT_EVENT,
    handleNewAnnouncement
  );

  return (
    <Layout lang={params.locale}>
      <BreadCrumb lang={params.locale} title="Create Announcement" />
      <div className="flex justify-center align-middle mx-auto min-h-fit">
        <div className="w-1/2">
          <form>
            <div>
              <div className="mb-6">
                <label
                  htmlFor="Title"
                  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    name="title"
                    type="text"
                    id="title"
                    onChange={handleInputChange}
                    placeholder="Title"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Title
                  </span>
                </label>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="Content"
                  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    name="content"
                    type="text"
                    id="content"
                    onChange={handleInputChange}
                    placeholder="Please enter content"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Content
                  </span>
                </label>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  slug
                </label>
                <select
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  id="slug"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                >
                  <option value="">Please select</option>
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
                  value={formData.isVisible}
                  onChange={handleInputChange}
                  id="isVisible"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                >
                  <option value="">Please select</option>
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
                  value={formData.priority}
                  onChange={handleInputChange}
                  id="priority"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                >
                  <option value="">Please select</option>
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
                <NormalButton text="create" onClick={handleSubmit} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAnnouncement;