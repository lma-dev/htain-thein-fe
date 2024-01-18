'use client'
import Link from "next/link";
import Layout from "../../../components/layout"
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { NormalButton } from "../../../components/Button/Button";
import EditUserService from "../../../services/UserService/EditUserService";
import { useEffect, useState } from "react";
import { fetchSingleData } from "../../../libs/ApiRequestHelper";
import { useParams } from 'next/navigation'

const EditUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        accountStatus: '',
    });
    const params = useParams();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await EditUserService(params.userId, formData);
    };

    const fetchData = async () => {
        const res = await fetchSingleData(`/users/${params.userId}`);
        setFormData(res.data);
        console.log(res.data);

    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Layout>
            <BreadCrumb title='Edit User' />
            <div className="flex justify-center align-middle mx-auto min-h-fit">
                <div className="w-1/2">
                    <form>

                        <div className="mb-5">

                            <label htmlFor="Name" className="block text-xs font-medium text-gray-500"> Name </label>

                            <input
                                type="name"
                                id="name"
                                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />

                        </div>

                        {/* Email Input */}
                        <div className="mb-5">

                            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-500"> Email </label>

                            <input
                                type="email"
                                id="UserEmail"
                                placeholder="john@rhcp.com"
                                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />

                        </div>

                        <div className="mb-5">

                            <div>
                                <label htmlFor="Password" className="block text-xs font-medium text-gray-500"> Password </label>

                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        {/* Role Dropdown */}
                        <div className="mb-5">
                            <label htmlFor="Role" className="block text-xs font-medium text-gray-500">
                                Role
                            </label>
                            <select
                                id="role"
                                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-500 sm:text-sm p-3"
                                name="role"
                                defaultValue={formData?.role}
                                onChange={handleInputChange}
                            >
                                <option defaultValue={formData?.role} disabled>
                                    {formData?.role}
                                </option>
                                <option value="Member">Member</option>
                                <option value="Admin">Admin</option>
                                <option value="SuperAdmin">Super Admin</option>
                            </select>
                        </div>

                        {/* Account Status Dropdown */}
                        <div className="mb-5">
                            <label htmlFor="AccountStatus" className="block text-xs font-medium text-gray-500">
                                Account Status
                            </label>
                            <select
                                id="AccountStatus"
                                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-500 sm:text-sm p-3"
                                name="accountStatus"
                                defaultValue={formData?.accountStatus}
                                onChange={handleInputChange}
                            >
                                <option defaultValue={formData?.accountStatus} disabled>
                                    {formData?.accountStatus}
                                </option>
                                <option value="ACTIVE">ACTIVE</option>
                                <option value="SUSPENDED">SUSPENDED</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <div className="flex">
                            <Link href={'/users'} className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5">Back</Link>
                            <NormalButton
                                onClick={handleSubmit}
                                text={'Update'}
                                className="inline-block w-full sm:w-auto rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            />
                        </div>
                    </form>
                </div>
            </div>

        </Layout>
    )
}

export default EditUser;