'use client'
import Link from "next/link";
import Layout from "../../../../components/layout"
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
import { NormalButton } from "../../../../components/Button/Button";
import EditReportService from "../../../../services/ReportService/EditReportService";
import { useEffect, useState } from "react";
import { fetchSingleData } from "../../../../libs/ApiRequestHelper";
import { useParams } from 'next/navigation'

const EditReport = () => {
    const [formData, setFormData] = useState({
        amount: '',
        description: '',
        type: '',
        confirmStatus: '',
        reporter: '',
        verifier: '',
    });
    const params = useParams();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await EditReportService(params.reportId, formData);
    };

    const fetchData = async () => {
        const res = await fetchSingleData(`/reports/${params.reportId}`);
        setFormData(res.data);
        console.log(res.data);

    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Layout>
            <BreadCrumb title='Edit Report' />
            <div className="flex justify-center align-middle mx-auto min-h-fit">
                <div className="w-1/2">
                    <div className="flex flex-wrap justify-center sm:justify-center">
                        <div className="w-full max-w-screen-sm rounded-lg border border-gray-200 bg-white p-10 shadow dark:border-gray-700 dark:bg-gray-800">
                            <h1 className="mb-3 text-xl font-medium">
                                Edit
                            </h1>

                            <form>
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
                                            onChange={handleInputChange}
                                            type="number"
                                            id="amount"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div className="sm:col-span-1">
                                        <label
                                            htmlFor="type"
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Type
                                        </label>
                                        <select
                                            name="type"
                                            defaultValue={formData?.type}
                                            id="type"
                                            onChange={handleInputChange}
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                            <option defaultValue={formData?.type} disabled>
                                                {formData?.type}
                                            </option>
                                            <option value="INCOME"> INCOME</option>
                                            <option value="EXPENSE"> EXPENSE</option>
                                        </select>
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
                                            value={formData?.reporter?.name ?? ""}
                                            onChange={handleInputChange}
                                            type="text"
                                            id="reporter"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            required
                                            readOnly
                                        />
                                    </div>
                                    <div className="sm:col-span-1">
                                        <label
                                            htmlFor="verifier"
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Verifier
                                        </label>
                                        <input
                                            name="verifier"
                                            value={formData?.verifier?.name ?? ""}
                                            onChange={handleInputChange}
                                            type="text"
                                            id="verifier"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            required
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData?.description ?? ""}
                                        onChange={handleInputChange}
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        placeholder="Write your thoughts here..."
                                    ></textarea>
                                </div>

                                <div className="flex justify-between">
                                    <Link href={'/reports'} className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5">Back</Link>

                                    <NormalButton
                                        onClick={handleSubmit}
                                        text={'Update'}
                                        className="inline-block w-full sm:w-auto rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    />
                                </div>
                            </form>
                            <div className="mt-5">
                                <span className="text-gray-600 font-light"> You can check edited histories from here ,</span>
                                <Link href={`/reports/${params.reportId}/history`} className="sm:w-auto text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Check History
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default EditReport;