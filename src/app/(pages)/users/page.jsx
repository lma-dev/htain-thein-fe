'use client'

import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import UserTable from "../../components/Table/UserTable/page";
import { PlusCircle } from 'lucide-react';
import Layout from "../../components/layout";
import { fetchUsersService } from "../../services/UserService/fetchUsersService";
import Link from "next/link";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        const res = await fetchUsersService();
        setUsers(res.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, [])


    return (
        <Layout>
            <div className="flex flex-col">
                <div className="flex justify-between items-center align-middle">
                    <BreadCrumb title='Users' />
                    <Link href="/users/create" className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-gray-300 bg-gray-900 font-medium transition hover:scale-105 border">
                        Create User
                    </Link>
                </div>
                <UserTable data={users} fetchUsers={fetchUsers} loading={loading} />
            </div>
        </Layout>
    );
}

export default UsersPage;