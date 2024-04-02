"use client";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";
import AnnouncementCard from "../../components/Card/AnnouncementCard";
import { FetchAllAnnouncementsService } from "../../services/AnnouncementService/FetchAllAnnouncementsService";
import Spinner from "../../components/Spinner/Spinner";
const Announcement = () => {
  const { data: announcements, isLoading: loading } =
    FetchAllAnnouncementsService();

  return (
    <Layout>
      <BreadCrumb title="Announcements" />
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
