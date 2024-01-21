import { fetchAllData } from "../../libs/ApiRequestHelper";

export const fetchRegularCostsData = async () => {
 return await fetchAllData('/general-outcome');
  };
  