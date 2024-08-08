import { z } from 'zod';
import { contactSchema } from '../../../schema/contactSchema';

export type ContactSchemaType= z.infer<typeof contactSchema>;