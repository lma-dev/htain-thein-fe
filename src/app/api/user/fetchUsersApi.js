import { fetchAllData } from "../../utils/ApiMethodHelper";

export const fetchUsersApi = async (
  generalSearch = "",
  role,
  accountStatus
) => {
  let url = `/users?generalSearch=${generalSearch}`;

  if (role) {
    url += `&role=${role}`;
  }
  if (accountStatus) {
    url += `&accountStatus=${accountStatus}`;
  }
  return await fetchAllData(url);
};
