'use client'
import Link from "next/link";
import { LogOut } from 'lucide-react';
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/navigation";

const Sidebar = () => {
    const { logout } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push("/");

    }
    return (
        <div className="hidden md:flex min-h-full flex-col justify-between border-e bg-white fixed">
            <div className="px-4 py-6">
                <span className="grid h-10 w-32 place-content-center rounded-lg font-bold text-lg uppercase text-gray-600">
                    HTAIN THEIN
                </span>

                <ul className="mt-6 space-y-1">
                    <li>
                        <Link href="/dashboard" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                            Dashboard
                        </Link>
                    </li>


                    <li>
                        <Link
                            href="/reports"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Reports
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/regular-costs"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Regular Costs
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/users"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/chat-room"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Chat Room
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/announcement"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Announcements
                        </Link>
                    </li>

                </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <div className="p-3 flex justify-center items-center cursor-pointer" onClick={handleLogout}>
                    <span className="text-red-400 pr-3 ">Logout</span>
                    <LogOut size={16} className="inline-block text-red-400 " />
                </div>
            </div>
        </div>
    )
}
export default Sidebar;