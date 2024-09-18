"use client";

import BreadCrumb from "../../../components/BreadCrumb/Breadcrumb";
import DepositWithdrawTable from "../../../components/Table/DepositWithDrawTable/DepositWithdrawTable";
import Layout from "../../../components/layout";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "../../../context/LangContext";
import { FetchUncheckReportService } from "../../../services/ReportService/FetchUncheckReportService";
import { useEffect, useState } from "react";

const DepositReportsPage = () => {
  const { currentLocale } = useLocale();
  const t = useTranslations("Translation");
  const [page, setPage] = useState<number>(1);

  const { data: uncheckReports, isLoading: loading } =
    FetchUncheckReportService();

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <BreadCrumb title="Deposit Requests" />
        <div className="flex justify-end items-center align-middle">
          <Link
            href={`/${currentLocale}/reports/create`}
            className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-white bg-gray-900 font-medium transition hover:scale-105 border"
          >
            {t("createReports")}
          </Link>
        </div>
        <DepositWithdrawTable
          uncheckReports={uncheckReports?.data}
          loading={loading}
          handlePageChange={handlePageChange}
          meta={uncheckReports?.meta}
        />
      </div>
    </Layout>
  );
};

export default DepositReportsPage;
