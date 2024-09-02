"use client";
import Link from "next/link";
import UserProfileIconDropdown from "../DropDown/UserProfileIconDropdown";
import { AlignLeft } from "lucide-react";
// import MobileSidebar from "../MobileSidebar/page";
import { useState } from "react";
import LangSwitcher from "../Language/LangSwitcher";
import { useTranslations } from "next-intl";
import useFireStoreCollection from "../../hooks/useFireStoreCollection";
import useUserReadNotifications from "../../hooks/useUserReadNotifications";
import { parseCookies } from "nookies";
import { useLocale } from "../../context/LangContext";

const Navbar = () => {
  const userIdFromCookies = parseInt(parseCookies().userId);
  const { currentLocale } = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("Translation");

  const { data: notifications, count: notificationsCount } =
    useFireStoreCollection("notifications", "timestamp");

  const readNotifications = useUserReadNotifications(userIdFromCookies);

  const unreadNotificationsCount = notifications.filter(
    (notification) => !readNotifications.includes(notification.id)
  ).length;

  const handleToggleSidebar = () => {
    console.log("before handleToggleSidebar" + isMobileMenuOpen);
    setIsMobileMenuOpen((prev) => !prev);
    console.log("after handleToggleSidebar" + isMobileMenuOpen);
  };

  return (
    <div>
      <div className="mt-5">
        <div className="sm:hidden md:hidden flex justify-between border-b border-gray-200 ">
          <div className="text-center ml-5">
            <div className="inline-flex">
              <AlignLeft
                size={24}
                className="mr-5 cursor-pointer text-gray-600"
                onClick={handleToggleSidebar}
              />
              <span className="align-middle font-bold text-lg uppercase text-gray-600">
                {t("appTitle")}
              </span>
            </div>
          </div>
          <div className="mr-7">
            <UserProfileIconDropdown />
          </div>
        </div>
        <div className="hidden sm:block md:block">
          <div className="border-b border-gray-200">
            <div className="flex justify-between px-5">
              <div></div>
              <nav
                className="-mb-px flex gap-6 text-center align-middle justify-center"
                aria-label="Tabs"
              >
                {/* <Link
                  href={`/${currentLocale}/settings`}
                  className={`shrink-0 border-b-2 px-1 pb-4 text-sm font-medium ${
                    pathname === "/settings"
                      ? " border-sky-500 text-sky-600"
                      : "text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {t("setting")}
                </Link> */}

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lma-dev.github.io/"
                  className="shrink-0 border-b-2 px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  {t("aboutMe")}
                </a>

                <Link
                  href={`/${currentLocale}/notifications`}
                  className="relative inline-block px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  {t("notification")}
                  {unreadNotificationsCount !== undefined &&
                    unreadNotificationsCount >= 0 && (
                      <span className="inline-block bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                        {unreadNotificationsCount > 9
                          ? "9+"
                          : unreadNotificationsCount}
                      </span>
                    )}
                </Link>
              </nav>

              <div className="flex justify-center items-center">
                <LangSwitcher />
                <UserProfileIconDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}

      {/* <MobileSidebar isOpen={isMobileMenuOpen} onClose={handleToggleSidebar} /> */}
    </div>
  );
};

export default Navbar;
