import { fetchAllDashboardDataApi } from "../../api/dashboard/fetchAllDashboardDataApi";

export const fetchAllDashboardDataService =  async(setData,setLoading) => {
    return await fetchAllDashboardDataApi(setData, setLoading);
};
  