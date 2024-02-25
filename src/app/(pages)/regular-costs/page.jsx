'use client'

import { useQuery } from '@tanstack/react-query'
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import RegularCostTable from "../../components/Table/RegularCostTable/page";

import Layout from "../../components/layout";
import { fetchRegularCostsDataService } from "../../services/RegularCostService/FetchRegularCostService";

const RegularCost = () => {
    const { data:regularCosts, isLoading: loading} =  useQuery({ queryKey: ['regularCosts'], queryFn: fetchRegularCostsDataService,cached: true})

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