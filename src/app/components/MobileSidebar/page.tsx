"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { LogOut, XCircle } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "../../context/LangContext";
import { FC } from "react";


interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const { logout } = useAuth();
  const router = useRouter();
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

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

  return (
    <motion.div
      className={`fixed w-80 inset-0 z-10 bg-gray-800 shadow-lg rounded-sm`}
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
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
              onClick={onClose}
            />
          </div>

          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} passHref>
                  <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky inset-x-0 bottom-0 bg-gray-700 border-t border-gray-600">
          <div
            className="p-3 flex justify-center items-center cursor-pointer"
            onClick={handleLogout}
          >
            <span className="text-white pr-2 text-sm">{t("logOut")}</span>
            <LogOut size={16} className="text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileSidebar;
