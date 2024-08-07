"use client";

import BreadCrumb from "../../../components/BreadCrumb/Breadcrumb";
import ReportTable from "../../../components/Table/ReportTable/page";
import Layout from "../../../components/layout";
import { FetchReportsService } from "../../../services/ReportService/FetchReportsService";
import ReportFilterInputField from "../../../components/filter/ReportFilterInputField";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "../../../context/LangContext";

const ReportsPage = () => {
  const [generalSearch, setGeneralSearch] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  const [confirmStatus, setConfirmStatus] = useState<number>();
  const [type, setType] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [createdAt, setCreatedAt] = useState<string>("");
  const t = useTranslations("Translation");
  const { currentLocale } = useLocale();

  const { data: reports, isLoading: loading } = FetchReportsService(
    generalSearch,
    amount,
    confirmStatus,
    type,
    createdAt,
    page
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <BreadCrumb title="Reports" />
        <div className="flex justify-between items-center align-middle">
          <div>
            <ReportFilterInputField
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
            href={`/${currentLocale}/reports/create`}
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
