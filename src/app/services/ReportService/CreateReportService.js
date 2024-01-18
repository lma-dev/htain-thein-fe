import { createData } from "../../libs/ApiRequestHelper";

export const createReportService = async (newData) => {
        return await createData('/reports',newData);
};
  