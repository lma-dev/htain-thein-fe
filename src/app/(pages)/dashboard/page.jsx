'use client'


import ItemCountCard from "../../components/Card/ItemCountCard";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";
import { useQueries, useQuery } from '@tanstack/react-query';

import { fetchUsersService } from "../../services/UserService/fetchUsersService";
import { fetchReportsDataService } from "../../services/ReportService/fetchReportsService";
import {fetchFinanceCalculationService} from "../../services/FinanceService/fetchFinanceCalculationService";
import {fetchUncheckReportService} from "../../services/ReportService/fetchUncheckReportService";
import { fetchRegularCostsDataService } from "../../services/RegularCostService/FetchRegularCostService";

import DepositWithdrawTable from "../../components/Table/DepositWithDrawTable/page";
import RegularCostTable from "../../components/Table/RegularCostTable/page";
import OverAllStatusCard from "../../components/Card/OverAllStatusCard";
import SkeletonAnimation from "../../components/Animation/SkeletonAnimation";

const DashboardPage = () => {
   
    // const [users, reports, calculations, uncheckReports, regularCosts] = useQueries([
    //     { queryKey: ['users'], queryFn: fetchUsersService,cached: true},
    //     { queryKey: ['reports'], queryFn: fetchReportsDataService,cached: true},
    //     { queryKey: ['calculations'], queryFn: fetchFinanceCalculationService,cached: true},
    //     { queryKey: ['uncheck-reports'], queryFn: fetchUncheckReportService,cached: true},
    //     { queryKey: ['general-outcome'], queryFn: fetchRegularCostsDataService,cached: true}
    //   ]);
    
   const { data:users, isLoading: loading} =  useQuery({ queryKey: ['users'], queryFn: fetchUsersService,cached: true})
    const { data:reports, isLoading: loadingReports} =  useQuery({ queryKey: ['reports'], queryFn: fetchReportsDataService,cached: true})
    const { data:calculations, isLoading: loadingCalculations} =  useQuery({ queryKey: ['calculations'], queryFn: fetchFinanceCalculationService,cached: true})
    const { data:uncheckReports, isLoading: loadingUncheckReports} =  useQuery({ queryKey: ['uncheck-reports'], queryFn: fetchUncheckReportService,cached: true})
    const { data:regularCosts, isLoading: loadingGeneralOutcome} =  useQuery({ queryKey: ['general-outcome'], queryFn: fetchRegularCostsDataService,cached: true})

    let userCount = users?.meta?.totalItems
    let reportsCount = reports?.meta?.totalItems
    let income = calculations?.data?.income
    let outcome = calculations?.data?.outcome

    console.log(calculations)
    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='Dashboard' />

                {loading ? (
                    <SkeletonAnimation />
                ) : (
                    // Actual content when data is available
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <ItemCountCard count={userCount} title={"users"} />
                        <ItemCountCard count={reportsCount} title={"reports"} />
                        <ItemCountCard text={income} title={"income"} />
                        <ItemCountCard text={outcome} title={"outcome"} />
                    </div>
                )}

                {!loading && (
                    <div className="mt-8">
                        <OverAllStatusCard calculations={calculations} loading={loading} />
                    </div>
                )}

                <div className="mt-8">
                    <h1 className="text-gray-600 font-bold text-lg my-5">Deposit Withdraw Table</h1>
                    <DepositWithdrawTable uncheckReports={uncheckReports} loading={loading} />
                </div>
                <div className="mt-8">
                    <h1 className="text-gray-600 font-bold text-lg my-5">General Outcome Table</h1>
                    <RegularCostTable regularCosts={regularCosts} loading={loading} tableHeight='h-80' />
                </div>

            </div>
        </Layout >
    );
}

export default DashboardPage;