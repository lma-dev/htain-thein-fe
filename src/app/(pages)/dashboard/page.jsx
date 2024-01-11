import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";

const DashboardPage = () => {

    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Dashboard' />
            </div>
        </Layout>
    );
}

export default DashboardPage;