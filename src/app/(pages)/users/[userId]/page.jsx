import Link from "next/link";
import Layout from "../../../components/layout"
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { NormalButton } from "../../../components/Button/Button";
import EditUserService from "../../../services/UserService/EditUserService";

const EditUser = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await EditUserService(formData);

    };
    return (
        <Layout>
            <BreadCrumb title='Edit User' />
            <div className="flex justify-center align-middle mx-auto min-h-fit">
                <div className="w-1/2">
                    <div>
                        {/* Email Input */}
                        <div className="mb-5">

                            <div>
                                <label for="UserEmail" class="block text-xs font-medium text-gray-500"> Email </label>

                                <input
                                    type="email"
                                    id="UserEmail"
                                    placeholder="john@rhcp.com"
                                    class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="mb-5">
                            <div>
                                <label htmlFor="Password" className="block text-xs font-medium text-gray-500"> Password </label>

                                <input
                                    type="password"
                                    id="Password"
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3"
                                />
                            </div>
                        </div>

                        {/* Role Dropdown */}
                        <div className="mb-5">
                            <label htmlFor="Role" className="block text-xs font-medium text-gray-500">
                                Role
                            </label>
                            <select
                                name="role"
                                id="role"
                                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-500 sm:text-sm p-3"
                            >
                                <option value="">Please select</option>
                                <option value="JM">Normal</option>
                                <option value="JM">Admin</option>
                                <option value="SRV">Super Admin</option>
                            </select>
                        </div>

                        {/* Account Status Dropdown */}
                        <div className="mb-5">
                            <label htmlFor="AccountStatus" className="block text-xs font-medium text-gray-500">
                                Account Status
                            </label>
                            <select
                                name="AccountStatus"
                                id="AccountStatus"
                                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-500 sm:text-sm p-3"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        {/* Description Textarea */}
                        <div className="mb-5">
                            <label htmlFor="description" className="block text-xs font-medium text-gray-500">
                                Description
                            </label>
                            <textarea
                                id="description"
                                className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm  p-3"
                                rows="4"
                                placeholder="Enter any additional description notes..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex">
                        <Link href={'/users'} className="block rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border mr-5">Back</Link>
                        <NormalButton text="Save" onClick={handleSubmit} />
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default EditUser;