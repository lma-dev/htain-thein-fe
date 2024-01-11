import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ReportTable from "../../components/Table/ReportTable/page";


import Layout from "../../components/layout";


const ReportsPage = () => {

    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Reports' />
                <ReportTable />
            </div>
        </Layout>
    );
}

export default ReportsPage;