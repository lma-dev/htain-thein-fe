import { z } from 'zod';
import { userSchema } from '../../../schema/userSchema';

export type UserSchemaType= z.infer<typeof userSchema>;