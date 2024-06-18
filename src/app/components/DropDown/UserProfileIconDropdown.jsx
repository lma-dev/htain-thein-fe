"use client";
import { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { CircleUserRound } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import Link from "next/link";
import { useTranslations } from "next-intl";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserProfileIconDropdown = ({ lang }) => {
  const { logout } = useAuth();
  const router = useRouter();
  const authUserId = parseCookies().userId;
  const t = useTranslations("Translation");
  const handleLogout = async () => {
    await logout();
    router.push(`/${lang}`);
  };
  return (
    <Menu
      as="div"
      className="relative inline-block text-left "
      aria-label="userMenu"
    >
      <div>
        <Menu.Button className="inline-flex rounded-md">
          <CircleUserRound size={27} className="text-gray-600" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/${lang}/users/${authUserId}`}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {t("profile")}
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                  onClick={handleLogout}
                  aria-label="accountant"
                  signOut
                >
                  {t("signOut")}
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserProfileIconDropdown;
