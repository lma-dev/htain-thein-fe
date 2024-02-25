'use client'

import { useQuery } from '@tanstack/react-query'
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ReportTable from "../../components/Table/ReportTable/page";
import Layout from "../../components/layout";
import { fetchReportsDataService } from "../../services/ReportService/FetchReportsService";

const ReportsPage = () => {
    const { data:reports, isLoading: loading} =  useQuery({ queryKey: ['reports'], queryFn: fetchReportsDataService,cached: true})


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