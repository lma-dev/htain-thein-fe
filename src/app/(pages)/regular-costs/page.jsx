'use client'

import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import RegularCostTable from "../../components/Table/RegularCostTable/page";

import Layout from "../../components/layout";
import { fetchRegularCostsData } from "../../services/RegularCostService/FetchRegularCostService";

const RegularCost = () => {
    const [regularCosts, setRegularCosts] = useState([]);

    const fetchRegularCosts = async () => {
        const res = await fetchRegularCostsData();
        setRegularCosts(res.data);
        console.log(res.data);
    };

    useEffect(() => {
        fetchRegularCosts();
    }, [])


    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Regular Costs' />
                <RegularCostTable data={regularCosts} fetchRegularCosts={fetchRegularCosts} />
            </div>
        </Layout>
    );
}

export default RegularCost;