'use client'

import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import UserTable from "../../components/Table/UserTable/page";

import Layout from "../../components/layout";
import { fetchAllData } from "../../libs/ApiRequestHelper";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await fetchAllData('/users');
        setUsers(res.data);
        console.log(res.data);
    };

    useEffect(() => {
        fetchUsers();
    }, [])


    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Users' />
                <UserTable data={users} />
            </div>
        </Layout>
    );
}

export default UsersPage;