"use client";

import ItemCountCard from "../../../components/Card/ItemCountCard";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Layout from "../../../components/layout";

import { FetchUsersService } from "../../../services/UserService/FetchUsersService";
import { FetchReportsService } from "../../../services/ReportService/FetchReportsService";
import { FetchFinanceCalculationService } from "../../../services/FinanceService/FetchFinanceCalculationService";
import { FetchRegularCostsDataService } from "../../../services/RegularCostService/FetchRegularCostService";
import { checkIncomeAndOutCome } from "../../../utils/checkIncomeAndOutCome";

import RegularCostTable from "../../../components/Table/RegularCostTable/page";
import OverAllStatusCard from "../../../components/Card/OverAllStatusCard";
import SkeletonAnimation from "../../../components/Skeleton/SkeletonAnimation";
import { useTranslations } from "next-intl";

const DashboardPage = ({ params }) => {
  const { data: users, isLoading: loadingUsers } = FetchUsersService();
  const { data: reports, isLoading: loadingReports } = FetchReportsService();
  const { data: calculations, isLoading: loadingCalculations } =
    FetchFinanceCalculationService();
  const { data: regularCosts, isLoading: loadingGeneralOutcome } =
    FetchRegularCostsDataService();

  const overallLoading =
    loadingUsers ||
    loadingReports ||
    loadingCalculations ||
    loadingGeneralOutcome;

  let userCount = users?.meta?.totalItems;
  let reportsCount = reports?.meta?.totalItems;
  let income = calculations?.data?.income;
  let outcome = calculations?.data?.outcome;
  let incomePercentage = calculations?.data?.incomeRate ?? 0;
  let outcomePercentage = calculations?.data?.outcomeRate ?? 0;
  const t = useTranslations("Translation");

  const { isIncomeGreaterThanOutcome } = checkIncomeAndOutCome(
    incomePercentage,
    outcomePercentage
  );
  return (
    <Layout lang={params.locale}>
      <div className="flex flex-col">
        <BreadCrumb lang={params.locale} title="Dashboard" />

        {overallLoading ? (
          <SkeletonAnimation />
        ) : (
          // Actual content when data is available
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ItemCountCard count={userCount} title={"users"} lang={t} />
              <ItemCountCard count={reportsCount} title={"reports"} lang={t} />
              <ItemCountCard
                text={income}
                title={"income"}
                rate={incomePercentage}
                financialStatus={isIncomeGreaterThanOutcome}
                lang={t}
              />
              <ItemCountCard
                text={outcome}
                title={"outcome"}
                rate={outcomePercentage}
                financialStatus={isIncomeGreaterThanOutcome}
                lang={t}
              />
            </div>
            <div>
              <div className="mt-8">
                <OverAllStatusCard calculations={calculations} t={t} />
              </div>

              <div className="mt-8">
                <h1 className="text-gray-600 font-bold text-lg my-5">
                  {t("generalOutComeTable")}
                </h1>
                <RegularCostTable
                  regularCosts={regularCosts}
                  loading={overallLoading}
                  t={t}
                  lang={params.locale}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default DashboardPage;
