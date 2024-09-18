import { fetchAllDashboardDataApi } from "../../api/dashboard/fetchFinanceCalculationDataApi";

export const fetchAllDashboardDataService =  async() => {
    return await fetchAllDashboardDataApi();
};
  