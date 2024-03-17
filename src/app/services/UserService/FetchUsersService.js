import { fetchUsersApi } from "../../api/user/fetchUsersApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchUsersService = (generalSearch, role, accountStatus) => {
  return useFetchQuery(["users", generalSearch, role, accountStatus], () =>
    fetchUsersApi(generalSearch, role, accountStatus)
  );
};
