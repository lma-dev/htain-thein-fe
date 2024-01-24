'use client'

import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import RegularCostTable from "../../components/Table/RegularCostTable/page";

import Layout from "../../components/layout";
import { fetchRegularCostsData } from "../../services/RegularCostService/FetchRegularCostService";

const RegularCost = () => {
    const [regularCosts, setRegularCosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRegularCosts = async () => {
        const res = await fetchRegularCostsData();
        setRegularCosts(res.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchRegularCosts();
    }, [])


    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Regular Costs' />
                <RegularCostTable data={regularCosts} fetchRegularCosts={fetchRegularCosts} loading={loading} />
            </div>
        </Layout>
    );
}

export default RegularCost;