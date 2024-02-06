
import Link from "next/link";
import UserProfileIconDropdown from "../DropDown/UserProfileIconDropdown";

const Navbar = () => {

    return (
        <div className="mt-5">
            <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>

                <select className="w-full rounded-md border-gray-200">
                    <option>Settings</option>
                    <option>Messages</option>
                    <option>Archive</option>
                    <option>Notifications</option>
                </select>
            </div>

            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <div className="flex justify-between px-10">
                        <div className="flex">
                            <Link href="/dashboard">Htain Thein</Link>
                        </div>
                        <div>
                            <nav className="-mb-px flex gap-6 text-center align-middle justify-center" aria-label="Tabs">
                                <a
                                    href="#"
                                    className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                >
                                    Settings
                                </a>

                                <a
                                    href="#"
                                    className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                >
                                    Messages
                                </a>

                                <a
                                    href="#"
                                    className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                >
                                    Archive
                                </a>

                                <Link
                                    href="/notifications"
                                    className="shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
                                    aria-current="page"
                                >
                                    Notifications
                                </Link>
                            </nav>
                        </div>

                        <div>
                            <UserProfileIconDropdown />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Navbar;