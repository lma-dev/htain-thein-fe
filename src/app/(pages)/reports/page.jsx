"use client";

import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ReportTable from "../../components/Table/ReportTable/page";
import Layout from "../../components/layout";
import { FetchReportsService } from "../../services/ReportService/FetchReportsService";
import ReportFilterInputField from "../../components/filter/ReportFilterInputField";
import Link from "next/link";
import { useState } from "react";

const ReportsPage = () => {
  const [generalSearch, setGeneralSearch] = useState("");
  const [amount, setAmount] = useState("");
  const [confirmStatus, setConfirmStatus] = useState("");
  const [type, setType] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const { data: reports, isLoading: loading } = FetchReportsService(
    generalSearch,
    amount,
    confirmStatus,
    type,
    createdAt
  );
  return (
    <Layout>
      <div className="flex flex-col">
        <BreadCrumb title="Reports" />
        <div className="flex justify-between items-center align-middle">
          <div>
            <ReportFilterInputField
              generalSearch={generalSearch}
              amount={amount}
              confirmStatus={confirmStatus}
              type={type}
              createdAt={createdAt}
              onGeneralSearchChange={setGeneralSearch}
              onAmountChange={setAmount}
              onConfirmStatusChange={setConfirmStatus}
              onTypeChange={setType}
              onCreatedAtChange={setCreatedAt}
            />
          </div>
          <Link
            href="/reports/create"
            className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-white bg-gray-900 font-medium transition hover:scale-105 border"
          >
            Create Reports
          </Link>
        </div>
        <ReportTable reports={reports} loading={loading} />
      </div>
    </Layout>
  );
};

export default ReportsPage;
