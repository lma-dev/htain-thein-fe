'use client'

import Link from "next/link";
import Layout from "../../../components/layout"
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { NormalButton } from "../../../components/Button/Button";
import { createRegularCostService } from "../../../services/RegularCostService/CreateRegularCostService";
import { useState } from "react";
import { parseCookies } from "nookies";
import { useCreateQuery } from "../../../hooks/useCreateQuery";
import { useRouter } from "next/navigation";
import { FetchSingleUserService } from "../../../services/UserService/FetchSingleUserService";

const CreateRegularCost = () => {
    const router=useRouter();
    const userId = parseCookies().userId;
    const { data: userData } = FetchSingleUserService(userId);
    const reporterName = userData?.data?.name || '';
    const createRegularCostMutation = useCreateQuery(createRegularCostService);
    
    const [formData, setFormData] = useState({
        amount: 0,
        description: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedFormData = { ...formData, reporter_id: userId }
        await createRegularCostMutation.mutateAsync(updatedFormData)
        router.push('/regular-costs')
    }
   
    return (
        <Layout>
            <BreadCrumb title="Create Regular Cost" />
            <div className="flex justify-center align-middle mx-auto min-h-fit">
                <div className="w-1/2">

                    <form>
                        <div className="mb-6">
                            <label
                                htmlFor="amount"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                Amount
                            </label>
                            <input
                                name="amount"
                                type="number"
                                value={formData.amount}
                                onChange={handleInputChange}
                                id="amount"
                                min={1000}
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="reporter"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                Reporter
                            </label>
                            <input
                                name="reporter"
                                value={reporterName}
                                onChange={handleInputChange}
                                type="text"
                                id="reporter"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                readOnly
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                id="message"
                                rows={4}
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                placeholder="Place your reason ... "></textarea>
                        </div>

                        <div className="flex justify-between">
                            <Link href={'/regular-costs'} className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5">Back</Link>
                            <NormalButton text="Create" onClick={handleSubmit} />
                        </div>
                    </form>
                </div>
            </div>
        </Layout >
    )
}

export default CreateRegularCost
