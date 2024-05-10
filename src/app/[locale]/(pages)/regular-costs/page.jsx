"use client";

import Link from "next/link";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import RegularCostTable from "../../../components/Table/RegularCostTable/page";

import Layout from "../../../components/layout";
import { FetchRegularCostsDataService } from "../../../services/RegularCostService/FetchRegularCostService";
import { parseCookies } from "nookies";
import { UserType } from "../../../enums/UserType";
import { useEffect, useState } from "react";

const RegularCost = ({ params }) => {
  const [userRole, setUserRole] = useState();

  const { data: regularCosts, isLoading: loading } =
    FetchRegularCostsDataService();

  useEffect(() => {
    setUserRole(parseCookies().userRole);
  }, []);
  return (
    <Layout lang={params.locale}>
      <div className="flex flex-col">
        <BreadCrumb lang={params.locale} title="Regular Costs" />
        <div className="flex justify-end items-center align-middle">
          {(userRole === UserType.ADMIN ||
            userRole === UserType.SUPER_ADMIN) && (
            <Link
              href={`/${params.locale}/regular-costs/create`}
              className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-white bg-gray-900 font-medium transition hover:scale-105 border"
            >
              Create Cost
            </Link>
          )}
        </div>
        <RegularCostTable
          regularCosts={regularCosts}
          loading={loading}
          lang={params.locale}
        />
      </div>
    </Layout>
  );
};

export default RegularCost;
