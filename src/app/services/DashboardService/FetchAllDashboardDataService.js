import { fetchAllDashboardDataApi } from "../../api/dashboard/fetchAllDashboardDataApi";

export const fetchAllDashboardDataService =  async() => {
    return await fetchAllDashboardDataApi();
};
  