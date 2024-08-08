import { createReportApi } from "../../api/report/createReportApi";
import { ReportSchemaType } from "../../types/Report/Zod/ReportSchemaType";

export const createReportService = async (newData:ReportSchemaType) => {
  return await createReportApi(newData);
};
