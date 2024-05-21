"use client";

import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import DepositWithdrawTable from "../../../components/Table/DepositWithDrawTable/page";
import Layout from "../../../components/layout";
import { FetchUncheckReportService } from "../../../services/ReportService/FetchUncheckReportService";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ReportsPage = ({ params }) => {
  const { data: uncheckReports, isLoading: loading } =
    FetchUncheckReportService();
  const t = useTranslations("Translation");

  return (
    <Layout lang={params.locale}>
      <div className="flex flex-col">
        <BreadCrumb lang={params.locale} title="Deposit Requests" />
        <div className="flex justify-end items-center align-middle">
          <Link
            href={`/${params.locale}/reports/create`}
            className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-white bg-gray-900 font-medium transition hover:scale-105 border"
          >
            Create Deposit Request
          </Link>
        </div>
        <DepositWithdrawTable
          uncheckReports={uncheckReports}
          loading={loading}
          t={t}
          lang={params.locale}
        />
      </div>
    </Layout>
  );
};

export default ReportsPage;
