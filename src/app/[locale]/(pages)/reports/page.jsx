"use client";

import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import ReportTable from "../../../components/Table/ReportTable/page";
import Layout from "../../../components/layout";
import { FetchReportsService } from "../../../services/ReportService/FetchReportsService";
import ReportFilterInputField from "../../../components/filter/ReportFilterInputField";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

const ReportsPage = ({ params }) => {
  const [generalSearch, setGeneralSearch] = useState("");
  const [amount, setAmount] = useState("");
  const [confirmStatus, setConfirmStatus] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [createdAt, setCreatedAt] = useState("");
  const t = useTranslations("Translation");
  const { data: reports, isLoading: loading } = FetchReportsService(
    generalSearch,
    amount,
    confirmStatus,
    type,
    createdAt,
    page
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

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
              t={t}
            />
          </div>
          <Link
            href={`/${params.locale}/reports/create`}
            className="inline-flex mr-1.5 rounded-lg p-3 text-sm text-white bg-gray-900 font-medium transition hover:scale-105 border"
          >
            {t("createReports")}
          </Link>
        </div>
        <ReportTable
          reports={reports}
          loading={loading}
          onPageChange={handlePageChange}
          t={t}
        />
      </div>
    </Layout>
  );
};

export default ReportsPage;
