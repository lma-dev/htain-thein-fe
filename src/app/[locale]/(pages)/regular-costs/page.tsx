"use client";

import Link from "next/link";
import BreadCrumb from "../../../components/BreadCrumb/Breadcrumb";
import RegularCostTable from "../../../components/Table/RegularCostTable/RegularCostTable";

import Layout from "../../../components/layout";
import { FetchRegularCostsDataService } from "../../../services/RegularCostService/FetchRegularCostService";
import { parseCookies } from "nookies";
import { UserRole } from "../../../enums/UserRole";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "../../../context/LangContext";

const RegularCost = () => {
  const [userRole, setUserRole] = useState<string>();
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();
  const [page, setPage] = useState<number>(1);

  const { data: regularCosts, isLoading: loading } =
    FetchRegularCostsDataService();

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    setUserRole(parseCookies().userRole);
  }, []);
  return (
    <Layout>
      <div className="flex flex-col">
        <BreadCrumb title="Regular Costs" />
        <div className="flex justify-end items-center align-middle">
          {(userRole === UserRole.ADMIN ||
            userRole === UserRole.SUPER_ADMIN) && (
            <Link
              href={`/${currentLocale}/regular-costs/create`}
              className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-white bg-gray-900 font-medium transition hover:scale-105 border"
            >
              {t("createCost")}
            </Link>
          )}
        </div>
        <RegularCostTable
          regularCosts={regularCosts}
          loading={loading}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default RegularCost;
