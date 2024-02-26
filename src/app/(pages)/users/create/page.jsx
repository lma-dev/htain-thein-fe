'use client'

import Link from "next/link";
import Layout from "../../../components/layout"
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { NormalButton } from "../../../components/Button/Button";
import { createUserService } from "../../../services/UserService/CreateUserService";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {useCreateQuery} from '../../../hooks/useCreateQuery'
const CreateUser = () => {
    const router= useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        accountStatus: 'ACTIVE',
        role: 'Member',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit =  (e) => {
        e.preventDefault();
        createUserMutation.mutate(formData);
        router.push('/users');

    };

    const createUserMutation = useMutation({
        mutationFn: (newUserData) => {
          return createUserService(newUserData)
        },
      })

    return (
        <Layout>
            <BreadCrumb title='Create User' />
            <div className="flex justify-center align-middle mx-auto min-h-fit">
                <div className="w-1/2">

                    <form>
                        <div>
                            <div className="mb-6">
                                <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                    Full Name
                                </label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    type="text"
                                    id="fullName"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    type="email"
                                    id="email"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    type="password"
                                    id="password"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="role" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                    Role
                                </label>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    id="role"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required
                                >
                                    <option value="">Please select</option>
                                    <option value="SuperAdmin">SuperAdmin</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Member">Member</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="accountStatus" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                    Account Status
                                </label>
                                <select
                                    name="accountStatus"
                                    value={formData.accountStatus}
                                    onChange={handleInputChange}
                                    id="accountStatus"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required
                                >
                                    <option value="">Please select</option>
                                    <option value="ACTIVE">Active</option>
                                    <option value="SUSPENDED">Suspend</option>
                                </select>
                            </div>
                            <div className="flex justify-between">
                                <Link href={'/users'} className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5">Back</Link>
                                <NormalButton text="create" onClick={handleSubmit} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </Layout>
    )
}

export default CreateUser;