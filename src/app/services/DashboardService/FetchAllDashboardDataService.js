import { fetchAllDataApi } from "../../api/dashboard/fetchAllDataApi";

export const fetchAllDashboardData =  async(setData,setLoading) => {
    return await fetchAllDataApi(setData, setLoading);
};
  