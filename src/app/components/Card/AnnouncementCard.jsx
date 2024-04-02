import { BadgeInfo } from "lucide-react";

const AnnouncementCard = ({ announcement }) => {
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
  return (
    <>
      <div className="border border-solid w-full rounded-lg p-5 my-5 hover:cursor-pointer hover:bg-gray-200">
        <div className="flex justify-between">
          <div>
            <h3 className="inline-flex col-span-full md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 font-semibold text-gray-600 mb-2 md:ml-0 md:mb-1 xl:mb-2">
              {announcement.title}
              <a
                href="#"
                className="text-primary dark:text-primary-400 inline-block ml-2 md:ml-3 xl:ml-4 mt-1 md:mt-0 xl:mt-1"
                data-twe-toggle="tooltip"
                title="Important level of announcement"
              >
                {getBadgeColor(announcement.priority)}
              </a>
            </h3>
          </div>
          <div className="col-span-full md:col-start-1 xl:col-span-2 row-start-2 md:row-start-1 text-gray-500 text-sm dark:text-gray-400">
            {announcement.createdAt}
          </div>
        </div>

        <p className="col-span-full md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-500 text-md dark:text-gray-400 text-wrap">
          {announcement.content}
        </p>

        <div className="bg-gray-700 text-white rounded-lg p-1 px-2 text-sm mt-5 w-fit">
          {announcement.slug}
        </div>
      </div>
    </>
  );
};

export default AnnouncementCard;
