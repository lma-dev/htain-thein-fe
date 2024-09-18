import { fetchSingleUserApi } from "../../api/user/fetchSingleUserApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchSingleUserService = (userId:number) => {
  return useFetchQuery(["users", userId], () => fetchSingleUserApi(userId));
};
