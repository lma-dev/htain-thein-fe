import DepositTableDropDown from "../../DropDown/DepositTableDropDown";

const DepositWithdrawTable = ({ data }) => {
    return (
        <div className="flex flex-col h-full border p-3 shadow-lg rounded-lg">
            <div className="-m-1.5 overflow-x-auto max-h-[500px]">
                <div className="min-w-full inline-block align-middle p-3">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700 ">
                                <tr className="sticky top-0">
                                    <th className="relative z-10 px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Id</th>
                                    <th className="relative z-10 px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Requester</th>
                                    <th className="relative z-10 px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Amount</th>
                                    <th className="relative z-10 px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Type</th>
                                    <th className="relative z-10 px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Request Date</th>
                                    <th className="relative z-10 px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Status</th>
                                    <th className="relative z-10 px-6 py-3 text-end text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.uncheckReports?.map((item, index) => (
                                    <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800" key={index}>
                                        <td className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.id}</td>
                                        <td className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.reporter?.name}</td>
                                        <td className="px-6 py-4 text-start whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.amount}</td>
                                        <td className="px-6 py-4 text-start whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.type}</td>
                                        <td className="px-6 py-4 text-start whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.createdAt}</td>
                                        <td className="px-6 py-4 text-start whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            <span
                                                className={`mr-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${item.confirmStatus === true
                                                    ? "bg-green-100 text-green-800"
                                                    : item.confirmStatus === false
                                                        ? "bg-red-100 text-red-800"
                                                        : ""
                                                    }`}
                                            >
                                                {item.confirmStatus ? 'Confirmed' : 'Pending'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-end">
                                            <DepositTableDropDown />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepositWithdrawTable;

import RegularCostDropDown from "../../DropDown/RegularCostDropDown";

const DepositWithdrawTable = ({ data, fetchRegularCosts }) => {
    console.log(data)
    return (
        <div className="flex flex-col w-full">
            <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border rounded-lg shadow dark:border-gray-700 dark:shadow-gray-900">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700  ">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Id</th>
                                <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Requester</th>
                                <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Amount</th>
                                <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Description</th>
                                <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Request Date</th>
                                <th scope="col" className="px-6 py-3 text-end text-xs font-bold text-gray-700 uppercase dark:text-gray-400">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700 relative">
                            {data.regularData?.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-200 text-start">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-200 text-start"> {item.reporter}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 break-words text-start">{item.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 max-w-[200px] truncate text-start">{item.description}</td>


                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 text-start">{item.createdAt}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium align-middle" >
                                        <RegularCostDropDown regularCostId={item?.id} fetchRegularCosts={fetchRegularCosts} />
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DepositWithdrawTable;