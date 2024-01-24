'use client'

import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ReportTable from "../../components/Table/ReportTable/page";

import Layout from "../../components/layout";
import { fetchReportsData } from "../../services/ReportService/FetchReportsService";

const ReportsPage = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchReports = async () => {
        const res = await fetchReportsData();
        setReports(res.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchReports();
    }, [])


    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Reports' />
                <ReportTable data={reports} fetchReports={fetchReports} loading={loading} />
            </div>
        </Layout>
    );
}

export default ReportsPage;