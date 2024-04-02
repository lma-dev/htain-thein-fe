"use client";

import ItemCountCard from "../../components/Card/ItemCountCard";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";

import { FetchUsersService } from "../../services/UserService/FetchUsersService";
import { FetchReportsService } from "../../services/ReportService/FetchReportsService";
import { FetchFinanceCalculationService } from "../../services/FinanceService/FetchFinanceCalculationService";
import { FetchUncheckReportService } from "../../services/ReportService/FetchUncheckReportService";
import { FetchRegularCostsDataService } from "../../services/RegularCostService/FetchRegularCostService";
import { checkIncomeAndOutCome } from "../../utils/checkIncomeAndOutCome";

import DepositWithdrawTable from "../../components/Table/DepositWithDrawTable/page";
import RegularCostTable from "../../components/Table/RegularCostTable/page";
import OverAllStatusCard from "../../components/Card/OverAllStatusCard";
import SkeletonAnimation from "../../components/Skeleton/SkeletonAnimation";

const DashboardPage = () => {
  const { data: users, isLoading: loadingUsers } = FetchUsersService();
  const { data: reports, isLoading: loadingReports } = FetchReportsService();
  const { data: calculations, isLoading: loadingCalculations } =
    FetchFinanceCalculationService();
  const { data: uncheckReports, isLoading: loadingUncheckReports } =
    FetchUncheckReportService();
  const { data: regularCosts, isLoading: loadingGeneralOutcome } =
    FetchRegularCostsDataService();

  const overallLoading =
    loadingUsers ||
    loadingReports ||
    loadingCalculations ||
    loadingUncheckReports ||
    loadingGeneralOutcome;

  let userCount = users?.meta?.totalItems;
  let reportsCount = reports?.meta?.totalItems;
  let income = calculations?.data?.income;
  let outcome = calculations?.data?.outcome;
  let incomePercentage = calculations?.data?.incomeRate ?? 0;
  let outcomePercentage = calculations?.data?.outcomeRate ?? 0;

  const { isIncomeGreaterThanOutcome } = checkIncomeAndOutCome(
    incomePercentage,
    outcomePercentage
  );
  return (
    <Layout>
      <div className="flex flex-col">
        <BreadCrumb title="Dashboard" />

        {overallLoading ? (
          <SkeletonAnimation />
        ) : (
          // Actual content when data is available
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ItemCountCard count={userCount} title={"users"} />
              <ItemCountCard count={reportsCount} title={"reports"} />
              <ItemCountCard
                text={income}
                title={"income"}
                rate={incomePercentage}
                financialStatus={isIncomeGreaterThanOutcome}
              />
              <ItemCountCard
                text={outcome}
                title={"outcome"}
                rate={outcomePercentage}
                financialStatus={isIncomeGreaterThanOutcome}
              />
            </div>
            <div>
              <div className="mt-8">
                <OverAllStatusCard calculations={calculations} />
              </div>

              <div className="mt-8">
                <h1 className="text-gray-600 font-bold text-lg my-5">
                  Deposit Withdraw Table
                </h1>
                <DepositWithdrawTable uncheckReports={uncheckReports} />
              </div>
              <div className="mt-8">
                <h1 className="text-gray-600 font-bold text-lg my-5">
                  General Outcome Table
                </h1>
                <RegularCostTable
                  regularCosts={regularCosts}
                  loading={overallLoading}
                  tableHeight="h-80"
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
