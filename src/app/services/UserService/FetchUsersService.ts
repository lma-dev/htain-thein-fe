import { fetchUsersApi } from "../../api/user/fetchUsersApi";
import { useFetchQuery } from "../../hooks/useFetchQuery";

export const FetchUsersService = ( 
  generalSearch: string,
  role: string, 
  accountStatus: string, 
  page: number
) => {
  return useFetchQuery(
    ["users", generalSearch, role, accountStatus, [page]],
    () => fetchUsersApi(generalSearch, role, accountStatus, page)
  );
};
