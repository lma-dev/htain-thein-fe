"use client";
import BreadCrumb from "../../../components/BreadCrumb/Breadcrumb";
import Layout from "../../../components/layout";
import AnnouncementCard from "../../../components/Card/AnnouncementCard";
import { FetchAllAnnouncementsService } from "../../../services/AnnouncementService/FetchAllAnnouncementsService";
import Spinner from "../../../components/Spinner/Spinner";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "../../../context/LangContext";

const Announcement = () => {
  const { data: announcements, isLoading: loading } =
    FetchAllAnnouncementsService();
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();

  return (
    <Layout>
      <BreadCrumb title="Announcements" />
      <div className="flex justify-end">
        <Link
          href={`/${currentLocale}/announcements/create`}
          className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-white bg-gray-900 font-medium transition hover:scale-105 border"
        >
          {t("createAnnouncement")}
        </Link>
      </div>
      <ul className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
        {loading ? (
          <div>
            <>
              <Spinner />
            </>
          </div>
        ) : (
          <div>
            {announcements?.data.length > 0 &&
              announcements.data.map((announcement: any, index: number) => (
                <AnnouncementCard
                  key={index}
                  announcement={announcement}
                />
              ))}
          </div>
        )}
      </ul>
    </Layout>
  );
};

export default Announcement;
