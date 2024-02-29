'use client'

import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import RegularCostTable from "../../components/Table/RegularCostTable/page";

import Layout from "../../components/layout";
import { FetchRegularCostsDataService } from "../../services/RegularCostService/FetchRegularCostService";

const RegularCost = () => {
    const { data:regularCosts, isLoading: loading} =  FetchRegularCostsDataService()

    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Regular Costs' />
                <RegularCostTable regularCosts={regularCosts}  loading={loading} />
            </div>
        </Layout>
    );
}

export default RegularCost;