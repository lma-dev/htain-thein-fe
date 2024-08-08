import { z } from 'zod';
import { regularCostSchema } from '../../../schema/regularCostSchema';

export type RegularCostSchemaType= z.infer<typeof regularCostSchema>;