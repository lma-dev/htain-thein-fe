import { fetchSingleUserApi } from "../../api/user/fetchSingleUserApi";
import { useFetchQueryWithParams } from "../../hooks/useFetchQuery";

export const FetchSingleUserService = (userId) => {
  return useFetchQueryWithParams("users",fetchSingleUserApi, userId);
};
