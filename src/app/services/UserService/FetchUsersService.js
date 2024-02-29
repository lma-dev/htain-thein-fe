import { fetchUsersApi } from "../../api/user/fetchUsersApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchUsersService = () => {
  return useFetchQuery("users", fetchUsersApi);
};
