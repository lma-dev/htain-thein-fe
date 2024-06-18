import { BadgeInfo } from "lucide-react";
import AnnouncementDropdown from "../DropDown/AnnouncementDropDown";
const AnnouncementCard = ({ announcement, t, lang }) => {
  const getBadgeColor = (level) => {
    if (level == 1) {
      return <BadgeInfo size={17} className="text-blue-600" />;
    }
    if (level == 2) {
      return <BadgeInfo size={17} className="text-yellow-600" />;
    }
    if (level == 3) {
      return <BadgeInfo size={17} className="text-red-600" />;
    }
  };

  function getBadgeTitle(priority) {
    switch (priority) {
      case "1":
        return t("lowPriority");
      case "2":
        return t("normalPriority");
      case "3":
        return t("highPriority");
      default:
        return t("unknownPriority");
    }
  }
  return (
    <>
      <div className="border border-solid w-full rounded-lg p-5 my-5 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-1">
              {announcement.title}
              <span
                className={`inline-block ml-2 px-2 py-0.5 rounded-full text-xs ${
                  announcement.isVisible == 1
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {announcement.isVisible == 1
                  ? t("published")
                  : t("unpublished")}
              </span>
            </h3>
            <div className="flex items-center">
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 mr-2">
                {announcement.slug}
              </span>
              <a
                href="#"
                className="text-primary dark:text-primary-400 text-sm mr-2"
                data-twe-toggle="tooltip"
                title={getBadgeTitle(announcement.priority)}
                aria-label="bandage"
              >
                {getBadgeColor(announcement.priority)}
              </a>
              <span className="text-gray-500 text-sm">
                {announcement.createdAt}
              </span>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            <AnnouncementDropdown
              announcementId={announcement.id}
              t={t}
              lang={lang}
            />
          </div>
        </div>
        <p className="text-gray-500 text-md text-wrap line-clamp-1">
          {announcement.content}
        </p>
      </div>
    </>
  );
};

export default AnnouncementCard;
