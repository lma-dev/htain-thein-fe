import ItemCountCard from "../../components/Card/ItemCountCard";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";

const DashboardPage = () => {

    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Dashboard' />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <ItemCountCard count="100" title={"users"} />
                    <ItemCountCard count="100" title={"reports"} />
                    <ItemCountCard count="100" title={"Users"} />
                    <ItemCountCard count="100" title={"Users"} />
                </div>
            </div>
        </Layout>
    );
}

export default DashboardPage;