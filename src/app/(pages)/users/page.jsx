import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import UserTable from "../../components/Table/UserTable/page";

import Layout from "../../components/layout";


const UsersPage = () => {

    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Users' />
                <UserTable />
            </div>
        </Layout>
    );
}

export default UsersPage;