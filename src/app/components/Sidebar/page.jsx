import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {

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

                <div className="hs-dropdown relative inline-flex">
                    <button type="button" className="py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-semibold bg-white p-4 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 w-full">
                        <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Maria" />
                        <div>
                            <p className="text-xs ">
                                <strong className="block font-medium">Eric Frusciante</strong>
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;