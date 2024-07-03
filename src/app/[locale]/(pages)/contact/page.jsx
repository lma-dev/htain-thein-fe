"use client";

import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Layout from "../../../components/layout";
import { useTranslations } from "next-intl";
import { CreateContactInfoService } from "../../../services/ContactInfo/CreateAnnouncementService";
import { useCreateQuery } from "../../../hooks/useCreateQuery";
import { NormalButton } from "../../../components/Button/Button";
import { useState } from "react";

const ContactPage = ({ params }) => {
  const t = useTranslations("Translation");
  const createContactMutation = useCreateQuery(CreateContactInfoService);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContactMutation.mutateAsync(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout lang={params.locale}>
      <BreadCrumb lang={params.locale} title="Support Box" />
      <div className="flex justify-center align-middle mx-auto min-h-fit">
        <div className="w-1/2">
          <form>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("name")}
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("email")}
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("subject")}
              </label>
              <input
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                id="subject"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("message")}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="w-full rounded-md px-4 pt-3 bg-gray-50 outline-blue-500 mb-2 block text-sm font-medium text-gray-900 dark:text-white border"
              ></textarea>
            </div>

            <div className="flex justify-start">
              <NormalButton text="Send" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
