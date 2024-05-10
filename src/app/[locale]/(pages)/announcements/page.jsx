"use client";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Layout from "../../../components/layout";
import AnnouncementCard from "../../../components/Card/AnnouncementCard";
import { FetchAllAnnouncementsService } from "../../../services/AnnouncementService/FetchAllAnnouncementsService";
import Spinner from "../../../components/Spinner/Spinner";
import Link from "next/link";

const Announcement = ({ params }) => {
  const { data: announcements, isLoading: loading } =
    FetchAllAnnouncementsService();
  return (
    <Layout lang={params.locale}>
      <BreadCrumb lang={params.locale} title="Announcements" />
      <div className="flex justify-end">
        <Link
          href={`/${params.locale}/announcements/create`}
          className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-white bg-gray-900 font-medium transition hover:scale-105 border"
        >
          Create Announcement
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
              announcements.data.map((announcement, index) => (
                <AnnouncementCard key={index} announcement={announcement} />
              ))}
          </div>
        )}
      </ul>
    </Layout>
  );
};

export default Announcement;
