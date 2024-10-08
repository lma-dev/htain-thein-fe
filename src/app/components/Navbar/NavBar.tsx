"use client";
import Link from "next/link";
import UserProfileIconDropdown from "../DropDown/UserProfileIconDropdown";
import { AlignLeft } from "lucide-react";
import { useState } from "react";
import LangSwitcher from "../Language/LangSwitcher";
import { useTranslations } from "next-intl";
import useFireStoreCollection from "../../hooks/useFireStoreCollection";
import useUserReadNotifications from "../../hooks/useUserReadNotifications";
import { parseCookies } from "nookies";
import { useLocale } from "../../context/LangContext";
import { useRouter } from "next/navigation";
import useAuth from "../../hooks/useAuth";
import MobileSidebar from "../MobileSidebar/MobileSidebar";

const NavBar = () => {
  const { logout } = useAuth();
  const userIdFromCookies = parseInt(parseCookies().userId);
  const { currentLocale } = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("Translation");
  const router = useRouter();

  const { data: notifications } = useFireStoreCollection(
    "notifications",
    "timestamp"
  );
  const readNotifications = useUserReadNotifications(userIdFromCookies);

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const unreadNotificationsCount = notifications.filter(
    (notification) => !readNotifications.includes(notification.id)
  ).length;

  const navigationItems = [
    { href: `/${currentLocale}/dashboard`, label: t("dashboard") },
    { href: `/${currentLocale}/reports`, label: t("report") },
    { href: `/${currentLocale}/regular-costs`, label: t("regularCost") },
    { href: `/${currentLocale}/deposit-requests`, label: t("depositRequest") },
    { href: `/${currentLocale}/users`, label: t("user") },
    { href: `/${currentLocale}/chat-room`, label: t("chatRoom") },
    { href: `/${currentLocale}/announcements`, label: t("announcement") },
    { href: `/${currentLocale}/settings`, label: t("setting") },
    {
      href: "https://lma-dev.github.io/",
      target: "_blank",
      rel: "noopener noreferrer",
      label: t("about"),
    },
    { href: `/${currentLocale}/notifications`, label: t("notification") },
  ];

  const handleToggleSidebar = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="mt-5">
        <div className="sm:hidden md:hidden flex justify-between border-b border-gray-200">
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

      {/* Mobile SideBar */}
      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={handleToggleSidebar}
        navigationItems={navigationItems}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default NavBar;
