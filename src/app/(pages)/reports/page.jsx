'use client'

import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ReportTable from "../../components/Table/ReportTable/page";
import Layout from "../../components/layout";
import { FetchReportsService } from "../../services/ReportService/FetchReportsService";

const ReportsPage = () => {
    const { data:reports, isLoading: loading} =  FetchReportsService()

    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Reports' />
                <ReportTable reports={reports} loading={loading} />
            </div>
        </Layout>
    );
}

export default ReportsPage;