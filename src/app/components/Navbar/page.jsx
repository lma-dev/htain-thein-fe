"use client";
import Link from "next/link";
import UserProfileIconDropdown from "../DropDown/UserProfileIconDropdown";
import { AlignLeft } from "lucide-react";
import MobileSidebar from "../MobileSidebar/page";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LangSwitcher from "../Language/LangSwitcher";
import { useTranslations } from "next-intl";
import useFireStoreCollection from "../../hooks/useFireStoreCollection";
const Navbar = ({ lang }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useTranslations("Translation");
  const { data: notifications, count: notificationsCount } =
    useFireStoreCollection("notifications", "timestamp");

  return (
    <div>
      <div className="mt-5">
        <div className="sm:hidden md:hidden flex justify-between border-b border-gray-200 ">
          <div className="text-center ml-5">
            <div className="inline-flex">
              <AlignLeft
                size={24}
                className="mr-5 cursor-pointer text-gray-600"
                onClick={() => setOpen(!open)}
              />
              <span className="align-middle font-bold text-lg uppercase text-gray-600">
                {t("appTitle")}
              </span>
            </div>
          </div>
          <div className="mr-7">
            <UserProfileIconDropdown lang={lang} />
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
                <Link
                  href={`/${lang}/settings`}
                  className={`shrink-0 border-b-2 px-1 pb-4 text-sm font-medium ${
                    pathname === "/settings"
                      ? " border-sky-500 text-sky-600"
                      : "text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {t("setting")}
                </Link>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lma-dev.github.io/"
                  className="shrink-0 border-b-2 px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  {t("about")}
                </a>

                <Link
                  href={`/${lang}/notifications`}
                  className="relative inline-block px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  {t("notification")}
                  {notificationsCount > 0 && (
                    <span className="inline-block bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                      {notificationsCount > 9 ? "9+" : notificationsCount}
                    </span>
                  )}
                </Link>
              </nav>

              <div className="flex justify-center items-center">
                <LangSwitcher />
                <UserProfileIconDropdown lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}

      {open && <MobileSidebar setOpen={setOpen} open={open} lang={lang} />}
    </div>
  );
};

export default Navbar;
