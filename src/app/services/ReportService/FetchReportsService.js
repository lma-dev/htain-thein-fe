import { fetchAllData } from "../../libs/ApiRequestHelper";

export const fetchReportsData = async () => {
 return await fetchAllData('/reports');
  };
  