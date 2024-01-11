const Navbar = () => {
    return (

        <div className="">
            <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>

                <select id="Tab" className="w-full rounded-md border-gray-200">
                    <option>Settings</option>
                    <option>Messages</option>
                    <option>Archive</option>
                    <option>Notifications</option>
                </select>
            </div>

            <div className="hidden sm:block">
                <nav className="flex gap-6" aria-label="Tabs">
                    <a
                        href="#"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Settings
                    </a>

                    <a
                        href="#"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Messages
                    </a>

                    <a
                        href="#"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Archive
                    </a>

                    <a
                        href="#"
                        className="shrink-0 rounded-lg bg-sky-100 p-2 text-sm font-medium text-sky-600"
                        aria-current="page"
                    >
                        Notifications
                    </a>
                </nav>
            </div>
        </div>
    )

}

export default Navbar;