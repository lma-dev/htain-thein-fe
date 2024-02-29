// api.js
import { fetchAllData } from '../../libs/ApiMethodHelper';
import {checkUserRoles} from '../../libs/checkUserRole';

export const fetchAllDashboardDataApi = async (setData, setLoading) => {
  try {
    const [fetchFinancial, fetchUsers, fetchReports, fetchUncheckReports, fetchRegularData, role] = await Promise.all([
      fetchAllData("/calculations"),
      fetchAllData("/users"),
      fetchAllData("/reports"),
      checkUserRoles()
    ]);

    const data = {
      userCount: fetchUsers.data.length,
      reportsCount: fetchReports.meta.totalItems,
      income: fetchFinancial.data.income,
      outcome: fetchFinancial.data.outcome,
      balanceData: fetchFinancial.data,
      uncheckReports: fetchUncheckReports.data,
      regularData: fetchRegularData.data,
      userRole: role,
    };

    setData(data);
    setLoading(false);
  } catch (error) {
    setLoading(false);
  }
};

