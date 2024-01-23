'use client'

import ItemCountCard from "../../components/Card/ItemCountCard";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";
import OverAllStatusTable from "../../components/Table/OverViewStatusTable/page";
import { useEffect, useState } from "react";
import { fetchAllDashboardData } from "../../services/DashboardService/FetchAllDashboardDataService";
import DepositWithdrawTable from "../../components/Table/DepositWithDrawTable/page";
import RegularCostTable from "../../components/Table/RegularCostTable/page";

const DashboardPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        fetchAllDashboardData(setData, setLoading);

    };

    useEffect(() => {
        fetchData();
    }, []);


    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Dashboard' />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <ItemCountCard count={data.userCount} title={"users"} />
                    <ItemCountCard count={data.reportsCount} title={"reports"} />
                    <ItemCountCard text={data.income} title={"Users"} />
                    <ItemCountCard text={data.outcome} title={"Users"} />
                </div>
            </div>
            <div className="mt-8">
                <h1 className="text-gray-600 font-bold text-lg my-5">Deposit Withdraw Table</h1>
                <DepositWithdrawTable data={data} loading={loading} />
            </div>

            <div className="mt-8">
                <h1 className="text-gray-600 font-bold text-lg my-5">General Outcome Table</h1>
                <RegularCostTable data={data} loading={loading} />
            </div>
        </Layout>
    );
}

export default DashboardPage;