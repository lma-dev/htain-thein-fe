import BreadCrumb from "@/app/components/Breadcrumb/Breadcrumb";
import Table from "@/app/components/Table/page";
import Layout from "@/app/components/layout";


const UsersPage = () => {

    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Users' />
                <Table />
            </div>
        </Layout>
    );
}

export default UsersPage;