'use client'
import Layout from "../../../components/layout"
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import Link from "next/link";
import { FetchSingleRegularCostService } from "../../../services/RegularCostService/FetchSingleRegularCostService";

const DetailRegularCost = () => {
    const [formData, setFormData] = useState({
        amount: '',
        description: '',
        reporter: '',
    });
    const params = useParams();
    const { data: regularCostData } = FetchSingleRegularCostService(params.regcostId);

    useEffect(() => {
        if (regularCostData?.data) {
            setFormData(regularCostData.data);
        }
    }, [regularCostData]); 

    return (
        <Layout>
            <BreadCrumb title='Detail RegularCost' />
            <div className="flex justify-center align-middle mx-auto min-h-fit">
                <div className="w-1/2">
                    <div className="flex flex-wrap justify-center sm:justify-center">
                        <div className="w-full max-w-screen-sm rounded-lg border border-gray-200 bg-white p-10 shadow dark:border-gray-700 dark:bg-gray-800">
                            <h1 className="mb-3 text-xl font-medium">
                                Detail
                            </h1>

                            <div className="mb-6 grid gap-6 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <label
                                        htmlFor="amount"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Amount
                                    </label>
                                    <input
                                        name="amount"
                                        value={formData?.amount ?? ""}
                                        type="number"
                                        id="amount"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        readOnly
                                    />
                                </div>

                                <div className="sm:col-span-1">
                                    <label
                                        htmlFor="reporter"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Requester
                                    </label>
                                    <input
                                        name="reporter"
                                        value={formData?.reporter}
                                        type="text"
                                        id="reporter"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        readOnly
                                    />
                                </div>

                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="description"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData?.description ?? ""}
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    readOnly
                                ></textarea>
                            </div>

                            <Link href="/regular-costs" className="rounded-lg p-3 text-sm text-gray-600 font-medium border">Back</Link>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default DetailRegularCost;