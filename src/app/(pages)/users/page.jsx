'use client'

import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import UserTable from "../../components/Table/UserTable/page";
import { useQuery } from '@tanstack/react-query'
import Layout from "../../components/layout";
import { fetchUsersService } from "../../services/UserService/fetchUsersService";
import Link from "next/link";

const UsersPage = () => {

    const { data:users, isLoading: loading} =  useQuery({ queryKey: ['users'], queryFn: fetchUsersService,cached: true})
   
    return (
        <Layout>
            <div className="flex flex-col">
                <div className="flex justify-between items-center align-middle">
                    <BreadCrumb title='Users' />
                    <Link href="/users/create" className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-gray-300 bg-gray-900 font-medium transition hover:scale-105 border">
                        Create User
                    </Link>
                </div>
                <UserTable users={users} loading={loading} />
            </div>
        </Layout>
    );
}

export default UsersPage;