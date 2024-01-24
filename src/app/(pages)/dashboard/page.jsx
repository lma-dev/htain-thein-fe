'use client'

import ItemCountCard from "../../components/Card/ItemCountCard";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";
import { useEffect, useState } from "react";
import { fetchAllDashboardData } from "../../services/DashboardService/FetchAllDashboardDataService";
import DepositWithdrawTable from "../../components/Table/DepositWithDrawTable/page";
import RegularCostTable from "../../components/Table/RegularCostTable/page";
import OverAllStatusCard from "../../components/Card/OverAllStatusCard";
import SkeletonAnimation from "../../components/Animation/SkeletonAnimation";

const DashboardPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Set initial loading state to true
    const fetchData = () => {
        fetchAllDashboardData(setData, setLoading);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Dashboard' />

                {loading ? (
                    <SkeletonAnimation />
                ) : (
                    // Actual content when data is available
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <ItemCountCard count={data.userCount} title={"users"} />
                        <ItemCountCard count={data.reportsCount} title={"reports"} />
                        <ItemCountCard text={data.income} title={"income"} />
                        <ItemCountCard text={data.outcome} title={"outcome"} />
                    </div>
                )}

                {!loading && (
                    <div className="mt-8">
                        <OverAllStatusCard balanceData={data.balanceData} loading={loading} />
                    </div>
                )}

                <div className="mt-8">
                    <h1 className="text-gray-600 font-bold text-lg my-5">Deposit Withdraw Table</h1>
                    <DepositWithdrawTable data={data.uncheckReports} loading={loading} fetchData={fetchData} />
                </div>
                <div className="mt-8">
                    <h1 className="text-gray-600 font-bold text-lg my-5">General Outcome Table</h1>
                    <RegularCostTable data={data.regularData} loading={loading} fetchData={fetchData} tableHeight='h-80' />
                </div>

            </div>
        </Layout >
    );
}

export default DashboardPage;