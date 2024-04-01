import { BadgeInfo } from "lucide-react";

const AnnouncementCard = ({ announcement }) => {
  const getBadgeColor = (level) => {
    if (level == 1) {
      console.log("level 1");
      return <BadgeInfo size={17} className="text-blue-600" />;
    }
    if (level == 2) {
      return <BadgeInfo size={17} className="text-yellow-600" />;
    }
    if (level == 3) {
      return <BadgeInfo size={17} className="text-red-600" />;
    }
  };
  return (
    <>
      <li>
        <article>
          <div className="grid grid-cols-12 p-4 lg:p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="flex">
              <h3 className="col-span-full md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 font-semibold text-gray-700 mb-2 md:ml-0 md:mb-1 xl:mb-2">
                {announcement.title}
              </h3>
              <a
                href="#"
                className="text-primary dark:text-primary-400 inline-block ml-2 md:ml-3 xl:ml-4 mt-1 md:mt-0 xl:mt-1"
                data-twe-toggle="tooltip"
                title="Important level of announcement"
              >
                {getBadgeColor(announcement.priority)}
              </a>
            </div>

            <div className="col-span-full md:col-start-1 xl:col-span-2 row-start-2 md:row-start-1 text-gray-600 dark:text-gray-400">
              {announcement.createdAt}
            </div>
            <p className="col-span-full md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-700 dark:text-gray-400">
              {announcement.content}
            </p>
          </div>
        </article>
      </li>
    </>
  );
};

export default AnnouncementCard;
