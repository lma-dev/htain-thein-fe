import { fetchSingleRegularCostApi } from "../../api/regular-cost/fetchSingleRegularCostApi";
import { useFetchQueryWithParams } from "../../hooks/useFetchQuery";

export const FetchSingleRegularCostService = (reportId: number) => {
  return useFetchQueryWithParams(
    ["general-outcome"],
    fetchSingleRegularCostApi,
    reportId
  );
};
