import { motion } from "framer-motion";
import Link from "next/link";
import { LogOut } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const MobileSidebar = ({ setOpen, open, lang }) => {
  const { logout } = useAuth();
  const router = useRouter();
  const t = useTranslations("Translation");

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <motion.div
      className={`fixed w-80 inset-0 z-10 bg-gray-800 shadow-lg rounded-sm`}
      initial={{ x: "-100%" }}
      animate={{ x: open ? "0%" : "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <div className="flex min-h-full flex-col justify-between">
        <div className="px-4 py-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-white text-lg font-bold uppercase px-4 py-2">
              {t("appTitle")}
            </div>
            <XCircle
              size={24}
              className="cursor-pointer text-white"
              onClick={() => setOpen(!open)}
            />
          </div>

          <ul className="space-y-2">
            <li>
              <Link href={`/${lang}/dashboard`} passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  {t("dashboard")}
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/reports`} passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  {t("report")}
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/regular-costs`} passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  {t("regularCost")}
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/deposit-requests`} passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  {t("depositRequest")}
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/users`} passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  {t("user")}
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/chat-room`} passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  {t("chatRoom")}
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/announcements`} passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  {t("announcement")}
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/settings`} passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  {t("setting")}
                </span>
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://lma-dev.github.io/"
              >
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  {t("about")}
                </span>
              </a>
            </li>
            <li>
              <Link href={`/${lang}/notifications`} passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  {t("notification")}
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/announcements`} passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  {t("announcement")}
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sticky inset-x-0 bottom-0 bg-gray-700 border-t border-gray-600">
          <div
            className="p-3 flex justify-center items-center cursor-pointer"
            onClick={handleLogout}
          >
            <span className="text-red-400 pr-2 text-sm">{t("logOut")}</span>
            <LogOut size={16} className="text-red-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileSidebar;
