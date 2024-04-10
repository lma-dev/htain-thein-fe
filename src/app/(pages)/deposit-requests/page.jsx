"use client";

import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import DepositWithdrawTable from "../../components/Table/DepositWithDrawTable/page";
import Layout from "../../components/layout";
import { FetchUncheckReportService } from "../../services/ReportService/FetchUncheckReportService";
import Link from "next/link";

const ReportsPage = () => {
  const { data: uncheckReports, isLoading: loading } =
    FetchUncheckReportService();
  return (
    <Layout>
      <div className="flex flex-col">
        <BreadCrumb title="Deposit Requests" />
        <div className="flex justify-end items-center align-middle">
          <Link
            href="/reports/create"
            className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-white bg-gray-900 font-medium transition hover:scale-105 border"
          >
            Create Deposit Request
          </Link>
        </div>
        <DepositWithdrawTable
          uncheckReports={uncheckReports}
          loading={loading}
        />
      </div>
    </Layout>
  );
};

export default ReportsPage;