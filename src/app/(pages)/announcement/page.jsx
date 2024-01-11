import Layout from "../../components/layout";

const Announcement = () => {
    return (
        <Layout>
            <div className="max-w-xl p-8 mx-auto dark:bg-gray-800 dark:text-gray-100">
                <ul className="space-y-12 ">
                    <li className="flex items-start space-x-3">
                        <a rel="noopener noreferrer" href="#" className="flex items-center h-8 text-sm hover:underline">v.2</a>
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                                <a rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700">
                                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"></span>
                                    <span className="group-hover:underline dark:text-gray-100">Feature</span>
                                </a>
                                <span className="text-xs whitespace-nowrap">10h ago</span>
                            </div>
                            <div>
                                <p>Chatting between family members</p>
                            </div>
                        </div>
                    </li>

                    <li className="flex items-start space-x-3">
                        <a rel="noopener noreferrer" href="#" className="flex items-center h-8 text-sm hover:underline">v.2</a>
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                                <a rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700">
                                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"></span>
                                    <span className="group-hover:underline dark:text-gray-100">Feature</span>
                                </a>
                                <span className="text-xs whitespace-nowrap">10h ago</span>
                            </div>
                            <div className="space-y-2">
                                <p>Filter Income and outcome Month by month function.</p>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <a rel="noopener noreferrer" href="#" className="flex items-center h-8 text-sm hover:underline">v.2</a>
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                                <a rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700">
                                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"></span>
                                    <span className="group-hover:underline dark:text-gray-100">Feature</span>
                                </a>
                                <span className="text-xs whitespace-nowrap">10h ago</span>
                            </div>
                            <div className="space-y-2">
                                <p>Filter Name and reports depend on filter types.</p>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <a rel="noopener noreferrer" href="#" className="flex items-center h-8 text-sm hover:underline">v.2</a>
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                                <a rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700">
                                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"></span>
                                    <span className="group-hover:underline dark:text-gray-100">Feature</span>
                                </a>
                                <span className="text-xs whitespace-nowrap">10h ago</span>
                            </div>
                            <div className="space-y-2">
                                <p>User can upload their own image from camera.</p>
                            </div>
                        </div>
                    </li>

                    <li className="flex items-start space-x-3">
                        <a rel="noopener noreferrer" href="#" className="flex items-center h-8 text-sm hover:underline">v.2</a>
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                                <a rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700">
                                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"></span>
                                    <span className="group-hover:underline dark:text-gray-100">Refactor</span>
                                </a>
                                <span className="text-xs whitespace-nowrap">10h ago</span>
                            </div>
                            <div className="space-y-2">
                                <p>Toggle refactoring</p>
                            </div>
                        </div>
                    </li>

                    <li className="flex items-start space-x-3">
                        <a rel="noopener noreferrer" href="#" className="flex items-center h-8 text-sm hover:underline">v.2</a>
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                                <a rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700">
                                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"></span>
                                    <span className="group-hover:underline dark:text-gray-100">Refactor</span>
                                </a>
                                <span className="text-xs whitespace-nowrap">10h ago</span>
                            </div>
                            <div className="space-y-2">
                                <p>Login with gmail and github and face recognition</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </Layout>
    );
}

export default Announcement;