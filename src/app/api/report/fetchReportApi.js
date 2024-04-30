import { fetchAllData } from "../../utils/ApiMethodHelper";

export const fetchReportsApi = async (
  generalSearch = "",
  amount,
  confirmStatus,
  type,
  createdAt
) => {
  let url = `/reports?generalSearch=${generalSearch}`;

  if (amount) {
    url += `&amount=${amount}`;
  }
  if (type) {
    url += `&type=${type}`;
  }
  if (confirmStatus) {
    url += `&confirmStatus=${confirmStatus}`;
  }
  if (createdAt) {
    url += `&createdAt=${createdAt}`;
  }

  return await fetchAllData(url);
};
