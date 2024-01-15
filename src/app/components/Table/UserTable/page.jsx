import UserDropDown from "../../DropDown/UserDropDown";

const UserTable = ({ data }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Id</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Name</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Email</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Role</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Status</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Join In</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {data.map((user, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{user.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{user.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user.role}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user.accountStatus}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user.createdAt}</td>

                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <UserDropDown userId={user.id} />
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTable;