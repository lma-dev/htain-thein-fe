// api.js
import { fetchAllData } from '../../libs/ApiRequestHelper';
import {checkUserRoles} from '../../libs/checkUserRole';

export const fetchAllNotificationsApi = async (setData, setLoading) => {
  try {
   const response = await fetchAllData("/all-notis");

    setData(response.data);
    setLoading(false);
  } catch (error) {
    setLoading(false);
  }
};

