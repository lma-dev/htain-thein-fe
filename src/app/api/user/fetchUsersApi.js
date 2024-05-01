import { fetchAllData } from "../../utils/ApiMethodHelper";

export const fetchUsersApi = async (
  generalSearch = "",
  role,
  accountStatus,
  page = 1
) => {
  let url = `/users?page=${page}&generalSearch=${generalSearch}`;

  if (role) {
    url += `&role=${role}`;
  }
  if (accountStatus) {
    url += `&accountStatus=${accountStatus}`;
  }
  return await fetchAllData(url);
};
