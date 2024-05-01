import { fetchAllData } from "../../utils/ApiMethodHelper";

export const fetchReportsApi = async (
  generalSearch = "",
  amount,
  confirmStatus,
  type,
  createdAt,
  page = 1
) => {
  let url = `/reports?page=${page}&generalSearch=${generalSearch}`;

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
