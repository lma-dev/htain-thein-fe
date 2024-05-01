import { fetchUsersApi } from "../../api/user/fetchUsersApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchUsersService = (generalSearch, role, accountStatus, page) => {
  return useFetchQuery(
    ["users", generalSearch, role, accountStatus, [page]],
    () => fetchUsersApi(generalSearch, role, accountStatus, page)
  );
};
