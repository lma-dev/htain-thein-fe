'use client'

import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import UserTable from "../../components/Table/UserTable/page";

import Layout from "../../components/layout";
import { fetchUsersService } from "../../services/UserService/fetchUsersService";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await fetchUsersService();
        setUsers(res.data);
    };

    useEffect(() => {
        fetchUsers();
    }, [])


    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Users' />
                <UserTable data={users} fetchUsers={fetchUsers} />
            </div>
        </Layout>
    );
}

export default UsersPage;