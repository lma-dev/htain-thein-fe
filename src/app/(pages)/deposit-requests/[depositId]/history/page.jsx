'use client'

import Layout from '../../../../components/layout';
import NestedTable from '../../../../components/Table/ReportHistoryTable/page';
import { FetchChangedHistoriesService } from "../../../../services/ReportService/FetchChangedHistoriesService";
import BreadCrumb from '../../../../components/BreadCrumb/BreadCrumb';

const History = () => {
    const { data:histories, isLoading: loading} =  FetchChangedHistoriesService()

    return (
        <Layout>
            <BreadCrumb title='History' />
            <div className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="flex flex-col mt-6">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-fit justify-center flex">
                            <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-700">
                                <div className="overflow-y-auto max-h-[40rem]">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-700 sticky top-0">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">id</th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Editor</th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Old Data</th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"> New Data</th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"> Updated Date</th>

                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            {histories?.data.map((edit) => (
                                                <tr key={edit.id} className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200" >{edit.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{edit.editor}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                        <NestedTable data={edit.oldData} />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                        <NestedTable data={edit.newData} />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{edit.updatedAt}</td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default History;