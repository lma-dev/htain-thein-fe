import { motion } from "framer-motion";
import Link from "next/link";
import { LogOut } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react";

const Sidebar = ({ setOpen, open }) => {
  const { logout } = useAuth();
  const router = useRouter();

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
              HTAIN THEIN
            </div>
            <XCircle
              size={24}
              className="cursor-pointer text-white"
              onClick={() => setOpen(!open)}
            />
          </div>

          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link href="/reports" passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  Reports
                </span>
              </Link>
            </li>
            <li>
              <Link href="/regular-costs" passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  Regular Costs
                </span>
              </Link>
            </li>
            <li>
              <Link href="/users" passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  Users
                </span>
              </Link>
            </li>
            <li>
              <Link href="/chat-room" passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  Chat Room
                </span>
              </Link>
            </li>
            <li>
              <Link href="/settings" passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  Setting
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
                  About
                </span>
              </a>
            </li>
            <li>
              <Link href="/notifications" passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  Notifications
                </span>
              </Link>
            </li>
            <li>
              <Link href="/announcements" passHref>
                <span className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md">
                  Announcements
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
            <span className="text-red-400 pr-2 text-sm">Logout</span>
            <LogOut size={16} className="text-red-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
