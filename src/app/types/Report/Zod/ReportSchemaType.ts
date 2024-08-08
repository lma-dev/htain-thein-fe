import { z } from 'zod';
import { reportSchema } from '../../../schema/reportSchema';

export type ReportSchemaType= z.infer<typeof reportSchema>;